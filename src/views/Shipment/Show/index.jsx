import { useParams } from "react-router-dom";

const Home = () => {
  const routeParams = useParams();

  return (
    <section>
      <h1>Shipment {routeParams.id}</h1>
    </section>
  );
}

export default Home;
