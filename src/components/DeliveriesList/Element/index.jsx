const DeliveryListElement = (props) => {
  const { delivery } = props;

  return (
    <ul>
      {Object.entries(delivery).map(([key, value]) => (
        <li><b>{key}</b>: {value}</li>
      ))}
    </ul>
  )
}

export default DeliveryListElement;
