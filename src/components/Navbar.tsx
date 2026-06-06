import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h2>Rey Shop</h2>
      </Link>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;