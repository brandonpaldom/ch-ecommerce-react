import { Link } from 'react-router-dom';

function NavbarItem({ path, text, handleClose }) {
  return (
    <Link to={path} onClick={handleClose} className="hover:underline">
      {text}
    </Link>
  );
}

export default NavbarItem;
