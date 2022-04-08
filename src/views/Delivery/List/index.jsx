import { useContext } from "react";

import DeliveryList from "src/components/DeliveriesList";
import DeliveryContext from "src/providers/deliveries";

import FORM_OPTIONS from "src/data/FormOptions";

const DeliveryListView = () => {
  const deliveriesCtx = useContext(DeliveryContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    deliveriesCtx.addNewDelivery(formValues);
  }

  return (
    <section>
      <h1>Orders History</h1>

      <div>
        <h1>New delivery</h1>
        <p>Please select the order ID and a technician to deploy the cargo. All elements are mandatory.</p>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="order-id">Order ID</label>
            <input type="text" name="orderId" id="order-id" required />
          </div>

          <div>
            <label htmlFor="technician">Technician</label>
            <select name="technician" id="technician" required>
              {FORM_OPTIONS.technician.map((technician) => <option>{technician}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="platform">Platform</label>
            <select name="platform" id="platform" required>
              {FORM_OPTIONS.platform.map((platform) => <option>{platform}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="drone">Drone</label>
            <select name="drone" id="drone" required>
              {FORM_OPTIONS.drone.map((drone) => <option>{drone}</option>)}
            </select>
          </div>

          <div>
            <button>Cancel</button>
            <button type="submit">Create new delivery</button>
          </div>
        </form>
      </div>


      <DeliveryList deliveries={deliveriesCtx.deliveries} />
    </section>
  );
}

export default DeliveryListView;
