import Breadcrumbs from "src/components/Breadcrumbs";
import Button from "src/components/Button";

import classes from './Toolbar.module.css';

const Toolbar = (props) => {
  return (
    <div className={classes.toolbar}>
      <Breadcrumbs>
        <p>Delivery</p>
        <p>History</p>
      </Breadcrumbs>

      <div className={classes.tools}>
        <Button onClick={props.onClickNewDeliveryButton}>New delivery</Button>
      </div>
    </div>
  );
}

export default Toolbar;
