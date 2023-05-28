import { Button, Container } from "react-bootstrap";
import "../components/LandingPage.css";
import imgs from "../img/clean.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
let Landing = () => {
  return (
    <div style={{ backgroundColor: "#f1c60a" }}>
      <Container>
        <div className="spec"></div>
        <div className="row">
          <div className="col-6">
            <div className="spec2"></div>
            <div>
              <h1 className="top">GET FRESH AND CLEAN KICKS</h1>
              <p>
                Step up your shoe game with our online store! Explore our trendy
                collection of footwear for every occasion. From sneakers to
                heels, we have the perfect pair waiting for you. Shop now and
                enjoy a seamless online shopping experience with fast delivery
                to your doorstep.
              </p>
             <Container>
                <div className="row">
                    <div className="col-6">
                        <Link to="/login">
                          <Button className="col-10" variant="outline-info" style={{color:"white",border:"3px solid #0dcaf0"}}>LOGIN</Button>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to="signup">
                          <Button className="col-10" variant="outline-dark" style={{color:"#212529",border:"3px solid #212529"}}>SIGN UP</Button>
                        </Link>
                    </div>
                </div>
             </Container>
            </div>
          </div>
          <div className="col-6">
            <div>
              <img
                src={imgs}
                alt="img"
                style={{ width: "600px", height: "600px" }}
              ></img>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Landing;
