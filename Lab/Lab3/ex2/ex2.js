// 1
var EventEmitter = require("events");
var util = require("util");
function Ticker() {
    EventEmitter.call(this);

}
util.inherits(Ticker, EventEmitter);
Ticker.prototype.tick = function(tick) {
    self = this;
    setInterval(function(){
        self.emit('tick');
    } , 1000);
}

// 2
var ticker1 = new Ticker();
ticker1.on('tick', function(){   
	console.log("TICK");
});
ticker1.tick();