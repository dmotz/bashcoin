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
    .version('0.0.1')
    .option('-c --cont', 'run continuously')
    .option('-b, --buy', 'output buy')
    .option('-s, --sell', 'output sell')
    .option('-h, --high', 'output high')
    .option('-l, --low', 'output low')
    .option('-a, --avg, --average', 'output average')
    .option('-v, --vol', 'output volume')
    .option('-p, --vwap', 'output volume-weighted average price')
    .option('-l, --last', 'output last')
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
                console.log(stats);
            }catch(e){
                outputError(e);
                return;
            }           
        });
    }
).on('error', function(e) {
    outputError(e);
}).end();

function outputError(e){
    console.log(e);
    console.log(' \x1b[31msomething went wrong accessing the stats.\x1b[0m\n');
}