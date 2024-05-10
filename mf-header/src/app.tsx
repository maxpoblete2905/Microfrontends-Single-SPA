import './style.css'
import img  from './user.jpg'

export const App = () => {
  return (  
    <header>
      <div className="user-info">
        <img width="50" height="50" src={img} className="fas fa-user-circle fa-2x"></img> 
        <p>Bienvenid@, <strong>laura gomez</strong> Rol: <strong>Administrador</strong></p>
      </div>
      <button id="logoutButton" className="btn btn-outline-secondary">
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </header>
  )
};
