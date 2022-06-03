import { Link } from 'react-router-dom';

function Button({
  primary,
  secondary,
  border,
  wfull,
  wmax,
  onClick,
  children,
  link,
  path,
  disabled,
  transparent,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block w-full px-4 py-2 ${primary && 'bg-black text-white'} ${
        secondary && 'children-black bg-black/10'
      } ${border && 'border border-black text-black'} ${wfull && 'w-full'} ${
        wmax && 'w-full md:w-max'
      } ${transparent && 'opacity-20'} ${disabled && 'cursor-not-allowed'}`}
      disabled={disabled}
    >
      {link ? (
        <Link
          to={disabled ? '' : path}
          className={disabled && 'cursor-not-allowed'}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
