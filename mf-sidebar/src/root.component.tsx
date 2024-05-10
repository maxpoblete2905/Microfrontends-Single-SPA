import "./style.css";
import img from "./cmpc.png";

export default function Root() {
  return (
    <section>
      <div className="sidebar">
        <div className="logo-container text-center">
          <img className="img" src={img} alt="" />
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="icon fas fa-users mr-2"></i> Usuarios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="icon fas fa-chart-bar mr-2"></i> Estadísticas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="icon fas fa-building mr-2"></i> Plantas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="icon fas fa-user-tag mr-2"></i> Roles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="icon fas fa-lock mr-2"></i> Permisos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="icon fas fa-mobile-alt mr-2"></i> Aplicaciones
            </a>
          </li>
        </ul>
        <hr className="bg-light" />
        <div className="options">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="icon fas fa-cog mr-2"></i> Configuración
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="icon fas fa-user-cog mr-2"></i> my cuenta{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="icon fas fa-sliders-h mr-2"></i> KPIS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
