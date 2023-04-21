import React from 'react';
import './header.scss';
import { useAuthCtx } from '../../store/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../auth/Logout';

function Header() {
  const { isLoggedIn } = useAuthCtx();

  return (
    <header>
      <div className='container'>
        <Link className='logo' to={'/'}>
          Fin<span>al</span>
        </Link>
        <nav>
          <NavLink className='navBar' to={'/'}>
            Home
          </NavLink>
          <NavLink className='navBar' to={'/login'}>
            Login
          </NavLink>
          <NavLink className='navBar' to={'/register'}>
            Register
          </NavLink>
          {isLoggedIn && (
            <NavLink className='navBar' to={'/login'}>
              <Logout />
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
