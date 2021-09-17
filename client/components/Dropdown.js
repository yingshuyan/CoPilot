import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
//import { dispatch } from 'react-hot-toast/dist/core/store';
import {logout} from '../store';
import { useDispatch } from 'react-redux';



function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    setClick(false);
    dispatch(logout());
  }

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
            {item.title ==='Logout' ? 
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => handleLogoutClick()}
            >
            {item.title}
           </Link>
            : 
            <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            }
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;