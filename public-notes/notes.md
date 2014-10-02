------------------------------------------------------------------------------------------------------------------------------------------------
-- Guides / Advice
------------------------------------------------------------------------------------------------------------------------------------------------

@bestpractice @books and ebooks and extended guides
- 12 factor app methodology =  http://12factor.net/
- angular app structure recommendations = https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1
- angular 8 tips for beginners: http://leftshift.io/8-tips-for-angular-js-beginners/
- angular book - https://www.ng-book.com/ = great text
- angular for newbies tips: http://leftshift.io/8-tips-for-angular-js-beginners/ @angular
- angular service vs provider vs factory when and why = http://stackoverflow.com/questions/15666048/service-vs-provider-vs-factory
- angular style guide - https://github.com/johnpapa/angularjs-styleguide - component per file, Invoked Function syntax, coding style, file / directory organization, singleton vs. service simple explanations, etc.;
- async = outstanding async library - sync, async, waterfall, pipeline, N simultaneous while rest queued, etc.
- AWS Tips I Wish I'd Known Before I Started =  https://wblinks.com/notes/aws-tips-i-wish-id-known-before-i-started/ = Store no pop state on your server, store extra info in your logs (instance id, region, availability zone, environment, make use of http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html , use sdks of your language, disable ssh access to all servers because if you have to access via ssh your automation has failed, servers are ephemeral you don’t care about them only the service, don’t give servers elastic tips just load balancers, automate 4everything, everyone uses IAM no one uses master account, get alerts to become notifications, set up granular billing alerts, use ec2 roles do not permission applications an IAM account, assign permissions to group and not users, set up automated secutrity auditing, cloud trail to keep audit log, s3 use “-“ rather than “.” for bucket names or it won’t work with ssl, avoid file system mounts use sdks instead, use s3/cloudfront, use random strings at the start of your keys for s3 to spread objects further, ec2 / vlc = use tags, use termination protection, always use a vlc, use reserved instances for all you can, lock down security groups = NO 0.0.0.0/0, don’t keep unassociated elastic tips, terminate ssl on load balancer, pre warm ebbs if expecting large traffic influx, elastic ache use config endpoints rather than individual endpoints; set up RDS event subscription for failover; cloud watch use cli tools, use free metrics, use custom metrics, use detailed monitoring; scale down on insufficient data as well as alaerm, el health check instead of ec2 health check,only use AZs your ELB is confined for, don’t use multiple scaling triggers on same group. IAM use roles, users can have multiple api kets, Liam should use MFA.  R53 use allies records for amazon resources.  EMR specify dir on s3 for hive results… not root of bucket otherwise annoying nullpointerexception. be redundant across AZs, be aware of service limits before deploying (http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html), decide on key management strategy and naming convention early.
- callback convention = http://blog.risingstack.com/node-js-best-practices/ = callback convention (err, result), always check err, return on callkbacks, try to avoid this and new keep functional, small modules (i.e. no deathstars), use async, operational vs programmer errors, operational errors try to solve, retry, tell client, crash if unlikely to change, programmer errors crash immediately, LOG EVERYTHING, specify start and test script in packages, set NODE_ENV to production or staging or dev, use nconf, use a style guide,
- coding style - frontend - https://github.com/isobar-idev/code-standards/ = nice fronted coding style/standards summary from isobar
- coding style - google javascript style guide = http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
- coding style - node requires - http://www.mircozeiss.com/node-js-require-s-best-practices/ = formatting of requires at top of doc for better readability
- code coverage overview node = http://www.gregjopa.com/2014/02/testing-and-code-coverage-with-node-js-apps/
- CSS best practices = https://github.com/stevekwan/best-practices/blob/master/css/best-practices.md
- create and publish a npm module = http://quickleft.com/blog/creating-and-publishing-a-node-js-module
- di = newbie thoughts on di in node http://liamkaufman.com/blog/2013/08/06/how-angularjs-made-me-a-better-nodejs-developer/
- di = a survey of (some) node di libraries = http://www.mariocasciaro.me/dependency-injection-in-node-js-and-other-architectural-patterns
- error handling = https://www.joyent.com/developers/node/design/errors
- git - http://kentnguyen.com/development/visualized-git-practices-for-team/ = simplified guide on git for teams - recommends command line, branch, rebase, merge often, keep in sync - nice visuals and ensures you better understand the github graphs for understanding branch patterns
- git - walkthrough of alice git best practices = http://aliceinfo.cern.ch/Offline/node/2972
- heroku recommendations = https://devcenter.heroku.com/articles/node-bespodcaastt-practices = use environment variables,Start new projects with npm init, Declare all dependencies, Specify a start script, Specify a test script, Keep dependencies out of source control, Use environment variables to configure npm, Bring your own npm registry, Keep track of outdated dependencies,  npm scripts to run custom build steps, Browserify, try harmony
- javascript advanced javascript = http://ejohn.org/apps/learn/ = intro to some of the concepts of binding and such - not super advanced but an accelerator for those unfamiliar
- javascript bind = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind = live it learn it, love it
- JavaScript Best Practices =  http://www.codeproject.com/Articles/580165/JavaScript-Best-Practices = use === / !==, use semicolons, use jslint/jshint use a namespace, avoid eval, use decimals cautiously (i.e. .1 + .2 is not .3), start blocks on same line, use explicit blocks, declare all variables first not use with, careful of typeofparseInt with care, do not use switch fall through, avoit for in loops (for(var i in arr) can pick up enumeration visible members), var to declare variables,
- Javascript Best Practices mongomqArchitecture = http://addyosmani.com/largescalejavascript/
- Javascript Constructors = http://tobyho.com/2010/11/22/javascript-constructors-and/ and WITHOUT constructors = http://tobyho.com/2012/10/21/javascript-OO-without-constructors/
- Javascript Eloquent Javascript = http://eloquentjavascript.net/
- JavaScript Jabber - another high quality weekly podcast = http://javascriptjabber.com/
- Javascript N dimensional array performacne and thoughts = https://github.com/mikolalysenko/ndarray-experiments
- Javascript Pragmatic best practices = https://github.com/stevekwan/best-practices/blob/master/javascript/best-practices.md
- Javascript common "gotchas" = https://github.com/stevekwan/best-practices/blob/master/javascript/gotchas.md
- Javascript - improve your javascript = http://www.onextrapixel.com/2013/02/21/improve-your-code-with-smart-javascript-techniques-and-patterns/
- Joyent (makers of node.js) best practices = https://www.joyent.com/developers/node
- machine learning in node = https://speakerdeck.com/florianeckerstorfer/machine-learning-with-node-dot-js-and-predictionio-1
- memory leaks = http://michaelheap.com/debugging-nodejs-memory-leaks/
- migrations and future proofing @bestpractice = prismatic writeup =  https://github.com/Prismatic/eng-practices/blob/master/swe/Migrations_and_future_proofing.md
- Mixu's node book -  http://book.mixu.net/
- mapreduce and data mining = http://horicky.blogspot.com/ = great blog - smart guy
- mapreduce patterns = http://highlyscalable.wordpress.com/2012/02/01/mapreduce-patterns/
- memory analysis = https://developer.chrome.com/devtools/docs/memory-analysis-101
- mongodb - storing libraries in the db for js  = http://stackoverflow.com/questions/8418651/techniques-for-storing-libraries-in-mongodbs-system-js
- mongodb - trees = http://docs.mongodb.org/manual/tutorial/model-tree-structures-with-child-references/
- mongoose common mistakes = http://blog.mongodb.org/post/52299826008/the-mean-stack-mistakes-youre-probably-making-with
- nodejs manual in pdf, mobi and epub format at any time: https://github.com/zemirco/nodejs-pdf-docs
- nodeup.com = http://nodeup.com/ a node podcast = weekly and still relevant
- nodeschool.io = node online interactive lessons.
- node - debug = http://stackoverflow.com/questions/1911015/how-to-debug-node-js-applications
- node dtrace = http://mcavage.me/presentations/dtrace_conf_2012-04-03/#intro
- node - the art of node = https://github.com/maxogden/art-of-node#the-art-of-node
- node - mastering node = http://visionmedia.github.io/masteringnode/book.html - async require?  http require?  module compilers?  I kid you not, cool stuff.
- node - code coverage = http://www.gregjopa.com/2014/02/testing-and-code-coverage-with-node-js-apps/
- node - require and singletons and npm having multiple copies of a file = http://justjs.com/posts/singletons-in-node-js-modules-cannot-be-trusted-or-why-you-can-t-just-do-var-foo-require-baz-init
- npm search - uses gtihub forks/favorites and npm downloads: http://eirikb.github.io/nipster/ - look for well used and forked/favorited in addition to download counts @npm
- Promises vs. callbacks = Why I am switching to promises = http://spion.github.io/posts/why-i-am-switching-to-promises.html = perf and memory footprint of promises (bluebird and q and callbacks compared)
- python = http://learnpythonthehardway.org/book/
- Quara thread - decent advice =  http://www.quora.com/Node-js/What-are-the-best-practices-for-node-js = loggy, priority job queue (kue), LearnBoost, Async, seperate config settings into file and have prod/dev/etc seperate, airebrakeapp to log exceptions, nodemon for restart, nowjs/dnode for real time, when serving statics append parameter hash of contenct so easy to cache and easy to update, forever, underscore, datejs (human formatted dates), try/catch, callbacks(err, result), config file for each env, socketio, redis, handlebars, middlemanapp for site assembly
- reactive = http://www.reactivemanifesto.org/
- streams in node = http://nodestreams.com/ super fast way to build basic understanding of stream capability with real code
- stream handbook = https://github.com/substack/stream-handbook @stream @howto
- stream2 background release http://blog.nodejs.org/2012/12/20/streams2/
- through2 = wrapper around Node streams2 Transform to avoid explicit subclassing noise
- time decay = http://www.evanmiller.org/how-not-to-sort-by-average-rating.html
- writing testable code = http://misko.hevery.com/attachments/Guide-Writing%20Testable%20Code.pdf - a great synopsis of how to write better code for testability.  Nice find from Ben. @test

