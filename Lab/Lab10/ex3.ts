class baseObject {
    constructor(public width:number = 0,
    public length: number = 0){}
}

class Rectangle extends baseObject{
    constructor(width: number, length: number){
        super(width, length);
    }
    calcSize(){
    return this.width*this.length;
    }
}
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());