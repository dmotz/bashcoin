#!/usr/bin/env node

/**
 * bashcoin
 * Bitcoin market stats from the command line
 * usage: $ bashcoin [stat]
 * uses Mt.Gox API
 * Dan Motzenbecker
 * MIT License
 */

var https = require('https'),
    bashcoin = require('commander'),
    req = false;

bashcoin
    .version('0.0.8')
    .option('-c, --cont', 'run continuously, query every 30 seconds')
    .option('-b, --buy', 'output buy')
    .option('-s, --sell', 'output sell')
    .option('-S, --spread', 'output spread (rounded)')
    .option('-H, --high', 'output high')
    .option('-L, --low', 'output low')
    .option('-a, --avg, --average', 'output average')
    .option('-v, --vol', 'output volume')
    .option('-p, --vwap', 'output volume-weighted average price')
    .option('-l, --last', 'output last')
    .option('-A, --all', 'output all available stats')
    .parse(process.argv);

var reqOptions = {
    host : 'mtgox.com',
    path : '/api/0/data/ticker.php',
    port : 443,
    headers : { 'User-Agent' : 'bashcoin' }
}

query();
bashcoin.cont && setInterval(query, 30000);

function query(){
    req && req.abort();
    req = https.get(reqOptions, function(res){
            var data = '';
            res.on('data', function(chunk){
                data += chunk;
            });
            res.on('end', function(){
                try{
                    var stats = JSON.parse(data);
                    handleStats(stats);
                }catch(e){
                    return outputError(e);
                }
            });
        }
    ).on('error', function(e){
        outputError(e);
    }).end();
}

function handleStats(obj){
    var ticker = obj.ticker;
    console.log('');
    if(!bashcoin.all &&
        (
            (!bashcoin.cont && process.argv.length < 3) ||
            ( bashcoin.cont && process.argv.length < 4)
        )
    ){
            bashcoin.buy  = true;
            bashcoin.sell = true;
            bashcoin.high = true;
            bashcoin.low  = true;
    }
    var terms = ['buy', 'sell', 'high', 'low', 'avg', 'vol', 'vwap', 'last'];
    for(var i = 0, len = terms.length; i < len; i++){
        var term = terms[i],
            pad  = term.length === 3 ? '    ' : '   ';
        (bashcoin[term] || bashcoin.all) && console.log(' ' + term + pad + ticker[term]);
    }
    if(bashcoin.spread || bashcoin.all){
       var spread = Math.round((ticker.sell - ticker.buy) * 10000) / 10000;
       console.log(' spread ' + spread);
    }
    console.log('');
}

function outputError(e){
    console.error(e);
    console.error(' \x1b[31msomething went wrong accessing the stats.\x1b[0m\n');
}
