import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["New In", "Hoodies", "T-Shirts", "Pants", "Sweaters", "Others"];

export const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState("New In");

  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-4">
        <ul className="flex gap-8 overflow-x-auto">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "py-6 text-sm tracking-wide transition-colors whitespace-nowrap relative",
                  activeCategory === category
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
