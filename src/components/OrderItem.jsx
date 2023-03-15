function OrderItem({ color, viewColor, title, price, quantity, description }) {
  return (
    <div className="flex flex-col gap-4 border-b border-neutral-100 pb-4 md:flex-row">
      <div className="w-[120px] ">
        <img src={color} alt="" className="aspect-square object-cover" />
      </div>
      <div className="flex w-full grow flex-col pt-0 md:w-3/4 md:pt-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="leading-tight">{title}</p>
          <p className="leading-tight">${price * quantity}</p>
        </div>
        <p className="line-clamp-2 mb-2 w-full text-[0.875rem] text-neutral-500 sm:w-2/3">
          {description}
        </p>
        <p className="text-neutral-500">
          Cantidad {quantity} • Color {viewColor}
        </p>
      </div>
    </div>
  )
}

export default OrderItem
