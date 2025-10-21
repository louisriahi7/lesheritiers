import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryNav } from "@/components/CategoryNav";
import { ProductCard } from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    image: product1,
    name: "Knitted Vest",
    price: 115,
    originalPrice: 145,
    badge: { text: "Low Stock", variant: "default" as const },
  },
  {
    id: 2,
    image: product2,
    name: "Wool Overshirt",
    price: 165,
    badge: { text: "Exclusive", variant: "exclusive" as const },
  },
  {
    id: 3,
    image: product3,
    name: "Embroidered Sweater",
    price: 95,
    badge: { text: "Low Stock", variant: "default" as const },
  },
  {
    id: 4,
    image: product4,
    name: "Heritage Hoodie",
    price: 125,
    badge: { text: "Exclusive", variant: "exclusive" as const },
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryNav />
        
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