@blogs
- mongodb - Kirill Davletkildeev = https://darkiri.wordpress.com/author/darkiri/
- strongloop - http://strongloop.com/strongblog/

@lists
- awesome-nodejs = https://github.com/sindresorhus/awesome-nodejs = nice list that is curated/maintained by community to point at projects of note and utility.
- database of projects = http://jsdb.io, http://www.javascriptoo.com/ = lists of “best" javascript frameworks/plugins - if nothing else is a source of well used and popular libraries even if not the best.
- NOSQL = http://nosql-database.org/ = 150+ databases alternatives

@products / @services / @technologies
- aplus promises spec = https://github.com/promises-aplus/promises-spec
- ab test framework = http://sixpack.seatgeek.com/
- ack = http://beyondgrep.com/ = grep++ for programmers
- angular ui elements = http://angular-ui.github.io/
- ascii diagrams for illustrations = http://asciiflow.com/ (and http://www.jave.de/figlet/figfont.html / Java Ascii Versatile Editor)
- benchmark from apache for load generation = http://zgadzaj.com/benchmarking-nodejs-basic-performance-tests-against-apache-php
- brimir - open source ticket manager
- cassandra @db @storage for name value pairs @nvp
- coveralls = service that works with your continuous integration server to give you test coverage history and statistics. Free for open source, pro accounts for private repos, instant sign up with GitHub OAuth.
- d3 = data driven documents = https://vimeo.com/35005701; bostock overall eye candy; https://vimeo.com/29458354; github.com/sones/sones; square.github.com/cube; hit hub.com/mikedewar/D3py; https://vimeo.com/groups/136003;
- dapper = google's distributed tracing infrastructure - just be familiar with term and there is a decent paper on it in the public from 2010
- datahero = https://datahero.com/ = lightweight dashboarding with custom backend data sources
- deobfuscate js = http://jsbeautifier.org/ and http://unminify.com/
- dex = data explorer tools - data extraction, transformation, persistence, visualization, r integration, nvd3, sankey, time-lapse, groovy, basic line / bar/ plot, chord, starburst, partition, tremor, parallel, force diagrams, force trees, scatter plot matrices (SPLOM), relational views, dendrograms, node link and hive plots.
- docker.io = lightweight ‘container’ infrastructure for having small FAST pinup of virtual environments @container
- edge = http://tjanczuk.github.io/edge/#/ = RUN NODE.JS AND .NET IN-PROCESS
- elasticsearch.com = hadoop search
- extractCSS - Online CSS Extractor
- fusion tables = https://support.google.com/fusiontables/?hl=en#topic=1652595
- geojson format = geoispacial indexing format
- graph inspection tools = http://kdt.sourceforge.net/wiki/index.php/Main_Page
- hummingbird = https://github.com/mnutt/hummingbird =  web traffic “real time” we don’t mean it refreshes every 5 minutes—WebSockets enable Hummingbird to update 20 times per second
- less = pre-processor for css
- leveldb = fast key value store from google
- mongodb @db @storage
- mongo tool = mongovue (windows), robomongo (windows/mac, java based)
- mongraph combines mongo and neo4j for documentstorage database with graph-database relations. Build on NodeJS.
- mosca is a node.js mqtt broker, which can be used
- mosquitto = opensource MQTT broker
- neo4j - http://www.neo4j.org/ @graphdb @db @storage
- nodetime = node monitoring and perf insights, etc. http://nodetime.com/
- OpenRefine = open source tools/techniques for improving messy input data = https://github.com/OpenRefine
- OrientDB is an Open Source NoSQL DBMS, Document and @graphdb DBMSs with SQL query capabilities @db @storage
- pandoc = a universal document converter - can convert documents in markdown, reStructuredText, textile, HTML, DocBook, LaTeX, MediaWiki markup, OPML, Emacs Org-Mode, Txt2Tags, Microsoft Word docx, EPUB, or Haddock markup to: HTML formats: XHTML, HTML5, and HTML slide shows using Slidy, reveal.js, Slideous, S5, or DZSlides;Word processor formats: Microsoft Word docx, OpenOffice/LibreOffice ODT, OpenDocument XM; Ebooks: EPUB version 2 or 3, FictionBook2;  Documentation formats: DocBook, GNU TexInfo, Groff man pages, Haddock markup; Page layout formats: InDesign ICML; Outline formats: OPML; TeX formats: LaTeX, ConTeXt, LaTeX Beamer slides; PDF via LaTeX; Lightweight markup formats: Markdown, reStructuredText, AsciiDoc, MediaWiki markup, DokuWiki markup, Emacs Org-Mode, Textile; Custom formats: custom writers can be written in lua.
- pluralsight.com = online learning = http://pluralsight.com - user: dave@quicks.me password: Timpsp1
- pm2 = production process manager (mainly) for Node.JS apps with advanced features. Perfectly designed for micro services architecture. http://signup.pm2.io/
- raw = visualization javascript service = http://raw.densitydesign.org/ - use as inspiration for graph implementations
- REDIS @db @storage
- regex - http://regexr.com/ = excellent place to build a reggae quickly, devtool, @regex
- RethinkDB, secondthought npm library for nodejs client @db @storage
- scikit-learn = Machine Learning in Python = https://github.com/scikit-learn/scikit-learn
- sequence diagrams = https://www.websequencediagrams.com/# and http://sullerandras.github.io/SVG-Sequence-Diagram/
- slack = team communications - like hipchat++
- slides = http://slides.com/
- smoothing = kernel smoothing = pretty graph lines = http://en.wikipedia.org/w/index.php?title=Kernel_smoother&redirect=no
- spark = apache cluster computing = http://spark.incubator.apache.org/
- tempodb = pricey time series database as a service TODO(davequick): read through thte docs there on api
- The Web Never forgets = https://securehomes.esat.kuleuven.be/~gacar/persistent/index.html# = excellent overview of persistent tracking mechanisms
- thinkful.com = online learning
- v8 = https://code.google.com/p/v8/

