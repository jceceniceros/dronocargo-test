import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input className={classes.input} { ...props.inputAttr } />
  )
}

export default Input;
