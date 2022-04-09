import classes from "./Breadcrumbs.module.css"

const Breadcrumbs = (props) => {
  return (
    <div className={classes.breadcrumbs}>{props.children}</div>
  );
}

export default Breadcrumbs;
