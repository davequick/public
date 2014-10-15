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
    p.
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


// every one of these is going to be 'undefined'.  the returns above in the .then and .fail mean nothing - they are only valid for the other things
// in that promise chain.  the actual returned values below are going to be undefined.

var processDeferred = process("processDeferred",delayedResolvedPromise());
console.log("processDeferred:"+processDeferred)


var processResolved = process("processResolved", resolvedPromise);
console.log("processResolved:"+processResolved)

var processRejected = process("processRejected",rejectedPromise);
console.log("processRejected:"+processRejected)

// if you were to uncomment this would fail.
//processDeferred
//    .then(function(value) {
//              console.log("processDeferred: this will never be reached and this will fail immediately - the function above returns undefined: "+ value);
//          })
//    .done();

