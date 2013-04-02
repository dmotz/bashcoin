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

 buy    $5.13
 sell   $5.15
 high   $5.17
 low    $5.10

```

### Options:

```
  Usage: bashcoin.js [options]
  
  Options:
  
    -h, --help                output usage information
    -V, --version             output the version number
    -c, --cont                run continuously, query every 30 seconds
    -b, --buy                 output buy
    -s, --sell                output sell
    -S, --spread              output spread (rounded)
    -H, --high                output high
    -L, --low                 output low
    -a, --avg                 output average
    -v, --vol                 output volume
    -p, --vwap                output volume-weighted average price
    -l, --last                output last
    -A, --all                 output all available stats
    -i, --interval [seconds]  custom interval for continuous output

```

Run bashcoin with `-c` to see a continuous output with delta percentages:

```
 buy    $7.80
 sell   $7.81 +0.11%
 high   $7.90
 low    $7.10 -0.44%

```

Try `bashcoin -Ac` to see all available stats outputted every 30 seconds:

```
 buy    $7.47 +0.36%
 sell   $7.54 -0.71%
 high   $7.90
 low    $7.10
 avg    $7.57
 vol    95,907.27 BTC +0.01%
 vwap   $7.51
 last   $7.54 +1.28%
 spread $0.06 -116.1%

```

You can define a custom output interval in seconds with `-i`.

