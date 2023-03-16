// class YalcoChicken {
//   constructor(name, no) {
//     this.name = name;
//     this.no = no;
//   }
//   introduce() {
//     return `안녕하세요 ${this.no}호 ${this.name}점입니다!`;
//   }
// }

// const chain1 = new YalcoChicken('판교', 3);
// const chain2 = new YalcoChicken('강남', 15);
// const chain3 = new YalcoChicken('제주', 24);

// console.log(chain1, chain1.introduce())
// console.log(chain2, chain2.introduce())
// console.log(chain3, chain3.introduce())

class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor(name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다.`;
  }
  order(name) {
    return `${this.menu[name]}원 입니다.`
  }
}

const chain0 = new YalcoChicken('(미정)');
console.log(chain0, chain0.introduce());
const chain1 = new YalcoChicken("판교", 3);
chain1.menu.양념치킨 = 13000;
console.log(chain1.order('양념치킨'))