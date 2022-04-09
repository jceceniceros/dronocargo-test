import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';

import Button from 'src/components/Button';
import Dropdown from 'src/components/Dropdown';

import Cell from './Cell';

import classes from './Element.module.css';

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


      <Link to={`/shipment/${delivery.order_id}`} className={classes.link}>
        <Button variant="white">
          Details
          <span><LaunchIcon fontSize="inherit" color="inherit" /></span>
        </Button>
      </Link>

      <Dropdown
        buttonLabel="Actions"
        buttonId={`delivery-${delivery.order_id}-actions`}
        menuId={`delivery-${delivery.order_id}-menu`}
        menuActions={[
          {
            label: 'Edit',
            onClick: (e) => console.log('Edit')
          },
          {
            label: 'Delete',
            onClick: (e) => console.log('Delete')
          },
        ]}
      />
    </div>
  )
}

export default DeliveryListElement;
