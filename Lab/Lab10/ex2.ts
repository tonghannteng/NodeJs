class Car{
    constructor(public name: string, public acceleration: number = 0){}
        honk(){
            console.log(`${this.name} is saying: Toooooooot!`);
        }
        accelerate(speed: number){
            this.acceleration += speed;
        }

}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);