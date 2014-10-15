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
                 return Q(1); //remember, this is only valid in the promise chain, the actual 
                 //function called process will be over before this is ever called so this is 
                 //NOT going to be something process returns.
             })
        .fail(function (err) {
                  console.log("2:" + name + ":" +  err);
                  return Q(2); //remember, this is only valid in the promise chain, the actual 
                  //function called process will be over before this is ever called so this is 
                  //NOT going to be something process returns.
              })
        .fin(function () {
                 console.log("3:" + name  ) //remember, this is only valid in the promise chain, 
                 //the actual function called process will not care about this in the least, the 
                 //scope/lifetime of this is the lifetime of the function chain and will be 
                 //executed when it gets to the fin() functions place on the Q stack associated 
                 //with this promise chin (remember multiple finalizerscan exxist and will be 
                 //called in original registration order)
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

