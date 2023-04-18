import React from 'react'
import DiaryItem from './compos/DiaryItem'

function DiaryList({ diaryList, onRemove, onEdit }) {
  return (
    <div className='DiaryList'>
      <h2>일기 리스트</h2>
      <h4>현재 {diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((el) => (
          <DiaryItem key={el.id} {...el} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  )
}
DiaryList.defaultProps = {
  diaryList: []
}

export default DiaryList