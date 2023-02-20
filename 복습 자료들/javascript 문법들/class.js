"use strict";
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheitance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello !`);
  }
}

const SH = new Person("SH", 24);
console.log(SH.name);
console.log(SH.age);
SH.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //  get, set 안의 this.뒤에는 변수를 선언할때와 다른 이름을 사용해준다. ex) _age
  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw Error("age can not be negative");
    }
    this._age = value;
  }
}

const User1 = new User("steve", "Jobs", 10);
console.log(User1.age);

// 3. Fields (public, private)
// Too soon! 만들어진지 얼마안됨
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon! 만들어진지 얼마안됨
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color !`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} //extends를 활용하여 Shape클래스 안에 집어넣을 수 있음.
class Triangle extends Shape {
  //extends를 활용하면 override가
  draw() {
    super.draw(); //super.는 extends 전인 부모클래스의 함수까지 처리해준다.
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// instanceOf를 기준으로 왼쪽의 object가 오른쪽의 class를 이용해서 만들어진 것인지 아닌지 판별
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
