
 
  var arr = [1,2,3,4,5,6,7,8,9];

  Array.prototype.even = function(arr){
    return this.filter(e => e%2==0);
  }
  console.log(arr.even());

  Array.prototype.odd = function(arr){
    return this.filter(e => e%2!=0);
  }
  console.log(arr.odd());


