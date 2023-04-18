import React, { useRef, useState } from 'react'

const DiaryItem = ({ onEdit, onRemove, id, author, content, emotion, created_date }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id + 1}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  }

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  }

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();

      return;
    }
    if (window.confirm(`${id + 1}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  }
  return (
    <div className='DiaryItem'>
      <div className="info">
        <span>
          작 성 자 : {author}  |  날 씨 점 수 : {emotion}
        </span>
        <br />
        <span className="date">
          시 간 : {new Date(created_date).toLocaleString()}
        </span>
        <div className="content">
          {isEdit ? (
            <>
              <textarea ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)} />
            </>
          ) : (<>{content}</>)}
        </div>
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수 정 취 소</button>
            <button onClick={handleEdit}>수 정 완 료</button>
          </>
        ) : (
          <>
            <button onClick={toggleIsEdit}>수 정 하 기</button>
            <button onClick={handleRemove}>삭 제 하 기</button>
          </>
        )}
      </div>
    </div>
  )
}


export default DiaryItem