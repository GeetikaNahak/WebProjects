export function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Perfume Shop</h1>
        <ul className="flex gap-6">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  