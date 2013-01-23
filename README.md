# BigBench.js
**bigbench.js** is a distributed load-generation framework for web application benchmarking that collects data in real-time.

Visit [bigbench.io](http://mwaylabs.github.com/bigbench.js) for more information and documentation.

## Installation
It is written in pure Javascript and runs on node.js. Therefore you can install it using npm:
    sudo npm install bigbench -g

## Bot Network
The load is generated by a bot network. Multiple bots can be started on a single or multiple machines. This allows the generation of an almost unlimited amount of requests. A ramp-up time allows the bots to start gradually over the specified time period.

## Concurrency
The concurrency is controlled by two things: A concurrency parameter and the amount of bots. A concurrency parameter setting of 2 means that each bot starts 2 requests at the same time, waits for the to return and then continues with the next action.

## Multiple Actions
An action is a URL the benchmark requests. Each benchmark can have a single or multiple actions where the actions are defined by the url, the request path, the HTTP method and the parameters. The parameters can either be a fixed value object or a function that generates dynamic parameters for each request.

## Real-Time Analysis
The benchmark is fully controlled from a single instance, e.g. the localhost. All bots report their data live to a shared Redis database which means that the current requests per second and average request duration is always up-to-date.

## Rationale
We created BigBench because we were not satisfied with the usability and features of jMeter and ApacheBench. Our approach is to make it easy to use but with a maximum of performance.

## Testing
Run all tests with:

    NODE_ENV=test mocha

## Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
