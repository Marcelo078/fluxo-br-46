import { Link } from "react-router-dom";
import { CTAButton } from "./ui/cta-button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-gradient-cta">
            Oportunidades Brasil
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-primary">
            Início
          </Link>
          <Link to="/todos-produtos" className="transition-colors hover:text-primary">
            Todos os Produtos
          </Link>
          <Link to="/lovable-ia" className="transition-colors hover:text-primary">
            Ferramentas IA
          </Link>
          <Link to="/formula-negocio-online" className="transition-colors hover:text-primary">
            Negócios Online
          </Link>
        </nav>

        <CTAButton size="sm" asChild>
          <Link to="/fabrica-comissoes">
            Começar Agora
          </Link>
        </CTAButton>
      </div>
    </header>
  );
};

export default Header;