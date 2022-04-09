import DeliveryListElement from "./Element";

const DeliveryList = (props) => {
  const { deliveries } = props;

  return (
    <section>
      {deliveries.map((delivery) => (
        <DeliveryListElement
          key={`delivery-${delivery.order_id}`}
          delivery={delivery}
        />
      ))}
    </section>
  )
}

export default DeliveryList;
