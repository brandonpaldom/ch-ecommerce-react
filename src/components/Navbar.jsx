import Logo from '../assets/magnolia.svg';
import MenuIcon from '../assets/icons/menu-burger.svg';
import CartWidget from './CartWidget';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

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
            <Link to="/" className="hover:underline">
              Tienda
            </Link>
            <Link to="/category/woman" className="hover:underline">
              Mujer
            </Link>
            <Link to="/category/man" className="hover:underline">
              Hombre
            </Link>
            <Link to="/category/home" className="hover:underline">
              Hogar
            </Link>
            <Link to="/category/beauty" className="hover:underline">
              Belleza
            </Link>
          </div>
          <CartWidget />
        </nav>
      </header>

      {show && (
        <div className="absolute z-10 w-1/2 bg-blue-100 p-6 sm:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/" className="hover:underline">
              Tienda
            </Link>
            <Link to="/category/woman" className="hover:underline">
              Mujer
            </Link>
            <Link to="/category/man" className="hover:underline">
              Hombre
            </Link>
            <Link to="/category/home" className="hover:underline">
              Hogar
            </Link>
            <Link to="/category/beauty" className="hover:underline">
              Belleza
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
