import classes from './Element.module.css';

import Cell from './Cell';

const DeliveryListElement = (props) => {
  const { delivery } = props;

  return (
    <div className={classes.element}>
      <Cell header="Status" value={delivery.status} />
      <Cell header="Order ID" value={delivery.order_id} />
      <Cell header="Technician" value={delivery.technician} />
      <Cell header="Platform" value={delivery.platform} />
      <Cell header="Drone" value={delivery.drone} />
      <Cell header="Technician check" value={delivery.technician_check} />
    </div>
  )
}

export default DeliveryListElement;
