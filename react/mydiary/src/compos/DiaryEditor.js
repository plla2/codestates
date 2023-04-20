import React, { useEffect, useRef, useState } from 'react'

function DiaryEditor({ onCreate }) {
  useEffect(() => {
    console.log("render!")
  })

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
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    } else if (state.content.length < 1) {
      contentTextarea.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공!")
    setState({
      author: "",
      content: "",
      emotion: 1,
    })
  }
  return (
    <>
      <div className='DiaryEditor'>
        <h2>오늘의 일기</h2>
        <div>
          <input
            ref={authorInput}
            value={state.author}
            name='author'
            onChange={handleChangeState} />
        </div>

        <div>
          <textarea
            ref={contentTextarea}
            value={state.content}
            name='content'
            onChange={handleChangeState} />
        </div>

        <div>
          <select name="emotion" value={state.emotion} onChange={handleChangeState}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div>
          <button onClick={handleSubmit} >저장하기</button>
        </div>
      </div>
    </>
  )
}

export default React.memo(DiaryEditor);