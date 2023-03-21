// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("|"); // join()은 ()안에 "구분자"를 사용하면 요소별로 구분자가 생긴다.
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits2 = "🍎,🥝,🍌,🍒";
  const result2 = fruits2.split(",", 2); // split()은 split(a,b)를 입력하는데 a에는 구분자, b에는 제한개수를 입력한다.
  console.log(result2); // a(구분자)는 입력 필수지만, b(제한개수)는 필수가 아니다.
}

// Q3. make this array look like this: [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result3 = array.reverse(); // array.reverse() 함수는 배열자체를 거꾸로 만들어준다.
  console.log(result3);
  console.log(array); // 배열자체를 거꾸로 만들기때문에 리턴값도 거꾸로된 배열을 출력한다.
}

// Q4. make new array without the first two elements
{
  const array2 = [1, 2, 3, 4, 5];
  const result4 = array2.slice(2, 5); // slice()는 slice(a,b)로 정의되는데 a에는 시작점, b에는 끝점을 입력하는데
  console.log(result4); // 입력한 끝점은 제외되기 떄문에 b에 5를 입력해야 4번째 인덱스까지 남는다.
  console.log(array2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // const result5 = students.find(function (student, index) {
  //   return student.score === 90;
  // });
  // 위를 arrow function으로 하면
  const result5 = students.find((student) => student.score === 90); // find()함수를 이용하여 배열에서 어떤 값에 맞는 요소를 찾는다
  console.log(result5);
}

// Q6. make an array of enrolled students
{
  const result6 = students.filter((student) => student.enrolled); // filter()를 이용하여 조건에 맞는 요소들을 모아 새로운 배열로 반환
  console.log(result6);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result7 = students.map((student) => student.score); // map()은 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열로 반환.
  console.log(result7);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result8 = students.some((student) => student.score < 50);
  console.log(result8); //some()은 한가지라도 만족되는게 있으면 true, 없으면 false

  const result9 = students.every((student) => student.score < 50);
  console.log(result9); //every()는 모두가 만족되어야 true, 한가지라도 없으면 false
}

// Q9. compute students' average score
{
  const result10 = students.reduce((prev, curr) => prev + curr.score, 0); // 0은 초깃값이다. 처음시작할때의 기본값이다.
  console.log(result10 / students.length); // reduce()함수는 배열의 각 요소에 대해 함수를 실행하고, 누적된 값을 출력.
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result11 = students
    .map((student) => student.score)
    .filter((score) => score >= 50) // filter()을 사용하여 50점 이상인 사람만 출력
    .join(); // join()을 사용하여 배열을 문자열로 만듬
  console.log(result11);
}

// Q11. do Q10 sorted in ascending order result should be: '45,66,80,88,90'
{
  const result12 = students
    .map((student) => student.score)
    .sort((a, b) => b - a) // sort()를 이용하여 a-b이면 오름차순, b-a이면 내림차순으로 정렬됨.
    .join();
  console.log(result12);
}
