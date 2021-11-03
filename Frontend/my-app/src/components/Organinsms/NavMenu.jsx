import { NavLink } from "react-router-dom";

const NavMenu = () => (
  <header>
    <div>
      <div>
        <h1>Este es un NavMenu</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="activo">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/usuarios" activeClassName="activo">
                Usuarios
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default NavMenu;
