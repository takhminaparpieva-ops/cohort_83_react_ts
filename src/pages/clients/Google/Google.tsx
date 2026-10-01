import { useNavigate } from "react-router-dom";

function Google() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Google</h1>
      <p>Google is a technology company.</p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Google;