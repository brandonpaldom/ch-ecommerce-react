function Loader() {
  return (
    <div className="flex animate-pulse flex-col gap-2">
      <div className="aspect-[3/4] w-full rounded bg-neutral-200" />
      <div className="h-4 w-2/3 rounded bg-neutral-200" />
      <div className="h-4 w-1/3 rounded bg-neutral-200" />
    </div>
  );
}

export default Loader;
