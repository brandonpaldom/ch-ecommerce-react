function FormCart({ formData, handleChange }) {
  return (
    <>
      <form className="flex flex-col gap-4">
        <label className="block">
          <span>Nombre completo</span>
          <input
            type="text"
            className="mt-1 block w-full border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span>Correo electrónico</span>
          <input
            type="email"
            className="mt-1 block w-full border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span>Número telefónico</span>
          <input
            type="tel"
            className="mt-1 block w-full border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
}

export default FormCart;
