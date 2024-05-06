import { Link, useNavigate, useLocation } from 'react-router-dom';
import DropdownButton from 'components/ux/dropdown-button/DropdownButton';

import { useContext} from 'react';

/**
 * A component that renders the navigation items for the navbar for both mobile/desktop view.
 *
 * @param {Object} props - The component's props.
 * @param {boolean} props.isAuthenticated - A flag indicating whether the user is authenticated.
 * @param {Function} props.onHamburgerMenuToggle
 */

  /**
   * Determines if a given path is the current active path.
   *
   * @param {string} path - The path to check.
   * @returns {boolean} - True if the path is active, false otherwise.
   */
 
const NavbarItems = ({ onHamburgerMenuToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

 
  const token=localStorage.getItem('token');

  const handleLogout = async () => {
   
    
    localStorage.removeItem('token');
     // Update authentication status to false upon logout
    navigate('/login');
  };

  const dropdownOptions = [
   
    { name: 'Logout', onClick: handleLogout },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <li className="p-4 hover:bg-blue-900 md:hover:bg-black">
        <Link
          to="/"
          className={`uppercase font-medium text-slate-100 hover-underline-animation ${
            isActive('/') && 'active-link'
          }`}
          onClick={onHamburgerMenuToggle}
        >
          Home
        </Link>
      </li>
      <li className="p-4 hover:bg-blue-900 md:hover:bg-black">
        <Link
          to="/hotels"
          className={`uppercase font-medium text-slate-100 hover-underline-animation ${
            isActive('/hotels') && 'active-link'
          }`}
          onClick={onHamburgerMenuToggle}
        >
          Rooms
        </Link>
      </li>
      <li className="p-4 hover:bg-black-900 md:hover:bg-black">
        <Link
          to="/about-us"
          className={`uppercase font-medium text-slate-100 hover-underline-animation ${
            isActive('/about-us') && 'active-link'
          }`}
          onClick={onHamburgerMenuToggle}
        >
          About Us
        </Link>
      </li>
      <li
        className={`${!token && 'p-4 hover:bg-black-900 md:hover:bg-black'}`}
      >
        {token ? (
          <DropdownButton triggerType="click" options={dropdownOptions} />
        ) : (
          <Link
            to="/login"
            className={`uppercase font-medium text-slate-100 hover-underline-animation ${
              isActive('/login') && 'active-link'
            }`}
            onClick={onHamburgerMenuToggle}
          >
            Login/SignUp
          </Link>
        )}
      </li>
    </>
  );
};

export default NavbarItems;
