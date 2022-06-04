import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../assets/icons/menu-burger.svg';
import Logo from '../assets/magnolia.svg';
import CartWidget from './CartWidget';
import NavbarItem from './NavbarItem';

function Navbar() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  const options = [
    {
      path: '/',
      text: 'Tienda',
    },
    {
      path: '/category/woman',
      text: 'Mujer',
    },
    {
      path: '/category/man',
      text: 'Hombre',
    },
    {
      path: '/category/beauty',
      text: 'Belleza',
    },
  ];

  return (
    <>
      <header className="bg-white">
        <nav className="flex h-16 items-center justify-between px-6">
          <div onClick={handleToggle} className="block sm:hidden">
            <img src={MenuIcon} alt="" width={24} />
          </div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="hidden items-center gap-4 sm:flex">
            {options.map(({ text, path }, index) => (
              <NavbarItem
                key={index}
                path={path}
                text={text}
                handleClose={handleClose}
              />
            ))}
          </div>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </nav>
      </header>

      {show && (
        <div className="absolute z-10 w-1/2 bg-blue-100 p-6 sm:hidden">
          <div className="flex flex-col gap-4">
            {options.map(({ text, path }, index) => (
              <NavbarItem
                key={index}
                path={path}
                text={text}
                handleClose={handleClose}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
