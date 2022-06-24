function Footer() {
  return (
    <footer className="flex h-16 items-center justify-start gap-4 bg-neutral-100 px-6 text-[0.875rem] text-neutral-500">
      <p>Magnolia</p>
      <p>
        Construido con{' '}
        <a
          href="https://reactjs.org/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </p>
      <a
        href="https://github.com/brandonpaldom/ch-ecommerce"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en GitHub
      </a>
    </footer>
  );
}

export default Footer;
