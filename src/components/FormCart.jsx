import InputFormCart from './InputFormCart'

function FormCart({ formData, handleChange }) {
  return (
    <>
      <form className="flex flex-col gap-4">
        <InputFormCart
          label="Nombre completo"
          type="text"
          value={formData.name}
          nameValue="name"
          onChange={handleChange}
        />
        <InputFormCart
          label="Correo electrónico"
          type="email"
          value={formData.email}
          nameValue="email"
          onChange={handleChange}
        />
        <InputFormCart
          label="Número telefónico"
          type="tel"
          value={formData.phone}
          nameValue="phone"
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default FormCart
