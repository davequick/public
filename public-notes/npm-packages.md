# Packages / Libraries

## @async
* async guidance on approaches - http://www.sebastianseilund.com/nodejs-async-in-practice when to use what to solve ___ problem
* async = a best choice in category for power and features
* node-squad = small subset on async
* dank-amap - async map function with rate limiting
* node-vasync = observable async - inspired by async

## @benchmark
* benchmark = https://github.com/bestiejs/benchmark.js
* Matcha - comprehensive caffiene based approach to benchmarking
* node-benchmark = nice output but not used by most
* nodebench = weak usage, simple benchmak
* node-ben = yaet another benchmark
* stream-bench = measure stream throughput
* tools and techniques for cloud = https://www.joyent.com/blog/benchmarking-the-cloud = noploop, sysbench, iperf, fio

## @build @development @deploy and @monitor
* benchmark = more used = winner
* changelog = http://npmawesome.com/posts/2014-05-23-changelog/ = automate versioning and changelog of what has happened into markdown comments from commit messages
* grunt-benchmark = grunt task for benchmarking = relatively decent usage.
* grunt-bower-install - install bower dependencies from command line and allow them to be injected by a grunt build task.
* grunt-cli = command line grunt
* grunt-mongo-migrations = helper to ensure versioned databases have a consistent way to 'upgrade' their mongo database as needed
* grunt-mocha-istanbul make easy usage of istanbul from mocha/grunt
* grunt-pagespeed = google page speed during testing
* load-grunt-tasks = dev helper to load all tasks using globs
* nodebench = useful stats for inspiration, not well used
* nodemon, node-dev, forever, node-supervisor = ability to restart your app on file change or death of process
* npm-workspace = ability to set up quickly local linked npm projects in a programmatic command line driven fashion to get consistency in your dev environment and make local packages easier to deal with.
* rnpm = resolve recursively all npm packages and include them at the root of the project and link them so only one copy of each rather than the usual NPM, command line tool
* terminal-menu = console menu
* yeoman = scaffolding / bootstrap new projects for grunt, package.json, etc.

## @config and @cli arguments
* commander = nice command line parser with self documenting options / help build up - @cli @commandline @parser
* configs = NODE_ENV=production / development / staging and pick up right son file.
* minimist = @cli library massively popular, parse arguments replaces optimist
* mongoconfig - store in mongo = https://www.npmjs.org/package/mongoconfig
* nconf = our choice = supports cli and file and programmatic, etc. setting of run time options.
* node-inspector - Node.js debugger based on Blink Developer Tools
* prompt = prompt library is another @cli interpreter that is very popular
* yargs = another command line parser

## @coverage
* istanbul
* mocha-lcov-reporter @test @coverage
* blanket

## @dates @date
* datejs = @date extensions for easy parsing and manipulation, @humanize
* date-utils =  polypil l for date - some nice happy shortcuts (add dates, date parts extended, etc.)
* moment = good manipulator of date data
* twix.js - moment.js plugin for time ranges @timerange @humanize
* zachleat/Humane-Dates = 4 days ago, etc. for time differences

## @db
* mongoose = ORM for mongo
* waterline = ORM for multiple backends https://github.com/balderdashy/waterline = Node.js with support for mysql, mongo, postgres, redis, and more

## @debug
* longjohn, stack-trace, raw-stacktrace = http://www.mattinsler.com/post/26396305882/announcing-longjohn-long-stack-traces-for-node-jsa = handy tool for extended stack traces in async environment of node.js @stack and Q supports longtrace as well internally iso turn it on when debugging

