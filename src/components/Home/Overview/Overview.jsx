import "./Overview.css";

export default function Overview(props) {
  return (
    <>
      <div className="overview" id={props.id}>
        <div className="overview-part-1">
          <span>
            An{" "}
            <span
              style={{ border: "none", fontWeight: "bold", padding: "5px " }}
            >
              IIT Delhi
            </span>{" "}
            Alumni Initiative
          </span>
          <h1>
            Become an Expert in the field of{" "}
            <span style={{ border: "none" }}>Data Science with 6 courses</span>
          </h1>
          <p>
            A specially crafted Tech Kickstarter, with 5+ extensive online
            courses.
          </p>
          <div className="tags">
            <div className="tag">
              <img src="tag-1-image" alt="" />
              <span>Personal Mentorship</span>
            </div>{" "}
            <div className="tag">
              <img src="tag-2-image" alt="" />
              <span>Internship Assistance</span>
            </div>{" "}
            <div className="tag">
              <img src="tag-3-image" alt="" />
              <span>Industry Certified Courses</span>
            </div>
          </div>
          <div className="overview-buttons">
            <button>Enroll Now</button>
            <button>Know More</button>
          </div>
        </div>
        <div className="overview-part-2">
          <div className="col">
            <img src="frame-1.png" alt="" />
          </div>
          <div className="col">
            <img src="frame-2.png" alt="" />
          </div>
          <div className="col">
            <img src="frame-3.png" alt="" />
          </div>
          <div className="col">
            <img src="frame-4.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
