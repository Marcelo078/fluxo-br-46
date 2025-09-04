import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { CTAButton } from "@/components/ui/cta-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <div className="text-8xl font-bold text-gradient-cta">404</div>
          <h1 className="text-2xl font-bold">Página Não Encontrada</h1>
          <p className="text-muted-foreground">
            Ops! A página que você procura não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <CTAButton size="lg" asChild>
            <Link to="/">
              🏠 Voltar ao Início
            </Link>
          </CTAButton>
          
          <div className="text-sm text-muted-foreground">
            Ou explore nossas principais oportunidades:
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <CTAButton variant="outline" size="sm" asChild>
              <Link to="/fabrica-comissoes">
                Fábrica de Comissões
              </Link>
            </CTAButton>
            <CTAButton variant="outline" size="sm" asChild>
              <Link to="/formula-negocio-online">
                Fórmula Negócio Online
              </Link>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
