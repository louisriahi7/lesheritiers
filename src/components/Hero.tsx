import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/30" />
      
      <div className="relative z-10 text-center text-primary-foreground px-4">
        <p className="text-sm tracking-[0.3em] uppercase mb-4 font-light">
          Autumn Collection
        </p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 font-serif tracking-tight">
          Notre Succès
        </h1>
        <Button 
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-12 py-6 text-base tracking-wider uppercase"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
};