## @di @dependencyinjection research
* Architect di - use commedrcially by c9.io to run a node based business, 4 revs, solid.  easy to use and and will check the project’s dependency tree at “compile” time to identify inconsistencies
* Broadway - part of flatiron - Beside being a dependency container, the Broadway App object inherits from EventEmitter2 offering a shared event bus across all the plugins
* di.js v1 / v2.  v2 has to be cross compiled has zero production time on it and is likely due for a major portion of rewrite.- rewire (good for unit testing?) = ability to do DI
* electrolyte is a simple, lightweight inversion of control (IoC) container for Node.js applications
* scatter - Scatter services help decoupling the routes - seems pretty logical, kind of cool = https://github.com/mariocasciaro/scatter- Dependable = written by i.TV = discussion = - minimist = parse arguments
* Senaca - micro services framework - couldn’t wrap my head around it easily.
* Wire - DI Container with declarative syntax, Lifecycle management, Plugin architecture for extending Wire itself, Components, Proxies, Factories, Facets, AOP- - Intravenous - syntax is very clean - If you need to create a new instance of your module every time, just add the Factory suffix to your dependency,  When creating modules using Factories you can override dynamically its dependencies, You can have optional dependencies, using the ? suffix, If you need extra isolation for the lifecycle of your modules, or want to override some dependencies in a particular context, just create a nested container
= https://github.com/cujojs/wire/blob/master/docs/README.md = SUPER powerful.

## @events and emitters and message bus
* EventEmitter2 - publish/subscribe endpoint with filtering and wildcarding on top of eventemitter
* postal - publish/subscribe event bus in proc can be federated with work, channel based

## @file
* glob = super popular globing of file patterns
* mkdirp = recursive mkdir

## @encryption
* bcrypt = password / auth / encryption
* cookies = encryption support for anti tampering of https cookies, very popular

## @frontend and @html
* accounting.js = library for number, money and currency formatting, with optional excel-style column rendering (to line up symbols and decimals).
* augment.js =  http://olivernn.github.io/augment.js/ = add any missing prototype functions for old browsers to make them a usable.
* breeze = Cache queried, new, and changed data on the client for a responsive UI
* browserify http://browserify.org/ = reuse modules on the front end
* cheerio = jQuery for the server
* colorguard = http://npmawesome.com/posts/2014-07-09-colorguard/
* colors = D3 has 3 nice sets of 20 color pallets built in for visualizations. Color Blender = http://meyerweb.com/eric/tools/color-blend/ - gen’d based on a couple input params; Color combinations - ready made user submitted pallets = http://colorcombos.com/; Sample an image to get the “perfect” palette for it: http://www.degraeve.com/; Adobe latest trends in color design: http://www.kuler.com/?from=@
* docked = static site accelerator
* douglascrockford  /  JSON-js = original JSON object before baked into the javascript spec.
* els = embedded javascript templates used in express a lot.
* engine.io = backend of socket.io
* fattalble.js = infinite scroll that is dom friendly
* fileAPI = http://mailru.github.io/FileAPI/ = client side javascript chunking and streaming and file maniputlation
* head https://github.com/headjs/headjs = simple <head> include to be cross platform, cross browser compatible, @responsive, @resource @loader
* headroom.js = hide header undil needed
* hexbins = indiemaps.com/blog
* http-server = zero config command line http server used for test and static by people.
* humanize = A JS library for adding a “human touch” to data.
* ifvisible.js = if the page is 'visible' on the screen to a user
* jsdom = js implementation of DOM and HTML standards
* JSLitmus is a lightweight tool for creating ad-hoc JavaScript benchmark tests. Features include
* queue = https://github.com/mbostock/queue super light frontend queue
* requireJS is a JavaScript file and module lodaer
* responsive http://responsive-nav.com/ = simple, friendly framework for @responsive
* rich text editor =  tinymce =  http://www.tinymce.com/download/download.php
* socket.io-mongo = Mongodb store for socket.io
* spinners = single element css spinners to indicate progress - http://projects.lukehaas.me/css-loaders/

## @logging
* bunyan = https://github.com/trentm/node-bunyan = seems actively maintained and widely used
* caterpillar = streams based logging with line, method, file fetching for messages, you can use it in web browsers and on node backend
* log.io = http://logio.org/ = seems like an excellent way of having real time logging access from distributed environment.  Done by the narrative science guys.
* papertrail = product easily integrated into heroku
* winston = picked by john.  seems ok - has plugins to allow circular log rotation, simple interface logger.log(level, text, context) or helpers like logger.warn(), logger.error(), etc. - went dormant for a while and came back to life
* runtime log scooping recommendations = https://www.joyent.com/blog/node-js-in-production-runtime-log-snooping

