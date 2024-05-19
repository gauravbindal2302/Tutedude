import "./Testimonials.css";

export default function Testimonials(props) {
  return (
    <>
      <div className="testimonials" id={props.id}>
        <h1>
          Top Companies Hiring{" "}
          <span className="gradient-text">Data Scientist</span>
        </h1>
        <div className="cards">
          <div className="card">
            <img src="" alt="logo" />
          </div>
          <div className="card">
            <img src="" alt="logo" />
          </div>
          <div className="card">
            <img src="" alt="logo" />
          </div>
          <div className="card">
            <img src="" alt="logo" />
          </div>
          <div className="card">
            <img src="" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}
