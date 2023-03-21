let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy "

function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let newStr = str.replace(/\b[a-z]/g, char => char.toUpperCase());
  return (newStr);
}