## @machinelearning
* alike = kNN Machine Learning helper @machinelearning
* brain = neural network library, @machinelearning
* classifier = Naive Bayesian classifier based on reds backend @machinelearning
* cli-fuzzy - lots of good fuzzy string matchers - https://github.com/Yomguithereal/clj-fuzzy
* fuzzy = https://github.com/mattyork/fuzzy = good fuzzy string matching for node
* fuzzysearchjs = https://github.com/unlooped/FuzzySearchJS = modular search/fuzzy string match for js/node
* decision-tree - ID3 algorithm (predictor)
* dn = deep neural network learning library - MLP, RBM, DBN, CRBM, CDBN
* fann = Fast Artificial Neural Network Library - neural network, connected and disconnected networks
* fussy = @prediction and @recommendation engine
* fuzzyset.js = http://glench.github.io/fuzzyset.js/ fuzzy string set for javascript	
* gremlins.js is a monkey testing library written in JavaScript, for Node.js and the browser
* jstat = jstat library = https://github.com/jstat/jstat = JavaScript Statistical Library
* kmeans-js = k-means for node.js + browser
* learnings = logistic regression c4.5 decision tree algorithm in JS
* linearreg = linear regression with descent (not popular, uses sylvester under the covers - likely thin shim over a matrix invert)
* machine_learning = Logistic Regression. MLP (Multi-Layer Perceptron). SVM (Support Vector Machine). KNN (K-nearest neighbors), K-means clustering. 3 Optimization Algorithms (Hill-Climbing, Simulated Annealing, Genetic Algorithm), Decision Tree,NMF (non-negative matrix factorization)
* mathjs = mathjs.org = extensive math library for JavaScript and Node.js
* matrices, vektors, ndarray, mjs,geom-mat, sylvester = matrix math libraries native JS.
* nlpjs = natural language processing helper
* node-matrixlib = https://github.com/rook2pawn/node-matrixlib = matrix support and routines for nodejs
* numbers = Advanced Mathematics Library for Node.js and JavaScript
* numeric = http://www.numericjs.com/ = numerical computations in pure javascript
* perceptron = perceptron learning algorithm
* prediction.io = http://prediction.io/ = opensource library
* psMathStats = PseudoSavant Math and Statistics Library
* random-forest-classifier = decision tree classifiers using random forrest meta estimator
* sentiment = https://github.com/thisandagain/sentiment = sentiment detection based on AFINN wordlist

## @pasrser
* acorn.js = javascript parser = could be useful if we allow people to create their own javascript functions for filters in the ui
* joi = https://www.npmjs.org/package/joi = Object schema description language and validator for JavaScript objects
* jison = http://zaach.github.io/jison = context-free grammar as input and outputs a JavaScript file capable of parsing the language described by that grammar

## @promise @promises
* bluebird = another promises library = newness
* when = another promises/A+ implementation
* q = promises library = lots of love for this

## @reactive @funtional
* linq.js = Aggregate, All, Alternate, Any, Average, BufferWithCount, CascadeBreadthFirst, CascadeDepthFirst, Catch, Choice, Concat,Contains, Count, Cycle, DefaultIfEmpty, Distinct, Do, ElementAt, ElementAtOrDefault, Empty, Except, Finally, First, FirstOrDefault,Flatten, ForEach, Force, From, Generate, GetEnumerator, GroupBy, GroupJoin, IndexOf, Insert, Intersect, Join, Last, LastIndexOf,LastOrDefault, Let, Matches, Max, MaxBy, MemoizeAll, Min, MinBy, OfType, OrderBy, OrderByDescending, Pairwise, PartitionBy,Range, RangeDown, RangeTo, Repeat, RepeatWithFinalize, Return, Reverse, Scan, Select, SelectMany, SequenceEqual, Share, Shuffle,Single, SingleOrDefault, Skip, SkipWhile, Sum, Take, TakeExceptLast, TakeFromLast, TakeWhile, ThenBy, ThenByDescending, ToArray,ToDictionary, ToInfinity,ToJSON, ToLookup, ToNegativeInfinity, ToObject, ToString, Trace, Unfold, Union, Where, Write, WriteLine, Zip
* rxjs = @reactive

