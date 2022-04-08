import { createContext, useState } from 'react';

import DUMMY_DELIVERIES from 'src/data/dummy_deliveries.json'

const DeliveryContext = createContext({
  deliveries: [],
  getDeliveryByOrderId: (orderId) => { },
  addNewDelivery: (newDeliveryData) => { },
});

const retrieveStoredDeliveries = () => {
  const serializedDeliveries = localStorage.getItem('deliveries');
  return JSON.parse(serializedDeliveries);
};

const storeDeliveries = (deliveries) => {
  const serializedDeliveries = JSON.stringify(deliveries);
  localStorage.setItem('deliveries', serializedDeliveries);
}

const DEFAULT_DELIVERY_STATUS = 'Ready';
const DEFAULT_DELIVERY_TECHNICIAN_CHECK = 'Passed';

if (localStorage.getItem('deliveries') === null) {
  storeDeliveries(DUMMY_DELIVERIES)
}

const DeliveryContextProvider = (props) => {
  const [deliveries, setDeliveries] = useState(retrieveStoredDeliveries());

  const getDeliveryByOrderId = (orderId) => {
    const storedDeliveries = retrieveStoredDeliveries();
    return storedDeliveries.find((delivery) => delivery.order_id === orderId);
  }

  const addNewDelivery = (newDeliveryData) => {
    const newDelivery = {
      ...newDeliveryData,
      status: DEFAULT_DELIVERY_STATUS,
      technician_check: DEFAULT_DELIVERY_TECHNICIAN_CHECK,
    };

    const storedDeliveries = retrieveStoredDeliveries();
    storedDeliveries.unshift(newDelivery);

    storeDeliveries(storedDeliveries);
    setDeliveries(storedDeliveries);
  }

  const context = {
    deliveries,
    getDeliveryByOrderId,
    addNewDelivery
  };

  return (
    <DeliveryContext.Provider value={context}>
      {props.children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryContext;
export { DeliveryContextProvider };
