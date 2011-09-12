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

https.get({
        host : 'mtgox.com',
        path : '/api/0/data/ticker.php'
    }, 
    function(res){
        var data = '';
        res.on('data', function(chunk){
            console.log(chunk);
            data += chunk;
        });
        res.on('end', function(){
            try{
                var stats = JSON.parse(data);
            }catch(e){
                outputError();
                return;
            }            
        });
    }
).on('error', function(e) {
    outputError();
});

function outputError(){
    console.log(' \x1b[31msomething went wrong accessing the stats. Try again later?\x1b[0m\n');
}