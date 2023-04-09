import React from 'react'

function DiaryItem({ id, author, content, emotion, created_date }) {

  return (
    <div className='DiaryItem'>
      <div className="info">
        <span>
          작 성 자 : {author}  |  감 정 점 수 : {emotion}
        </span>
        <br />
        <span className="date">
          시 간 : {new Date(created_date).toLocaleString()}
        </span>
        <div className="content">
          내 용 : {content}
        </div>
      </div>
    </div>
  )
}

export default DiaryItem