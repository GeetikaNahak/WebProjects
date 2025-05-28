export function Banner() {
    return (
      <section className="relative w-full h-80 bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold">Discover the Scent of Elegance</h2>
          <p className="text-lg mt-2">Explore our exclusive collection of luxury perfumes.</p>
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">Shop Now</button>
        </div>
      </section>
    );
  }