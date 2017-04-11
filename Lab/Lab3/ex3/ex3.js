// exercise 1

var buffer = new Buffer(100);
var str = '';
for(let i = 0; i < 100; i++){
    str+=i+"";
}
buffer.fill(str);
console.log(buffer.toString());

// exercise 2
var slice = buffer.slice(40, 60);
console.log(slice.toString());

// exercise 3
var targetBuffer = new Buffer(20);
var targetStart = 0;
var sourceStart = 40;
var sourceEnd = 60;
buffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd);
console.log(targetBuffer.toString());