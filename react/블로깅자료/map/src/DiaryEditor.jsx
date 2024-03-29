import React, { useRef, useState } from 'react'

function DiaryEditor({ onCreate }) {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  })

  const authorInput = useRef();
  const contentTextarea = useRef();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentTextarea.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공!!")
    setState({
      author: "",
      content: "",
      emotion: 1,
    })
  }
  return (
    <div className='DiaryEditor'>
      <h2>일기장</h2>
      <div>
        <input
          ref={authorInput}
          name='author'
          value={state.author}
          onChange={handleChangeState}
        />
      </div>

      <div>
        <textarea
          ref={contentTextarea}
          name='content'
          value={state.content}
          onChange={handleChangeState}
        />
      </div>

      <div>
        <select
          name='emotion'
          value={state.emotion}
          onChange={handleChangeState}>

          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  )
}

export default DiaryEditor