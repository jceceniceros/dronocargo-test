import { useContext } from "react";
import { useParams } from "react-router-dom";
import DeliveryListElement from "src/components/DeliveriesList/Element";

import DeliveryContext from "src/providers/deliveries";

const DeliveryView = () => {
  const routeParams = useParams();

  const deliveriesCtx = useContext(DeliveryContext);
  const delivery = deliveriesCtx.getDeliveryByOrderId(routeParams.id)

  const viewContent = (delivery) ? (
    <>
      <h1>{delivery.order_id}</h1>

      <DeliveryListElement delivery={delivery} />
    </>
  ) : (
    <>
      <h1>Order ID not found</h1>
    </>
  )

  return (
    <section>
      {viewContent}
    </section>
  );
}

export default DeliveryView;
