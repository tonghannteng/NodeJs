// exercise 1
var fs = require('fs');
var file = fs.readFileSync(__dirname+'/CS572.txt', 'UTF8');
console.log(file);
var statsync = fs.statSync('CS572.txt');
var fileSizeInByte = statsync["size"];
console.log(fileSizeInByte);

// exercise 2
var chunkFile = fs.readFile(__dirname+'/CS572.txt', 'UTF8', function(err, data){
    var buffer = new Buffer(data);
    var targetBuffer = new Buffer(4);
    var sourceStart = 10;
    var sourceEnd = 14;
    var targetStart = 0;
    buffer.copy(targetBuffer, sourceStart, sourceEnd, targetStart);
    console.log(targetBuffer.toString());
});

// exercise 3
var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz11";
fs.writeFileSync(__dirname+'/CS572.txt',text, 'UTF8', function(error){
    if(error) throw error;
    console.log("DONE WRITE FILE");
});

// exericse 4
var appText = "abc";
fs.appendFileSync(__dirname+'/CS572.txt', appText, 'UTF8', function(error){
    if(error) throw error;
    console.log("DONE APPEND FILE");
});

// exercise 5
fs.readFile(__dirname + '/CS572.txt', 'UTF8', function(error, data){
    if(error) throw error;
    var buffer = new Buffer(data);
    console.log(buffer.toString());
    buffer.write('7', 10);
    console.log(buffer.toString());
    fs.writeFile(__dirname + '/CS572.txt', buffer.toString(), 'UTF8', function(error){
        if(error) throw error;
        console.log("REPLACE DONE");
    });
});


