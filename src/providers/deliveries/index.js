import { createContext } from 'react';

import DUMMY_DELIVERIES from 'src/data/dummy_deliveries.json'
import useLocalStorage from 'src/hooks/useLocalStorage';

const DEFAULT_DELIVERY_STATUS = 'Ready';
const DEFAULT_DELIVERY_TECHNICIAN_CHECK = 'Passed';
const INITIAL_CONTEXT_VALUE = {
  deliveries: [],
  getDeliveryByOrderId: (orderId) => { },
  addNewDelivery: (newDeliveryData) => { },
};

const DeliveryContext = createContext(INITIAL_CONTEXT_VALUE);

const DeliveryContextProvider = (props) => {
  const [deliveries, saveDeliveries, getDeliveries] = useLocalStorage('deliveries', DUMMY_DELIVERIES);

  const addNewDelivery = (newDeliveryData) => {
    const newDelivery = {
      ...newDeliveryData,
      status: DEFAULT_DELIVERY_STATUS,
      technician_check: DEFAULT_DELIVERY_TECHNICIAN_CHECK,
    };

    const storedDeliveries = getDeliveries();
    storedDeliveries.unshift(newDelivery);
    saveDeliveries(storedDeliveries);
  }

  const getDeliveryByOrderId = (orderId) => {
    const storedDeliveries = getDeliveries();
    return storedDeliveries.find((delivery) => delivery.order_id === orderId);
  }

  return (
    <DeliveryContext.Provider
      value={{
        deliveries,
        getDeliveryByOrderId,
        addNewDelivery
      }}
    >
      {props.children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryContext;
export { DeliveryContextProvider };
