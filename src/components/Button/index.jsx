import classes from "./Button.module.css";

const Button = (props) => {
  const btnClasses = [classes.button, classes[props.variant]];

  return (
    <button
      className={btnClasses.join(' ')}
      onClick={props.onClick}
      { ...props.btnAttrs }
    >
      {props.children}
    </button>
  )
}

export default Button;
