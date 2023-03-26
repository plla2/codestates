
function Button(props) {
  return (
    <button onClick={() => {
      props.setInnerText("hello react!")
    }}>버튼</button>)
}
export default Button;