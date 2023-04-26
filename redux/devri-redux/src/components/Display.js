import React from 'react'
import { connect } from 'react-redux'

function Display({ count }) {
  return (
    <div>
      <p>구독자 수 : {count}</p>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Display)