#@bestpractice @books and ebooks and extended guides
* npm best practices and coding style = https://docs.npmjs.com/
* docs = both http://apidocjs.com and http://swagger.io/ are decent for rest apis, http://usejsdoc.org/ good for inline 
* node - node in production = http://qzaidi.github.io/2013/05/14/node-in-production/
* 12 factor app methodology =  http://12factor.net/
* angular app structure recommendations = https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1
* angular 8 tips for beginners: http://leftshift.io/8-tips-for-angular-js-beginners/
* angular book - https://www.ng-book.com/ = great text
* angular for newbies tips: http://leftshift.io/8-tips-for-angular-js-beginners/ @angular
* angular service vs provider vs factory when and why = http://stackoverflow.com/questions/15666048/service-vs-provider-vs-factory
* angular style guide - https://github.com/johnpapa/angularjs-styleguide - component per file, Invoked Function syntax, coding style, file / directory organization, singleton vs. service simple explanations, etc.;
* async = outstanding async library - sync, async, waterfall, pipeline, N simultaneous while rest queued, etc.
* AWS Tips I Wish I'd Known Before I Started =  https://wblinks.com/notes/aws-tips-i-wish-id-known-before-i-started/ = Store no pop state on your server, store extra info in your logs (instance id, region, availability zone, environment, make use of http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html , use sdks of your language, disable ssh access to all servers because if you have to access via ssh your automation has failed, servers are ephemeral you don’t care about them only the service, don’t give servers elastic tips just load balancers, automate 4everything, everyone uses IAM no one uses master account, get alerts to become notifications, set up granular billing alerts, use ec2 roles do not permission applications an IAM account, assign permissions to group and not users, set up automated secutrity auditing, cloud trail to keep audit log, s3 use “-“ rather than “.” for bucket names or it won’t work with ssl, avoid file system mounts use sdks instead, use s3/cloudfront, use random strings at the start of your keys for s3 to spread objects further, ec2 / vlc = use tags, use termination protection, always use a vlc, use reserved instances for all you can, lock down security groups = NO 0.0.0.0/0, don’t keep unassociated elastic tips, terminate ssl on load balancer, pre warm ebbs if expecting large traffic influx, elastic ache use config endpoints rather than individual endpoints; set up RDS event subscription for failover; cloud watch use cli tools, use free metrics, use custom metrics, use detailed monitoring; scale down on insufficient data as well as alaerm, el health check instead of ec2 health check,only use AZs your ELB is confined for, don’t use multiple scaling triggers on same group. IAM use roles, users can have multiple api kets, Liam should use MFA.  R53 use allies records for amazon resources.  EMR specify dir on s3 for hive results… not root of bucket otherwise annoying nullpointerexception. be redundant across AZs, be aware of service limits before deploying (http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html), decide on key management strategy and naming convention early.
* callback convention = http://blog.risingstack.com/node-js-best-practices/ = callback convention (err, result), always check err, return on callkbacks, try to avoid this and new keep functional, small modules (i.e. no deathstars), use async, operational vs programmer errors, operational errors try to solve, retry, tell client, crash if unlikely to change, programmer errors crash immediately, LOG EVERYTHING, specify start and test script in packages, set NODE_ENV to production or staging or dev, use nconf, use a style guide,
* coding style - frontend - https://github.com/isobar-idev/code-standards/ = nice fronted coding style/standards summary from isobar
* coding style - google javascript style guide = http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
* coding style - node requires - http://www.mircozeiss.com/node-js-require-s-best-practices/ = formatting of requires at top of doc for better readability
* code coverage overview node = http://www.gregjopa.com/2014/02/testing-and-code-coverage-with-node-js-apps/
* CSS best practices = https://github.com/stevekwan/best-practices/blob/master/css/best-practices.md
* create and publish a npm module = http://quickleft.com/blog/creating-and-publishing-a-node-js-module
* di = newbie thoughts on di in node http://liamkaufman.com/blog/2013/08/06/how-angularjs-made-me-a-better-nodejs-developer/
* di = a survey of (some) node di libraries = http://www.mariocasciaro.me/dependency-injection-in-node-js-and-other-architectural-patterns
* error handling = https://www.joyent.com/developers/node/design/errors
* git - http://kentnguyen.com/development/visualized-git-practices-for-team/ = simplified guide on git for teams - recommends command line, branch, rebase, merge often, keep in sync - nice visuals and ensures you better understand the github graphs for understanding branch patterns
* git - walkthrough of alice git best practices = http://aliceinfo.cern.ch/Offline/node/2972
* heroku recommendations = https://devcenter.heroku.com/articles/node-bespodcaastt-practices = use environment variables,Start new projects with npm init, Declare all dependencies, Specify a start script, Specify a test script, Keep dependencies out of source control, Use environment variables to configure npm, Bring your own npm registry, Keep track of outdated dependencies,  npm scripts to run custom build steps, Browserify, try harmony
* javascript advanced javascript = http://ejohn.org/apps/learn/ = intro to some of the concepts of binding and such - not super advanced but an accelerator for those unfamiliar
* javascript bind = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind = live it learn it, love it
* JavaScript Best Practices =  http://www.codeproject.com/Articles/580165/JavaScript-Best-Practices = use === / !==, use semicolons, use jslint/jshint use a namespace, avoid eval, use decimals cautiously (i.e. .1 + .2 is not .3), start blocks on same line, use explicit blocks, declare all variables first not use with, careful of typeofparseInt with care, do not use switch fall through, avoit for in loops (for(var i in arr) can pick up enumeration visible members), var to declare variables,
* Javascript Best Practices mongomqArchitecture = http://addyosmani.com/largescalejavascript/
* Javascript Constructors = http://tobyho.com/2010/11/22/javascript-constructors-and/ and WITHOUT constructors = http://tobyho.com/2012/10/21/javascript-OO-without-constructors/
* Javascript Eloquent Javascript = http://eloquentjavascript.net/
* JavaScript Jabber - another high quality weekly podcast = http://javascriptjabber.com/
* Javascript N dimensional array performacne and thoughts = https://github.com/mikolalysenko/ndarray-experiments
* Javascript Pragmatic best practices = https://github.com/stevekwan/best-practices/blob/master/javascript/best-practices.md
* Javascript common "gotchas" = https://github.com/stevekwan/best-practices/blob/master/javascript/gotchas.md
* Javascript - improve your javascript = http://www.onextrapixel.com/2013/02/21/improve-your-code-with-smart-javascript-techniques-and-patterns/
* Joyent (makers of node.js) best practices = https://www.joyent.com/developers/node
* machine learning in node = https://speakerdeck.com/florianeckerstorfer/machine-learning-with-node-dot-js-and-predictionio-1
* memory leaks = http://michaelheap.com/debugging-nodejs-memory-leaks/
* migrations and future proofing @bestpractice = prismatic writeup =  https://github.com/Prismatic/eng-practices/blob/master/swe/Migrations_and_future_proofing.md
* Mixu's node book -  http://book.mixu.net/
* mapreduce and data mining = http://horicky.blogspot.com/ = great blog - smart guy
* mapreduce patterns = http://highlyscalable.wordpress.com/2012/02/01/mapreduce-patterns/
* memory analysis = https://developer.chrome.com/devtools/docs/memory-analysis-101
* mongodb - storing libraries in the db for js  = http://stackoverflow.com/questions/8418651/techniques-for-storing-libraries-in-mongodbs-system-js
* mongodb - trees = http://docs.mongodb.org/manual/tutorial/model-tree-structures-with-child-references/
* mongoose common mistakes = http://blog.mongodb.org/post/52299826008/the-mean-stack-mistakes-youre-probably-making-with
* nodejs manual in pdf, mobi and epub format at any time: https://github.com/zemirco/nodejs-pdf-docs
* nodeup.com = http://nodeup.com/ a node podcast = weekly and still relevant
* nodeschool.io = node online interactive lessons.
* node - debug = http://stackoverflow.com/questions/1911015/how-to-debug-node-js-applications
* node dtrace = http://mcavage.me/presentations/dtrace_conf_2012-04-03/#intro
* node - the art of node = https://github.com/maxogden/art-of-node#the-art-of-node
* node - mastering node = http://visionmedia.github.io/masteringnode/book.html - async require?  http require?  module compilers?  I kid you not, cool stuff.
* node - code coverage = http://www.gregjopa.com/2014/02/testing-and-code-coverage-with-node-js-apps/
* node - require and singletons and npm having multiple copies of a file = http://justjs.com/posts/singletons-in-node-js-modules-cannot-be-trusted-or-why-you-can-t-just-do-var-foo-require-baz-init
* npm search - uses gtihub forks/favorites and npm downloads: http://eirikb.github.io/nipster/ - look for well used and forked/favorited in addition to download counts @npm
* Promises vs. callbacks = Why I am switching to promises = http://spion.github.io/posts/why-i-am-switching-to-promises.html = perf and memory footprint of promises (bluebird and q and callbacks compared)
* python = http://learnpythonthehardway.org/book/
* Quara thread - decent advice =  http://www.quora.com/Node-js/What-are-the-best-practices-for-node-js = loggy, priority job queue (kue), LearnBoost, Async, seperate config settings into file and have prod/dev/etc seperate, airebrakeapp to log exceptions, nodemon for restart, nowjs/dnode for real time, when serving statics append parameter hash of contenct so easy to cache and easy to update, forever, underscore, datejs (human formatted dates), try/catch, callbacks(err, result), config file for each env, socketio, redis, handlebars, middlemanapp for site assembly
* reactive = http://www.reactivemanifesto.org/
* streams in node = http://nodestreams.com/ super fast way to build basic understanding of stream capability with real code
* stream handbook = https://github.com/substack/stream-handbook @stream @howto
* stream2 background release http://blog.nodejs.org/2012/12/20/streams2/
* through2 = wrapper around Node streams2 Transform to avoid explicit subclassing noise
* time decay = http://www.evanmiller.org/how-not-to-sort-by-average-rating.html
* writing testable code = http://misko.hevery.com/attachments/Guide-Writing%20Testable%20Code.pdf - a great synopsis of how to write better code for testability.  Nice find from Ben. @test

@techniques
* @heatmap  @visualization = http://sebastianraschka.com/Articles/heatmaps_in_r.html
* @profile = http://blog.nodejs.org/2012/04/25/profiling-node-js/ and http://www.clock.co.uk/blog/easy-cpu-profiling-in-node-js

@inspiration
* windflow = https://github.com/cambecc/earth
* @visualization variety for inspiration - http://www.datavizcatalogue.com/ = great place to go when considering the different ways you might be able to display a specific type of information.
