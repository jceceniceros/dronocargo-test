import classes from "./Select.module.css";

const Select = (props) => {
  return (
    <select className={classes.select} { ...props.selectAttrs }>
      {props.options.map((option) => (
        <option
          key={`option-${option.value}`}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
