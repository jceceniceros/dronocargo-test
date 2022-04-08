import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import { DeliveryContextProvider } from 'src/providers/deliveries'

import Layout from 'src/components/Layout'
import Shipment from 'src/views/Shipment/Show'
import ShipmentList from 'src/views/Shipment/List'

const ROUTES = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Navigate to="/shipments" replace />} />

      <Route element={<Layout />}>
        <Route exact path="/shipments" element={<ShipmentList />} />

        <Route exact path="/shipment/:id" element={<Shipment />} />
      </Route>
    </Routes>
  </Router>
)

function App() {
  return (
    <div className="App">
      <main>
        <DeliveryContextProvider>
          {ROUTES}
        </DeliveryContextProvider>
      </main>
    </div>
  );
}

export default App;
