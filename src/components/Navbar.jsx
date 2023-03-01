import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button style={{ border: "1px solid #000", marginRight: 5 }}>
          Home
        </button>
      </Link>

      <Link to="/contact">
        <button style={{ border: "1px solid #000", marginLeft: 5 }}>
          Contatos
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
