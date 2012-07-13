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

 buy    5.13502
 sell   5.15
 high   5.1725
 low    5.1

```

### Options:

```
Usage: bashcoin [options]

Options:

  -h, --help            output usage information
  -V, --version         output the version number
  -c, --cont            run continuously, query every 30 seconds
  -b, --buy             output buy
  -s, --sell            output sell
  -S, --spread          output spread (rounded)
  -H, --high            output high
  -L, --low             output low
  -a, --avg             output average
  -v, --vol             output volume
  -p, --vwap            output volume-weighted average price
  -l, --last            output last
  -A, --all             output all available stats

```

Run bashcoin with `-c` to see a continuous output with delta percentages:

```
 buy    7.80999 +0%
 sell   7.81 +0.11%
 high   7.9 +0%
 low    7.1 -0.44%

```

Try `bashcoin -Ac` to see all available stats outputted every 30 seconds:

```
 buy    7.47744 +0.366%
 sell   7.54687 -0.70%
 high   7.9 +0%
 low    7.1 +0%
 avg    7.570290517 +0.001%
 vol    95907 +0.016%
 vwap   7.510398611 +0.000%
 last   7.54687 +1.283%
 spread 0.0694 -116.1%

```

You can define a custom output interval in seconds with `-i`.

