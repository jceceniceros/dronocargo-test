import classes from "./Control.module.css";

const FormControl = (props) => {
  return (
    <div className={classes.formControl}>{props.children}</div>
  );
}

export default FormControl;
