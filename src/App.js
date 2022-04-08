import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { DeliveryContextProvider } from 'src/providers/deliveries'

import Home from 'src/views/Home'
import Shipment from 'src/views/Shipment/Show'
import ShipmentList from 'src/views/Shipment/List'

const ROUTES = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/shipments" element={<ShipmentList />} />

      <Route exact path="/shipment/:id" element={<Shipment />} />
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
