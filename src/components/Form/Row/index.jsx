import classes from './Row.module.css';

const Row = (props) => <div className={classes.row}>{props.children}</div>

export default Row;
