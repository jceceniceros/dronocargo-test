import { createContext } from 'react';

import DUMMY_DELIVERIES from 'src/data/dummy_deliveries.json'

const DeliveryContext = createContext({
  deliveries: [],
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

  const context = {
    deliveries
  };

  return (
    <DeliveryContext.Provider value={context}>
      {props.children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryContext;
export { DeliveryContextProvider };
