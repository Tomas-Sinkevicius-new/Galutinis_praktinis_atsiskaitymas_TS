import React from 'react';
import './headerAndFooter.scss';
import { useAuthCtx } from '../../store/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../auth/Logout';

function Header() {
  const { isLoggedIn, user } = useAuthCtx();

  return (
    <header className='header'>
      <div className='containerHeader'>
        <Link className='logo' to={'/'}>
          Shops
          <span>
            <i className='fa fa-shopping-cart' aria-hidden='true'></i>
          </span>
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
              {isLoggedIn && <p className='loogedUser'>User: {user.email}</p>}
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
