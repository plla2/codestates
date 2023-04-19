let range = {   // 1) 객체 생성
  from: 1,
  to: 5
};

range[Symbol.iterator] = function () {   // 2) 새로운 키:밸류를 추가한다. 키는 변수형태, 밸류는 함수

  return {   // 객체를 리턴한다. 근데 그냥 객체가 아닌 특별한 객체
    current: this.from,
    last: this.to,

    next() {   // 3) next() 정의
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      }
    }
  }
}