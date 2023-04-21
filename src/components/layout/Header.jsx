import React from 'react';
import './header.scss';
import { useAuthCtx } from '../../store/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../auth/Logout';

function Header() {
  const { isLoggedIn } = useAuthCtx();

  return (
    <header className='header'>
      <div className='containerHeader'>
        <Link className='logo' to={'/'}>
          Fin<span>al</span>
        </Link>
        <nav>
          {!isLoggedIn && (
            <>
              <NavLink className='navBar' to={'/login'}>
                Login
              </NavLink>
              <NavLink className='navBar' to={'/register'}>
                Register
              </NavLink>
            </>
          )}

          {isLoggedIn && (
            <>
              <NavLink className='navBar' to={'/shops'}>
                Shop
              </NavLink>
              <NavLink className='navBar' to={'/shops/new'}>
                AddShop
              </NavLink>
              <NavLink className='btn' to={'/login'}>
                <Logout />
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