## @stream
* rate-limit, throttled-stream - simple @stream rate limiting
* readable-stream - use instead of the native “stream” to pin to a particular implementation of stream.  readable-stream comes in two major versions, v1.0.x and v1.1.x. The former tracks the Streams2 implementation in Node 0.10, including bug-fixes and minor improvements as they are added. The latter tracks Streams3 as it develops in Node 0.11; we will likely see a v1.2.x branch for Node 0.12. readable-stream uses proper patch-level versioning so if you pin to  "~1.0.0"  you’ll get the latest Node 0.10 Streams2 implementation, including any fixes and minor non-breaking improvements. The patch-level versions of 1.0.x and 1.1.x should mirror the patch-level versions of Node-core releases. You should prefer the 1.0.x releases for now and when you’re ready to start using Streams3, pin to  "~1.1.0"
* highland - high level @stream

## @test
* chai = expect, should, assert for mocha, there is an admin
* chai fuzzy = fuzzy matchers
* chai as promised = extension for chai allowing eventually for promises
* faker = great library for generating data of a given shape for quick creation of gobs of test data.
* html-inspector = https://github.com/philipwalton/html-inspector - html sanity checks
* mocha = support for async
* mocha-phantomjs = phatomjs runner
* mockjson = http://experiments.mennovanslooten.nl/2010/mockjson/ and https://www.npmjs.org/package/mockjson = mock json data on both client side and server side
* Nightwatch.js = frontend unit testing
* phantomjs = headless browser for test
* schmock = http://npmawesome.com/posts/2014-04-10-shmock/ = mock apis
* sinon = spy for useful unit testing
* stridercd = http://stridercd.com/ = continuous integration with strider

