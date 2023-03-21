import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  let posts = 'plla2의 개발일지'
  function func() {
    return 'plla2';
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h4>{posts}</h4>
        <p>3월 22일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
