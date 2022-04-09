import classes from "./Label.module.css";

const Label = (props) => {
  return (
    <label className={classes.label} htmlFor={props.htmlFor}>{props.children}</label>
  )
}

export default Label;