@ci/di
- article 1 on ci/di = http://alexgaynor.net/2010/nov/02/continuous-integration-i-want/
- article 2 on ci/di = http://blog.thinkful.com/post/52651178399/under-the-hood-at-thinkful-continuous-integration-ci
- bamboo - https://www.atlassian.com/software/bamboo
- buildMaster - http://inedo.com/buildmaster/overview
- cimpler, command-line in node.js - https://github.com/danielbeardsley/cimpler
- circle - https://circleci.com/
- clinker - http://clinkerhq.com/
- codeship - https://www.codeship.io/
- continuity - https://continuityapp.com/
- cruise Control - http://cruisecontrol.sourceforge.net/
- drone.io - https://drone.io/
- gitlabCI - http://gitlab.org/
- integrity - http://integrityapp.com/
- janky - https://github.com/github/janky
- jenkins / Hudson - http://jenkins-ci.org/
- semaphore - https://semaphoreapp.com/
- solano Labs https://www.solanolabs.com/
- strider = continuous integration and deployment = https://github.com/Strider-CD/strider#overview
- teamCity - http://www.jetbrains.com/teamcity/
- travis CI - http://travis-ci.com
- wercker - https://app.wercker.com/

@techniques
- @heatmap  @visualization = http://sebastianraschka.com/Articles/heatmaps_in_r.html
- @profile = http://blog.nodejs.org/2012/04/25/profiling-node-js/ and http://www.clock.co.uk/blog/easy-cpu-profiling-in-node-js

