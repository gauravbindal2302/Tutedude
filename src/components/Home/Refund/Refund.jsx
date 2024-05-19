import "./Refund.css";

export default function Refund(props) {
  return (
    <>
      <div className="refund" id={props.id}>
        <h1>
          Don't miss out on this{" "}
          <span style={{ color: "#b73bbe" }}>limited-time opportunity</span> to
          learn for <span style={{ color: "#b73bbe" }}>Free!</span>
        </h1>
        <div className="refund-batch">
          <img src="refund.png" alt="" />
        </div>
        <h2>How does it work?</h2>
        <div className="steps">
          <div className="step">
            <img src="1.png" alt="" />
          </div>
          <div className="step">
            <img src="2.png" alt="" />
          </div>
          <div className="step">
            <img src="3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
