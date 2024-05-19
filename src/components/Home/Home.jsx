import "./Home.css";
import Curriculum from "./Curriculum/Curriculum";
import Overview from "./Overview/Overview";
import Refund from "./Refund/Refund";
import Testimonials from "./Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-header">
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#curriculum">Curriculum</a>
            </li>
            <li>
              <a href="#refund">Refund</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="home-container">
          <Overview id="overview" />
          <Curriculum id="curriculum" />
          <Refund id="refund" />
          <Testimonials id="testimonials" />
        </div>
        <div className="opportunites">
          <span>
            Unlock <span style={{ color: "#b73bbe" }}>6 Certificates</span> &
            <span style={{ color: "#b73bbe" }}> Internship Opportunities</span>
          </span>
          <div className="cards">
            <div className="card">
              <img src="first.png" alt="" />
            </div>
            <div className="card">
              <img src="second.png" alt="" />
            </div>
          </div>
        </div>
        <div className="internship-procedure">
          <span>How does the Internship Program works?</span>
          <img src="learn.png" alt="" />
        </div>
      </div>
    </>
  );
}