@inspiration
- windflow = https://github.com/cambecc/earth
- @visualization variety for inspiration - http://www.datavizcatalogue.com/ = great place to go when considering the different ways you might be able to display a specific type of information.

------------------------------------------------------------------------------------------------------------------------------------------------
-- Packages / Libraries
------------------------------------------------------------------------------------------------------------------------------------------------

@async
- async guidance on approaches - http://www.sebastianseilund.com/nodejs-async-in-practice when to use what to solve ___ problem
- async = a best choice in category for power and features
- node-squad = small subset on async
- dank-amap - async map function with rate limiting
- node-vasync = observable async - inspired by async

@benchmark
- benchmark = https://github.com/bestiejs/benchmark.js
- Matcha - comprehensive caffiene based approach to benchmarking
- node-benchmark = nice output but not used by most
- nodebench = weak usage, simple benchmak
- node-ben = yaet another benchmark
- stream-bench = measure stream throughput
- tools and techniques for cloud = https://www.joyent.com/blog/benchmarking-the-cloud = noploop, sysbench, iperf, fio

@build @development @deploy and @monitor
- benchmark = more used = winner
- changelog = http://npmawesome.com/posts/2014-05-23-changelog/ = automate versioning and changelog of what has happened into markdown comments from commit messages
- grunt-benchmark = grunt task for benchmarking = relatively decent usage.
- grunt-bower-install - install bower dependencies from command line and allow them to be injected by a grunt build task.
- grunt-cli = command line grunt
- grunt-mongo-migrations = helper to ensure versioned databases have a consistent way to 'upgrade' their mongo database as needed
- grunt-mocha-istanbul make easy usage of istanbul from mocha/grunt
- grunt-pagespeed = google page speed during testing
- load-grunt-tasks = dev helper to load all tasks using globs
- nodebench = useful stats for inspiration, not well used
- nodemon, node-dev, forever, node-supervisor = ability to restart your app on file change or death of process
- npm-workspace = ability to set up quickly local linked npm projects in a programmatic command line driven fashion to get consistency in your dev environment and make local packages easier to deal with.
- rnpm = resolve recursively all npm packages and include them at the root of the project and link them so only one copy of each rather than the usual NPM, command line tool
- terminal-menu = console menu
- yeoman = scaffolding / bootstrap new projects for grunt, package.json, etc.