## @utility
* agenda = cron / human readable way of invoking a job on a regular recurring schedule
* beam.js = Streams and pipes for analytic or computational events
* chalk / colors replacement that is better for console coloring of messages
* chance - http://chancejs.com/ useful @random generators
* cli-tables = console tables
* dtrace prover = https://github.com/chrisa/node-dtrace-provider and http://mcavage.me/presentations/dtrace_conf_2012-04-03/#intro
* express.io = express + socket.io
* eyes = customizable value inspector
* function-rate-limit = limit execution of any function
* historical = https://github.com/stennettm/historical = versioning for mongoose
* hooked = ability to put in before and after hooks in any 1 and 2 airily callback supporting javascript function @instrumentation
* iconv-life = convert character encodings in native js
* ipify = get your own public ip address
* kardia = counters, timers, process insight, process status API module to expose any operational/internal indicators of any Node.js process for status aggregation and monitoring. JSON format over HTTP protocol
* lodash, underscore.js, lazy.js = lodash is underscore++ and I prefer and lazy.js can be super fast in cases where you don't complete iterations on collections.  _.forIn / _.forOwn / _.defaults /_.throttle / _.debounce
* look = perfomance profiler for node.js applications based on nodetime. Look doesn't send any data outside your server.
* medialize/uri.js = good url manipulation/mutation library
* memoize = https://github.com/medikoo/memoize = cache function call results - also remember if using async, the async library has a nice async memoise
* monitor-dashboard = dashboards for node.js apps
* mongomq is a messaging queue built on top of Node.js and MongoDB's tailable cursors
* mongodb-uri-node = standard MongoDB connect string URI format manipulator and parser
* node-monitor = Node.js application monitoring  http://lorenwest.github.io/node-monitor
* mqtt-ws = mqtt websocket bridge
* n = https://www.npmjs.org/package/n = npm install -g n && n stable
* nave = Virtual Environments for Node
* node-findit = walk a directory tree to find a file in node.js
* node-function-rate-limit - Limit the execution rate of any function, builds up list in memory as queue
* node-lru-cache = exactly what it says - has limitations evaluate for yourself per usage
* node-mac = node utilities for mac
* node-multimeter = https://github.com/Unitech/node-multimeter = multiple console progress bar support
* node-nibbler = Base32/base64 encode/decode library for Node
* node-queue  = means of using inseam, mongo, couch, tingo, or reds as a queue for jobs - i.e.e insert data into queue, have function processing queue
* node-restify = http://mcavage.me/node-restify = fast forward exposing rest service
* node-seq = Chainable asynchronous flow control for node.js with sequential and parallel primitives and pipeline-style error handling
* node-verror = https://github.com/davepacheco/node-verror = support error + cause
* node-vstream = useful for pipeline exploration = https://www.joyent.com/blog/exploring-node-js-streams-with-node-vstream
* nodemailer = winner for smtp delivery of content
* pandoc = common transformer of doc formats - useful to produce html, epub, mobi, html from source comments
* performance-now = high resolution timer exposed with now()
* pkginfo = pull properties easily from package.json, used for config and meta data commonly
* platform = platform detection (node verions or browser detection)
* pretty-error = nicer console view of errors
* progress - console indicator of progress
* scraperjs = two flavor (simple, complex) scraper of html data from a web link
* sequelize = multi dialect (mysql included) ORM
* serial port = magic serial library
* simple-statistics - javascript est practice simple implementations of functions required for stats.
* skyline = correlations @real-time @anomaly detectionsystem
* statsd = daemon for node.js listening for stats for counting and timing
* step = run functions in serial easily (also accomplished through async waterfall)
* string.js = extends string with handy helpers (.left(), .right(), .endswith(), .truncate(), between, camels, capitalize, chomp left, chomp right, collapswhitespace. contains, decode htmlentities, dasherize, escapehtml, ensure left, ensure right, is alpha, is empty, is alphanumeric, slower, isupper, lines, is numeric, pad, repeat, slugify, strip tags, strip punctuation, point, to float, toboggan, tocsv, template, etc.
* stringify-object = Stringify an object/array like JSON.stringify just without all the double-quotes
* traverse = traverse/transform every node with recursive walk
* validator = https://github.com/chriso/validator.js = simple string validations and sanitizers=
* wobot = hip chat client in node
* ws = web socket library - very popular client and server, RFC 6455 compliant
* performance debugging = https://www.joyent.com/developers/node/debug

## @visualization
* chart.js = simple html5 graphs = https://github.com/nnnick/Chart.js
* chartFactory = https://github.com/affini-tech/ChartFactory
* crossfilter = library for exploring large multivariate datasets in the browser
* cubism.js = time series visualization from square
* d3 = visualization library
* d3 on angular = http://www.ng-newsletter.com/posts/d3-on-angular.html and https://www.dashingd3js.com/d3-resources/d3-and-angular have some nice tips, techniques, ideas.
* dimple = object-oriented API for business analytics powered by d3
* famous = http://famo.us/ = hardware accelerated graphics for browsers framework.
* flamegraph = often used for performance runs = http://www.brendangregg.com/FlameGraphs/cpuflamegraphs.html and node-stackvis = can help with flamegraphs from javascript stacks
* fluid dynamics = https://nerget.com/fluidSim/
* lyric-node @graphing
* morris.js - fronted simple @chart @visualization @donut, @line, @area, @bar
* obelisk.js - isometric pixel objects
* phaser -  https://github.com/photonstorm/phaser - 2D gaming/visualization framework
* qr-image = qr codes made simple... var code = require('qr-image').image('http://blog.nodejitsu.com',{ type:'svg'}).pipe(output);
* radian JavaScript library that makes it easy to embed plots in HTML documents @frontend
* svgenie - save D3 graphs, and other SVG documents as a PNG without needing a server component
* three.js  - lightweight @3D @visualization library low level of complexity canvas, sag, css3D and WebGL renderers
* timeline = http://timeline.knightlab.com/# = nice functionality, pretty timelines.
* Tributary - http://tributary.io/ = rapid prototyping service
* two.js is a two-dimensional drawing api geared towards modern web browsers
* vega = visualization grammar for high level visualization description, basically JSON format to help generate actual views in HTML5 canvas or SVG with a interpreter

