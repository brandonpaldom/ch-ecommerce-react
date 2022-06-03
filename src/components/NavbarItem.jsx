import { Link } from 'react-router-dom';

function NavbarItem({ path, text }) {
  return (
    <Link to={path} className="hover:underline">
      {text}
    </Link>
  );
}

export default NavbarItem;