@config and @cli arguments
- commander = nice command line parser with self documenting options / help build up - @cli @commandline @parser
- configs = NODE_ENV=production / development / staging and pick up right son file.
- minimist = @cli library massively popular, parse arguments replaces optimist
- mongoconfig - store in mongo = https://www.npmjs.org/package/mongoconfig
- nconf = our choice = supports cli and file and programmatic, etc. setting of run time options.
- node-inspector - Node.js debugger based on Blink Developer Tools
- prompt = prompt library is another @cli interpreter that is very popular
- yargs = another command line parser

@coverage
- istanbul
- mocha-lcov-reporter @test @coverage
- blanket

@dates @date
- datejs = @date extensions for easy parsing and manipulation, @humanize
- date-utils =  polypil l for date - some nice happy shortcuts (add dates, date parts extended, etc.)
- moment = good manipulator of date data
- twix.js - moment.js plugin for time ranges @timerange @humanize
- zachleat/Humane-Dates = 4 days ago, etc. for time differences

@debug
- longjohn, stack-trace, raw-stacktrace = http://www.mattinsler.com/post/26396305882/announcing-longjohn-long-stack-traces-for-node-jsa = handy tool for extended stack traces in async environment of node.js @stack and Q supports longtrace as well internally iso turn it on when debugging

@di @dependencyinjection research
- Architect di - use commedrcially by c9.io to run a node based business, 4 revs, solid.  easy to use and and will check the project’s dependency tree at “compile” time to identify inconsistencies
- Broadway - part of flatiron - Beside being a dependency container, the Broadway App object inherits from EventEmitter2 offering a shared event bus across all the plugins
- di.js v1 / v2.  v2 has to be cross compiled has zero production time on it and is likely due for a major portion of rewrite.- rewire (good for unit testing?) = ability to do DI
- electrolyte is a simple, lightweight inversion of control (IoC) container for Node.js applications
- scatter - Scatter services help decoupling the routes - seems pretty logical, kind of cool = https://github.com/mariocasciaro/scatter- Dependable = written by i.TV = discussion = - minimist = parse arguments
- Senaca - micro services framework - couldn’t wrap my head around it easily.
- Wire - DI Container with declarative syntax, Lifecycle management, Plugin architecture for extending Wire itself, Components, Proxies, Factories, Facets, AOP- - Intravenous - syntax is very clean - If you need to create a new instance of your module every time, just add the Factory suffix to your dependency,  When creating modules using Factories you can override dynamically its dependencies, You can have optional dependencies, using the ? suffix, If you need extra isolation for the lifecycle of your modules, or want to override some dependencies in a particular context, just create a nested container
= https://github.com/cujojs/wire/blob/master/docs/README.md = SUPER powerful.

@events and emitters and message bus
- EventEmitter2 - publish/subscribe endpoint with filtering and wildcarding on top of eventemitter
- postal - publish/subscribe event bus in proc can be federated with work, channel based

@file
- glob = super popular globing of file patterns
- mkdirp = recursive mkdir

@encryption
- bcrypt = password / auth / encryption
- cookies = encryption support for anti tampering of https cookies, very popular

