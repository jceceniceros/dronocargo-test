import { useContext, useState } from "react";

import DeliveryList from "src/components/DeliveriesList";
import DeliveryContext from "src/providers/deliveries";

import Form from "./components/Form";
import Toolbar from "./components/Toolbar"

const DeliveryListView = () => {
  const [ showForm, setShowForm ] = useState(false)
  const deliveriesCtx = useContext(DeliveryContext);

  const handleButtonClick = (event) => {
    setShowForm(true);
  }

  const handleCloseForm = (event) => {
    setShowForm(false);
  }

  return (
    <>
      {showForm && (
        <Form
          onFormSubmit={deliveriesCtx.addNewDelivery}
          onCloseForm={handleCloseForm}
        />
      )}

      <section>
        <Toolbar onClickNewDeliveryButton={handleButtonClick} />

        <DeliveryList deliveries={deliveriesCtx.deliveries} />
      </section>
    </>
  );
}

export default DeliveryListView;
