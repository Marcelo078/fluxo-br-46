import { CTAButton } from "./ui/cta-button";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  highlight?: string;
  ctaText: string;
  link: string;
  category: string;
  slug: string;
}

const ProductCard = ({ title, description, highlight, ctaText, link, category, slug }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-md hover-lift">
      {highlight && (
        <Badge className="absolute right-4 top-4 bg-cta text-cta-foreground">
          {highlight}
        </Badge>
      )}
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <h3 className="font-bold leading-tight text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton 
            size="sm" 
            className="flex-1" 
            onClick={() => window.open(link, '_blank')}
          >
            {ctaText}
          </CTAButton>
          <CTAButton 
            variant="outline" 
            size="sm"
            asChild
          >
            <a href={`/${slug}`}>
              Saiba Mais
            </a>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;