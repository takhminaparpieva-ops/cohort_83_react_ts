import { Link } from "react-router-dom";

function Clients() {
  return (
    <div>
      <h1>Clients</h1>

      <Link to="/clients/google">Google</Link>
      <br />

      <Link to="/clients/amazon">Amazon</Link>
      <br />

      <Link to="/clients/netflix">Netflix</Link>
    </div>
  );
}

export default Clients;