import { Link } from 'react-router-dom'

function Button({
  filled,
  standard,
  outlined,
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
      className={`block px-4 py-2 ${filled ? 'bg-black text-white' : ''} ${
        standard ? 'children-black bg-black/10' : ''
      } ${outlined ? 'border border-black text-black' : ''} ${
        wfull ? 'w-full' : ''
      } ${wmax ? 'w-full md:w-max' : ''} ${transparent ? 'opacity-20' : ''} ${
        disabled ? 'cursor-not-allowed' : ''
      }`}
      disabled={disabled}
    >
      {link ? (
        <Link
          to={disabled ? '' : path}
          className={disabled ? 'cursor-not-allowed' : ''}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
