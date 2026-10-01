import { useNavigate } from "react-router-dom";

function Netflix() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Netflix</h1>
      <p>Netflix is a streaming company.</p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Netflix;