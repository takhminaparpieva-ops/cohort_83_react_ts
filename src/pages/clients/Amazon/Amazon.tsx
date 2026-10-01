import { useNavigate } from "react-router-dom";

function Amazon() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Amazon</h1>
      <p>Amazon  is a online shopping company .</p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Amazon;