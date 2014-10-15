var Q = require('q');


// Equivalent of  https://github.com/renasar/renasar-pxe/blob/80bfa6ce9b84c31ee3059d74bec3eb7efa74890b/lib/pollers/base.js#L127-L142
var resolvedPromise = Q.resolve("resolved");
var rejectedPromise = Q.reject("rejected");

var delayedResolvedPromise = function() {
    var deferred = Q.defer();
    setTimeout(function () {deferred.resolve("deferred")}, 5000);
    return deferred.promise;
}

function process(name, p) {
    return p.
        then(function (value) {
                 console.log("1:" + name + ":" + value);
                 return Q(1);
             })
        .fail(function (err) {
                  console.log("2:" + name + ":" +  err);
                  return Q(2);
              })
        .fin(function () {
                 console.log("3:" + name  )
             });
}

// now you are retured a promise chain which you can put additional   you will now have the opportunity to wain on things as you wish.

var processDeferred = process("processDeferred",delayedResolvedPromise());
console.log("processDeferred:"+processDeferred)

var processResolved = process("processResolved", resolvedPromise);
console.log("processResolved:"+processResolved)

var processRejected = process("processRejected",rejectedPromise);
console.log("processRejected:"+processRejected)

processDeferred
    .then(function(value) {
              console.log("processDeferred: I can now wait on and do other things here, I could not do that in the old one: "+ value);
          })
    .done();
