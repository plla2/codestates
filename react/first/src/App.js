import './App.css';
import { useState } from 'react';
import Button from './component/button';
import Text from './component/text';

function App() {

  const [innerText, setInnerText] = useState("초기상태")

  return (
    <div className="App">
      <h1>버튼을 누르면 텍스트가 변하는 홈페이지</h1>
      <Button setInnerText={setInnerText} />
      <Text innerText={innerText} />
    </div>

  );


}

export default App;



