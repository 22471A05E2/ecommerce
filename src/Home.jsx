import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="home-video-bg">
        <source src="ecommerce/videos/veg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="home-content">
        <h1>Fresh & Fast Food Delivery!!!</h1>
        <p>Your favorite items delivered at your doorstep within minutes</p>
        <div className="home-buttons">
          <Link to="/veg" className="home-btn">Shop Veg</Link>
          <Link to="/nonveg" className="home-btn">Shop Non-Veg</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;