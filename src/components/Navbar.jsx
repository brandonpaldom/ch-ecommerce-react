import Logo from '../assets/magnolia.svg';
import MenuIcon from '../assets/icons/menu.svg';
import ShoppingCartIcon from '../assets/icons/shopping-cart.svg';

function Navbar() {
  return (
    <>
      <header className="bg-white">
        <nav className="flex h-16 items-center justify-between px-6">
          <div className="block sm:hidden">
            <img src={MenuIcon} alt="" />
          </div>
          <img src={Logo} alt="" />
          <div className="hidden items-center gap-4 sm:flex">
            <a href="/" className="hover:underline">
              Tienda
            </a>
            <a href="/" className="hover:underline">
              Catálogo
            </a>
            <a href="/" className="hover:underline">
              Acerca de
            </a>
            <a href="/" className="hover:underline">
              Contacto
            </a>
          </div>
          <div className="flex gap-2">
            <img src={ShoppingCartIcon} alt="" />
            <span>0</span>
          </div>
        </nav>
      </header>

      <div className="fixed w-1/2 bg-blue-100 p-6 sm:hidden">
        <div className="flex flex-col gap-4">
          <a href="/" className="hover:underline">
            Tienda
          </a>
          <a href="/" className="hover:underline">
            Catálogo
          </a>
          <a href="/" className="hover:underline">
            Acerca de
          </a>
          <a href="/" className="hover:underline">
            Contacto
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