@frontend and @html
- accounting.js = library for number, money and currency formatting, with optional excel-style column rendering (to line up symbols and decimals).
- augment.js =  http://olivernn.github.io/augment.js/ = add any missing prototype functions for old browsers to make them a usable.
- breeze = Cache queried, new, and changed data on the client for a responsive UI
- browserify http://browserify.org/ = reuse modules on the front end
- cheerio = jQuery for the server
- colorguard = http://npmawesome.com/posts/2014-07-09-colorguard/
- colors = D3 has 3 nice sets of 20 color pallets built in for visualizations. Color Blender = http://meyerweb.com/eric/tools/color-blend/ - gen’d based on a couple input params; Color combinations - ready made user submitted pallets = http://colorcombos.com/; Sample an image to get the “perfect” palette for it: http://www.degraeve.com/; Adobe latest trends in color design: http://www.kuler.com/?from=@
- docked = static site accelerator
- douglascrockford  /  JSON-js = original JSON object before baked into the javascript spec.
- els = embedded javascript templates used in express a lot.
- engine.io = backend of socket.io
- fattalble.js = infinite scroll that is dom friendly
- fileAPI = http://mailru.github.io/FileAPI/ = client side javascript chunking and streaming and file maniputlation
- head https://github.com/headjs/headjs = simple <head> include to be cross platform, cross browser compatible, @responsive, @resource @loader
- headroom.js = hide header undil needed
- hexbins = indiemaps.com/blog
- http-server = zero config command line http server used for test and static by people.
- humanize = A JS library for adding a “human touch” to data.
- ifvisible.js = if the page is 'visible' on the screen to a user
- jsdom = js implementation of DOM and HTML standards
- JSLitmus is a lightweight tool for creating ad-hoc JavaScript benchmark tests. Features include
- queue = https://github.com/mbostock/queue super light frontend queue
- requireJS is a JavaScript file and module lodaer
- responsive http://responsive-nav.com/ = simple, friendly framework for @responsive
- rich text editor =  tinymce =  http://www.tinymce.com/download/download.php
- socket.io-mongo = Mongodb store for socket.io
- spinners = single element css spinners to indicate progress - http://projects.lukehaas.me/css-loaders/

@logging
- bunyan = https://github.com/trentm/node-bunyan = seems actively maintained and widely used
- caterpillar = streams based logging with line, method, file fetching for messages, you can use it in web browsers and on node backend
- log.io = http://logio.org/ = seems like an excellent way of having real time logging access from distributed environment.  Done by the narrative science guys.
- papertrail = product easily integrated into heroku
- winston = picked by john.  seems ok - has plugins to allow circular log rotation, simple interface logger.log(level, text, context) or helpers like logger.warn(), logger.error(), etc. - went dormant for a while and came back to life
- runtime log scooping recommendations = https://www.joyent.com/blog/node-js-in-production-runtime-log-snooping

@machinelearning
- alike = kNN Machine Learning helper @machinelearning
- brain = neural network library, @machinelearning
- classifier = Naive Bayesian classifier based on reds backend @machinelearning
- decision-tree - ID3 algorithm (predictor)
- dn = deep neural network learning library - MLP, RBM, DBN, CRBM, CDBN
- fann = Fast Artificial Neural Network Library - neural network, connected and disconnected networks
- fussy = @prediction and @recommendation engine
- gremlins.js is a monkey testing library written in JavaScript, for Node.js and the browser
- jstat = jstat library = https://github.com/jstat/jstat = JavaScript Statistical Library
- kmeans-js = k-means for node.js + browser
- learnings = logistic regression c4.5 decision tree algorithm in JS
- linearreg = linear regression with descent (not popular, uses sylvester under the covers - likely thin shim over a matrix invert)
- machine_learning = Logistic Regression. MLP (Multi-Layer Perceptron). SVM (Support Vector Machine). KNN (K-nearest neighbors), K-means clustering. 3 Optimization Algorithms (Hill-Climbing, Simulated Annealing, Genetic Algorithm), Decision Tree,NMF (non-negative matrix factorization)
- mathjs = mathjs.org = extensive math library for JavaScript and Node.js
- matrices, vektors, ndarray, mjs,geom-mat, sylvester = matrix math libraries native JS.
- nlpjs = natural language processing helper
- node-matrixlib = https://github.com/rook2pawn/node-matrixlib = matrix support and routines for nodejs
- numbers = Advanced Mathematics Library for Node.js and JavaScript
- numeric = http://www.numericjs.com/ = numerical computations in pure javascript
- perceptron = perceptron learning algorithm
- prediction.io = http://prediction.io/ = opensource library
- psMathStats = PseudoSavant Math and Statistics Library
- random-forest-classifier = decision tree classifiers using random forrest meta estimator
- sentiment = https://github.com/thisandagain/sentiment = sentiment detection based on AFINN wordlist

@pasrser
- acorn.js = javascript parser = could be useful if we allow people to create their own javascript functions for filters in the ui
- joi = https://www.npmjs.org/package/joi = Object schema description language and validator for JavaScript objects
- jison = http://zaach.github.io/jison = context-free grammar as input and outputs a JavaScript file capable of parsing the language described by that grammar

@promise @promises
- bluebird = another promises library = newness
- when = another promises/A+ implementation
- q = promises library = lots of love for this

