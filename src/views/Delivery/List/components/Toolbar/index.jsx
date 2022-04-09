import Breadcrumbs from "src/components/Breadcrumbs";
import Button from "src/components/Button";
import FormInput from "src/components/Form/Input";

import classes from './Toolbar.module.css';

const Toolbar = (props) => {
  return (
    <div className={classes.toolbar}>
      <Breadcrumbs>
        <p>Delivery</p>
        <p>History</p>
      </Breadcrumbs>

      <div className={classes.tools}>
        <FormInput
          inputAttrs={{
            type: 'text',
            placeholder: 'Search'
          }}
        />
        <Button variant="green" onClick={props.onClickNewDeliveryButton}>New delivery</Button>
      </div>
    </div>
  );
}

export default Toolbar;
