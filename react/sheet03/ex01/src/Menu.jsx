import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav style={{ marginBottom: "24px" }}>
      <NavLink to="/" style={{ marginRight: "12px" }}>Inicio</NavLink>
      <NavLink to="/about" style={{ marginRight: "12px" }}>Acerca de</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
    </nav>
  );
}

export default Menu;