@reactive @funtional
- linq.js = Aggregate, All, Alternate, Any, Average, BufferWithCount, CascadeBreadthFirst, CascadeDepthFirst, Catch, Choice, Concat,Contains, Count, Cycle, DefaultIfEmpty, Distinct, Do, ElementAt, ElementAtOrDefault, Empty, Except, Finally, First, FirstOrDefault,Flatten, ForEach, Force, From, Generate, GetEnumerator, GroupBy, GroupJoin, IndexOf, Insert, Intersect, Join, Last, LastIndexOf,LastOrDefault, Let, Matches, Max, MaxBy, MemoizeAll, Min, MinBy, OfType, OrderBy, OrderByDescending, Pairwise, PartitionBy,Range, RangeDown, RangeTo, Repeat, RepeatWithFinalize, Return, Reverse, Scan, Select, SelectMany, SequenceEqual, Share, Shuffle,Single, SingleOrDefault, Skip, SkipWhile, Sum, Take, TakeExceptLast, TakeFromLast, TakeWhile, ThenBy, ThenByDescending, ToArray,ToDictionary, ToInfinity,ToJSON, ToLookup, ToNegativeInfinity, ToObject, ToString, Trace, Unfold, Union, Where, Write, WriteLine, Zip
- rxjs = @reactive

@stream
- rate-limit, throttled-stream - simple @stream rate limiting
- readable-stream - use instead of the native “stream” to pin to a particular implementation of stream.  readable-stream comes in two major versions, v1.0.x and v1.1.x. The former tracks the Streams2 implementation in Node 0.10, including bug-fixes and minor improvements as they are added. The latter tracks Streams3 as it develops in Node 0.11; we will likely see a v1.2.x branch for Node 0.12. readable-stream uses proper patch-level versioning so if you pin to  "~1.0.0"  you’ll get the latest Node 0.10 Streams2 implementation, including any fixes and minor non-breaking improvements. The patch-level versions of 1.0.x and 1.1.x should mirror the patch-level versions of Node-core releases. You should prefer the 1.0.x releases for now and when you’re ready to start using Streams3, pin to  "~1.1.0"
- highland - high level @stream

@test
- chai = expect, should, assert for mocha, there is an admin
- chai fuzzy = fuzzy matchers
- chai as promised = extension for chai allowing eventually for promises
- faker = great library for generating data of a given shape for quick creation of gobs of test data.
- html-inspector = https://github.com/philipwalton/html-inspector - html sanity checks
- mocha = support for async
- mocha-phantomjs = phatomjs runner
- mockjson = http://experiments.mennovanslooten.nl/2010/mockjson/ and https://www.npmjs.org/package/mockjson = mock json data on both client side and server side
- Nightwatch.js = frontend unit testing
- phantomjs = headless browser for test
- schmock = http://npmawesome.com/posts/2014-04-10-shmock/ = mock apis
- sinon = spy for useful unit testing
- stridercd = http://stridercd.com/ = continuous integration with strider

