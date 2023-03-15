// 클로저 모듈 패턴
// let counter1={
//   value:0,
//   increase: function(){
//     this. value++   // 메서드를 호출할 때, this는 counter1 을 가리킴
//   },
//   decrease: function(){
//     this.value--
//   },
//   getValue: function(){
//     return this.value
//   }
// }

// counter1.increase()
// counter1.increase()
// counter1.increase()
// counter1.decrease()
// console.log(counter1.getValue())

// function makeCounter(){
//   let value=0;
//   return {
//     increase: function(){
//       value++ 
//     },
//     decrease: function(){
//       value--
//     },
//     getValue: function(){
//       return value
//     }
//   }
// }
// let counter1 = makeCounter()
// counter1.increase()
// console.log(counter1.getValue()) //

// let counter2 = makeCounter()
// counter2.increase()
// counter2.increase()
// counter2.decrease()
// console.log(counter2.getValue())


// 클래스와 인스턴스
class Car {
  constructor(brand, name, color) {
    // 인스턴스가 만들어질 때 실행되는 코드
  }
}

let avante = new Car('hyundai', 'avante', 'black');
let mini = new Car('bmw', 'mini', 'white');
let beetles = new Car('volkswagen', 'beetles', 'red');

// 클래스인 설계도를 가지고, 인스턴스를 만들어보면,
class Car {
  constructor(brand, name, color) {
    this.brand = brand;
    this.name = name;
    this.color = color;
  }
}

Car.prototype.drive = function () {
  console.log(this.name + '가 운전을 시작합니다');
}

// let avante = new Car('hyundai', 'avante', 'black');
avante.color;  // 'black'
avante.drive();  // 'avante가 운전을 시작합니다'

function Car(brand, name, color) {
  // 인스턴스가 만들어질 때 실행되는 코드
}