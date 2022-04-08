import { createContext } from 'react';

import DUMMY_DELIVERIES from 'src/data/dummy_deliveries.json'

const DeliveryContext = createContext({
  deliveries: [],
  getDeliveryByOrderId: (orderId) => { },
});

const retrieveStoredDeliveries = () => {
  const serializedDeliveries = localStorage.getItem('deliveries');
  return JSON.parse(serializedDeliveries);
};

const storeDeliveries = (deliveries) => {
  const serializedDeliveries = JSON.stringify(deliveries);
  localStorage.setItem('deliveries', serializedDeliveries);
}

storeDeliveries(DUMMY_DELIVERIES)

const DeliveryContextProvider = (props) => {
  const deliveries = retrieveStoredDeliveries();

  const getDeliveryByOrderId = (orderId) => {
    const storedDeliveries = retrieveStoredDeliveries();
    return storedDeliveries.find((delivery) => delivery.order_id === orderId);
  }

  const context = {
    deliveries,
    getDeliveryByOrderId
  };

  return (
    <DeliveryContext.Provider value={context}>
      {props.children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryContext;
export { DeliveryContextProvider };
