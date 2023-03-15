function CartItem({
  index,
  color,
  viewColor,
  item,
  quantityToAdd,
  removeFromCart,
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-neutral-100 pb-4 md:flex-row">
      <div className="w-[120px] ">
        <img src={color} alt="" className="aspect-square object-cover" />
      </div>
      <div className="flex w-full grow flex-col pt-0 md:w-3/4 md:pt-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="leading-tight">{item.title}</p>
          <p className="leading-tight">${item.price * quantityToAdd}</p>
        </div>
        <p className="line-clamp-2 mb-2 w-full text-[0.875rem] text-neutral-500 sm:w-2/3">
          {item.description}
        </p>
        <p className="text-neutral-500">
          Cantidad {quantityToAdd} • Color {viewColor}
        </p>
        <button
          onClick={() => removeFromCart(index)}
          type="button"
          className="w-max self-end text-neutral-500 hover:underline"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default CartItem
