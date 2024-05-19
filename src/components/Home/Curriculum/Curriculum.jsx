import "./Curriculum.css";

export default function Curriculum(props) {
  return (
    <div className="curriculum" id={props.id}>
      <span>DATASCIENCE COURSE LEARNING PATH</span>
      <h2>Data Science Course Curriculum</h2>
      <div className="accordions">
        <div className="accordion">
          <div className="col-1">
            <h3>C++</h3>
            <p>Learn C++ for strong programming fundamentals</p>
          </div>
          <div className="col-2">
            <button>
              <img src="" alt="" />
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src="eye.png" alt="" />
                View Curriculum
              </span>{" "}
            </button>
          </div>
        </div>
        <div className="accordion">
          <div className="col-1">
            <h3>MERN STACK</h3>
            <p>Master the MERN Stack for high-demand projects.</p>
          </div>
          <div className="col-2">
            <button>
              <img src="" alt="" />
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src="eye.png" alt="" />
                View Curriculum
              </span>
            </button>
          </div>
        </div>
        <div className="accordion">
          <div className="col-1">
            <h3>Data Structure & Algorithm</h3>
            <p>Excel in Data Structure and Algorithms for interview success.</p>
          </div>
          <div className="col-2">
            <button>
              <img src="" alt="" />
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src="eye.png" alt="" />
                View Curriculum
              </span>{" "}
            </button>
          </div>
        </div>
        <div className="accordion">
          <div className="col-1">
            <h3>Competitive Programming</h3>
            <p>Excel in Data Structure and Algorithms for interview success.</p>
          </div>
          <div className="col-2">
            <button>
              <img src="" alt="" />
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src="eye.png" alt="" />
                View Curriculum
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
