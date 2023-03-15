import Button from './Button'

function NotProducts() {
  return (
    <div className="grid h-screen w-full grid-cols-1 place-content-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-neutral-500">
          Lo sentimos, no hay productos en esta categoría en este momento. Por
          favor, vuelva a comprobarlo pronto.
        </p>
        <Button link path={'/'} filled wmax>
          Regresar al inicio
        </Button>
      </div>
    </div>
  )
}

export default NotProducts
