import { useNavigate } from "react-router-dom";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">Welcome</h1>
        <p className="home-subtitle">Please login or sign up to continue</p>

        <div className="home-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="ghost-btn"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

