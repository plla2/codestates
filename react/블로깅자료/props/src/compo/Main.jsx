import React from "react"

function Main(props, { isStudent }) {
  const message = isStudent ? "학생" : "학생아님";
  return (
    <>
      <main>
        <h1 style={{ color: props.color }}>Hi!! My name is {props.name}, {props.age}years old</h1>
        <h3>({message})</h3>
      </main>
    </>
  )
}

Main.defaultProps = {
  name: '디폴트'
}
export default Main

