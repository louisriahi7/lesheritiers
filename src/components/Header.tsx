import { ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              T-Shirts
            </a>
            <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              Hoodies
            </a>
            <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              Sweaters
            </a>
            <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              Accessories
            </a>
          </nav>

          <div className="flex-1 flex justify-center md:justify-start md:flex-initial">
            <h1 className="text-xl font-serif tracking-tight">
              notre succès
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-primary py-2 text-center">
        <p className="text-xs text-primary-foreground tracking-widest uppercase">
          Worldwide Shipping • 20,000+ Happy Customers • Autumn Collection Live
        </p>
      </div>
    </header>
  );
};
