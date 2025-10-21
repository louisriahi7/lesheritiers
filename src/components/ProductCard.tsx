import { Badge } from "./Badge";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: {
    text: string;
    variant?: "default" | "exclusive";
  };
}

export const ProductCard = ({ image, name, price, originalPrice, badge }: ProductCardProps) => {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-card mb-4">
        {badge && (
          <Badge variant={badge.variant}>
            {badge.text}
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-medium tracking-wide group-hover:text-muted-foreground transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              €{originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-base font-medium">
            €{price.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
};
