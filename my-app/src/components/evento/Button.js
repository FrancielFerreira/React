function Button(props) {
  return <button onClick={props.event}>{props.text}</button>
}

// const Button = (props) => <button onClick={props.event}>{props.text}</button>

export default Button