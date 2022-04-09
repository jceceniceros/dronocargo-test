import classes from "./Input.module.css";

const Input = (props) => {
  const { icon } = props;

  const inputClasses = [classes.input];
  if (icon) {
    inputClasses.push(classes.withIcon)
  }

  const input = <input className={inputClasses.join(' ')} {...props.inputAttrs} />

  return (icon) ? (
    <div className={classes.wrapper}>
      <span className={classes.icon}>{icon}</span>
      {input}
    </div>
  ) : (
    {input}
  )
}

export default Input;
