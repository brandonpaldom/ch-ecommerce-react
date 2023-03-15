function InputFormCart({ label, type, nameValue, value, onChange }) {
  return (
    <label className="block">
      <span>{label}</span>
      <input
        type={type}
        className="mt-1 block w-full border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
        name={nameValue}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default InputFormCart
