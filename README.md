# bashcoin

Realtime Bitcoin market stats from the command line.

Trade data from Mt. Gox.

Requires node.js and npm.

### Installation:

```
$ npm install -g bashcoin
```

### Default Usage:

```
$ bashcoin
 
 buy    3.6815
 sell   3.71998
 high   3.8975
 low    3.4
 
```

### Options:

```
Usage: bashcoin.js [options]

Options:

    -h, --help            output usage information
    -v, --version         output the version number
    -c, --cont            run continuously, query every 30 seconds
    -b, --buy             output buy
    -s, --sell            output sell
    -r, --spread          output spread (rounded)
    -i, --high            output high
    -l, --low             output low
    -a, --avg, --average  output average
    -o, --vol             output volume
    -p, --vwap            output volume-weighted average price
    -t, --last            output last

```

