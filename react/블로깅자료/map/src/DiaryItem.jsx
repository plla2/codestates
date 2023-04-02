import React from 'react'

function DiaryItem({ author, content, createdAt, emotion, id }) {
  return (
    <div className='DiaryItem'>
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className='date'>
          시간 : {new Date(createdAt).toLocaleString()}
        </span>
        <div className="content">
          내용 : {content}
        </div>
      </div>
    </div>
  )
}

export default DiaryItem

