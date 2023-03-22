function Footer() {
  return (
    <footer className="flex h-20 flex-col items-center justify-center gap-2 bg-neutral-100 text-[0.875rem] text-neutral-500 md:flex-row md:gap-4">
      <p>
        Creado por{' '}
        <a
          href="https://brandonpalmeros.dev/"
          className="text-black hover:underline"
          target="_blank"
          rel="noopener"
        >
          Brandon Palmeros
        </a>
      </p>
    </footer>
  )
}

export default Footer
