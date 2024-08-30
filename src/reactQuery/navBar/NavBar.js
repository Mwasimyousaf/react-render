import { Link } from 'react-router-dom';
import './NavBar.module.css'

const NavBar = () => {

  return (
    <div>
      <ul>
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
        <li>
          <Link to="RQusers">RQUsers</Link>
        </li>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li style={{float:"right"}}>
          <Link to="login">Login</Link>
        </li>
      </ul>
      <></>
    </div>
  );
};

export default NavBar;
