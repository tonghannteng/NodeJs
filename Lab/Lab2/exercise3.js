function slow(callback){
    setTimeout(function(){
        if(Math.random() > 0.5){
            return callback("Error", null)
        }
        callback(null, {id:12346})
    }, 500);
}

function exec(fn){
    fn((err,data)=>err == null ? done(data) : fail(err));
    function done(data){};
    function fail(data){};
    return{
        done:function(func){done=func;return this;},
        fail:function(func){fail=func;return this;}
    }

}
exec(slow).done(function(data){console.log(data);})
.fail(function(err){console.log("Error: " + err); });