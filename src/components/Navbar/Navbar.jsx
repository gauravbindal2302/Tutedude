import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <span>Logo</span>
        </div>
        <div className="login-buttons">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
    </>
  );
}
