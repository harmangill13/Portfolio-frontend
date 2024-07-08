import { Link } from "react-router-dom";
import '../index.css' 

function Header(props) {
  return (
    <header className="header">
      <h1 className="header-title">My Portfolio Page</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/projects" className="nav-link">PROJECTS</Link>
      </nav>
    </header>
  );
}

export default Header;