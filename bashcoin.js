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
    bashcoin = require('commander');

bashcoin
    .version('0.0.3')
    .option('-b, --buy', 'output buy')
    .option('-s, --sell', 'output sell')
    .option('-i, --high', 'output high')
    .option('-l, --low', 'output low')
    .option('-a, --avg, --average', 'output average')
    .option('-o, --vol', 'output volume')
    .option('-p, --vwap', 'output volume-weighted average price')
    .option('-t, --last', 'output last')
    .parse(process.argv);

var reqOptions = {
    host : 'mtgox.com',
    path : '/api/0/data/ticker.php',
    port : 443,
    headers : { 'User-Agent' : 'bashcoin' }
}

var req = https.get(reqOptions, function(res){
        var data = '';
        res.on('data', function(chunk){
            data += chunk;
        });
        res.on('end', function(){
            try{
                var stats = JSON.parse(data);
                handleStats(stats);
            }catch(e){
                outputError(e);
                return;
            }           
        });
    }
).on('error', function(e){
    outputError(e);
}).end();

function handleStats(obj){
    var ticker = obj.ticker;
    console.log('');
    if(process.argv.length < 3){
        bashcoin.buy  = true;
        bashcoin.sell = true;
        bashcoin.high = true;
        bashcoin.low  = true;
    }
    var terms = ['buy', 'sell', 'high', 'low', 'avg', 'vol', 'vwap', 'last'];
    for(var i = 0, len = terms.length; i < len; i++){
        var term = terms[i],
            pad  = term.length === 3 ? '    ' : '   ';
        bashcoin[term] && console.log(' ' + term + pad + ticker[term]);
    }
}

function outputError(e){
    console.error(e);
    console.error(' \x1b[31msomething went wrong accessing the stats.\x1b[0m\n');
}
