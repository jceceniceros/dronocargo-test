import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import { DeliveryContextProvider } from 'src/providers/deliveries'

import Layout from 'src/components/Layout'
import DeliveryView from 'src/views/Delivery/Show'
import DeliveryListView from 'src/views/Delivery/List'

const ROUTES = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Navigate to="/shipments" replace />} />

      <Route element={<Layout />}>
        <Route exact path="/shipments" element={<DeliveryListView />} />

        <Route exact path="/shipment/:id" element={<DeliveryView />} />
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
