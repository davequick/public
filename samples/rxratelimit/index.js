
var source = function(low, high){
        return Math.random() * (high - low) + low;
};

source
    .filter(function (quote) {
        return quote.price > 30;
    })
    .map(function (quote) {
        return quote.price;
    })
    .forEach(function (price) {
        console.log('Prices higher than $30: $' + price);
    });