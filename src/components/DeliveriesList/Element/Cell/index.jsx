import classes from './Cell.module.css';

const Cell = (props) => {
  return (
    <div className={classes.cell}>
      <p className={classes.cellHeader}>{props.header}</p>
      <p className={classes.cellValue}>{props.value}</p>
    </div>
  )
}

export default Cell;
