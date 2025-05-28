import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { ProductCard } from "../components/ProductCard";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}