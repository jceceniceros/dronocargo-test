import DeliveryListElement from "./Element";

const DeliveryList = (props) => {
  const { deliveries } = props;

  return (
    <section>
      {deliveries.map((delivery) => <DeliveryListElement delivery={delivery} />)}
    </section>
  )
}

export default DeliveryList;
