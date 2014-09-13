var di = require('di');



function foo(){
    return "foo";
}
di.annotate(foo, new di.Provide('foo'));
function bar(foo){
    return "bar, foo = "+ foo;
}
di.annotate(bar, new di.Provide('bar'));
di.annotate(bar, new di.Inject('foo'));
function bazSetup(foo, bar){
    return function baz() {
        console.log('in baz, foo = ', foo, 'bar = ', bar);
    }
}
di.annotate(bazSetup, new di.Inject('foo', 'bar'));
var injector = new di.Injector([foo,bar, bazSetup]);
var bazInstance = injector.get(bazSetup);
bazInstance()



function newfoo(){
    return "newfoo";
};
di.annotate(newfoo, new di.Provide('foo'));

var child = injector.createChild([newfoo,bazSetup]); // note bar not changed
var newbazInstance = child.get(bazSetup);
newbazInstance()

console.log('foo = ', injector.get('foo'), ', child foo = ', child.get('foo'));

var oldWithOverride = injector.get(bazSetup, [newfoo,bar]);
oldWithOverride()

debugger