@utility
- agenda = cron / human readable way of invoking a job on a regular recurring schedule
- beam.js = Streams and pipes for analytic or computational events
- chalk / colors replacement that is better for console coloring of messages
- chance - http://chancejs.com/ useful @random generators
- cli-tables = console tables
- dtrace prover = https://github.com/chrisa/node-dtrace-provider and http://mcavage.me/presentations/dtrace_conf_2012-04-03/#intro
- express.io = express + socket.io
- eyes = customizable value inspector
- function-rate-limit = limit execution of any function
- historical = https://github.com/stennettm/historical = versioning for mongoose
- hooked = ability to put in before and after hooks in any 1 and 2 airily callback supporting javascript function @instrumentation
- iconv-life = convert character encodings in native js
- ipify = get your own public ip address
- kardia = counters, timers, process insight, process status API module to expose any operational/internal indicators of any Node.js process for status aggregation and monitoring. JSON format over HTTP protocol
- lodash, underscore.js, lazy.js = lodash is underscore++ and I prefer and lazy.js can be super fast in cases where you don't complete iterations on collections.  _.forIn / _.forOwn / _.defaults /_.throttle / _.debounce
- look = perfomance profiler for node.js applications based on nodetime. Look doesn't send any data outside your server.
- medialize/uri.js = good url manipulation/mutation library
- memoize = https://github.com/medikoo/memoize = cache function call results - also remember if using async, the async library has a nice async memoise
- monitor-dashboard = dashboards for node.js apps
- mongomq is a messaging queue built on top of Node.js and MongoDB's tailable cursors
- mongodb-uri-node = standard MongoDB connect string URI format manipulator and parser
- node-monitor = Node.js application monitoring  http://lorenwest.github.io/node-monitor
- mqtt-ws = mqtt websocket bridge
- n = https://www.npmjs.org/package/n = npm install -g n && n stable
- nave = Virtual Environments for Node
- node-findit = walk a directory tree to find a file in node.js
- node-function-rate-limit - Limit the execution rate of any function, builds up list in memory as queue
- node-lru-cache = exactly what it says - has limitations evaluate for yourself per usage
- node-mac = node utilities for mac
- node-multimeter = https://github.com/Unitech/node-multimeter = multiple console progress bar support
- node-nibbler = Base32/base64 encode/decode library for Node
- node-queue  = means of using inseam, mongo, couch, tingo, or reds as a queue for jobs - i.e.e insert data into queue, have function processing queue
- node-restify = http://mcavage.me/node-restify = fast forward exposing rest service
- node-seq = Chainable asynchronous flow control for node.js with sequential and parallel primitives and pipeline-style error handling
- node-verror = https://github.com/davepacheco/node-verror = support error + cause
- node-vstream = useful for pipeline exploration = https://www.joyent.com/blog/exploring-node-js-streams-with-node-vstream
- nodemailer = winner for smtp delivery of content
- pandoc = common transformer of doc formats - useful to produce html, epub, mobi, html from source comments
- performance-now = high resolution timer exposed with now()
- pkginfo = pull properties easily from package.json, used for config and meta data commonly
- platform = platform detection (node verions or browser detection)
- pretty-error = nicer console view of errors
- progress - console indicator of progress
- scraperjs = two flavor (simple, complex) scraper of html data from a web link
- sequelize = multi dialect (mysql included) ORM
- serial port = magic serial library
- simple-statistics - javascript est practice simple implementations of functions required for stats.
- skyline = correlations @real-time @anomaly detectionsystem
- statsd = daemon for node.js listening for stats for counting and timing
- step = run functions in serial easily (also accomplished through async waterfall)
- string.js = extends string with handy helpers (.left(), .right(), .endswith(), .truncate(), between, camels, capitalize, chomp left, chomp right, collapswhitespace. contains, decode htmlentities, dasherize, escapehtml, ensure left, ensure right, is alpha, is empty, is alphanumeric, slower, isupper, lines, is numeric, pad, repeat, slugify, strip tags, strip punctuation, point, to float, toboggan, tocsv, template, etc.
- stringify-object = Stringify an object/array like JSON.stringify just without all the double-quotes
- traverse = traverse/transform every node with recursive walk
- validator = https://github.com/chriso/validator.js = simple string validations and sanitizers=
- wobot = hip chat client in node
- ws = web socket library - very popular client and server, RFC 6455 compliant
- performance debugging = https://www.joyent.com/developers/node/debug

@visualization
- chart.js = simple html5 graphs = https://github.com/nnnick/Chart.js
- chartFactory = https://github.com/affini-tech/ChartFactory
- crossfilter = library for exploring large multivariate datasets in the browser
- cubism.js = time series visualization from square
- d3 = visualization library
- d3 on angular = http://www.ng-newsletter.com/posts/d3-on-angular.html and https://www.dashingd3js.com/d3-resources/d3-and-angular have some nice tips, techniques, ideas.
- dimple = object-oriented API for business analytics powered by d3
- famous = http://famo.us/ = hardware accelerated graphics for browsers framework.
- flamegraph = often used for performance runs = http://www.brendangregg.com/FlameGraphs/cpuflamegraphs.html and node-stackvis = can help with flamegraphs from javascript stacks
- fluid dynamics = https://nerget.com/fluidSim/
- lyric-node @graphing
- morris.js - fronted simple @chart @visualization @donut, @line, @area, @bar
- obelisk.js - isometric pixel objects
- phaser -  https://github.com/photonstorm/phaser - 2D gaming/visualization framework
- qr-image = qr codes made simple... var code = require('qr-image').image('http://blog.nodejitsu.com',{ type:'svg'}).pipe(output);
- radian JavaScript library that makes it easy to embed plots in HTML documents @frontend
- svgenie - save D3 graphs, and other SVG documents as a PNG without needing a server component
- three.js  - lightweight @3D @visualization library low level of complexity canvas, sag, css3D and WebGL renderers
- timeline = http://timeline.knightlab.com/# = nice functionality, pretty timelines.
- Tributary - http://tributary.io/ = rapid prototyping service
- two.js is a two-dimensional drawing api geared towards modern web browsers
- vega = visualization grammar for high level visualization description, basically JSON format to help generate actual views in HTML5 canvas or SVG with a interpreter




------------------------------------------------------------------------------------------------------------------------------------------------
-- @snippets
------------------------------------------------------------------------------------------------------------------------------------------------
#Rollback to a specific commit in the published repository.  If you want to commit on top of the current HEAD with the exact state at a different commit, undoing all the intermediate commits, then you can use `reset` to create the correct state of the index to make the commit.
    # Reset the index to the desired tree
    git reset 56e05fced
    # Move the branch pointer back to the previous HEAD
    git reset --soft HEAD@{1}
    git commit -m "Revert to 56e05fced"
    # Update working copy to reflect the new commit
    git reset --hard


#make npm global user writable rather than force a sudo all the time
sudo chown -R $USER /usr/local
