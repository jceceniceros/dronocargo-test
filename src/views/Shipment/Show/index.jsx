import { useContext } from "react";
import { useParams } from "react-router-dom";

import DeliveryContext from "src/providers/deliveries";

const Home = () => {
  const routeParams = useParams();

  const deliveriesCtx = useContext(DeliveryContext);
  const delivery = deliveriesCtx.getDeliveryByOrderId(routeParams.id)

  const viewContent = (delivery) ? (
    <>
      <h1>{delivery.order_id}</h1>
      <ul>
        {Object.entries(delivery).map(([key, value]) => (
          <li><b>{key}</b>: {value}</li>
        ))}
      </ul>
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

export default Home;
