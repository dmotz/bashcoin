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
  -V, --version         output the version number
  -c, --cont            run continuously, query every 30 seconds
  -b, --buy             output buy
  -s, --sell            output sell
  -S, --spread          output spread (rounded)
  -H, --high            output high
  -L, --low             output low
  -a, --avg, --average  output average
  -v, --vol             output volume
  -p, --vwap            output volume-weighted average price
  -l, --last            output last
  -A, --all             output all available stats

```

