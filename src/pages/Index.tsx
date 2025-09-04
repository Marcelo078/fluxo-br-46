import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const featuredProducts = [
    {
      title: "Fábrica de Comissões - Deborah Oliveira",
      description: "Método completo para criar uma máquina de vendas online e gerar comissões todos os dias. Estratégias comprovadas de marketing digital e vendas.",
      highlight: "🔥 Mais Vendido",
      ctaText: "Garantir Acesso Agora",
      link: "https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM",
      category: "Marketing Digital",
      slug: "fabrica-comissoes"
    },
    {
      title: "Fórmula Negócio Online - Alex Vargas",
      description: "O curso mais completo do Brasil para quem quer começar do zero no marketing digital. Mais de 10 mil alunos já mudaram de vida.",
      highlight: "✅ Aprovado",
      ctaText: "Começar Hoje",
      link: "https://go.hotmart.com/E11195793E",
      category: "Negócios Online",
      slug: "formula-negocio-online"
    },
    {
      title: "Lovable IA - Criação de Apps",
      description: "Plataforma revolucionária de IA para criar aplicativos e sites sem programar. Interface simples, resultados profissionais.",
      highlight: "🚀 IA",
      ctaText: "Testar Grátis",
      link: "https://lovable.dev/?via=marcelo-barbosa",
      category: "Ferramentas IA",
      slug: "lovable-ia"
    },
    {
      title: "Shorts Virais - Conteúdo TikTok",
      description: "Descubra os segredos para criar vídeos que viralizam no TikTok, Instagram Reels e YouTube Shorts. Aumente seu alcance exponencialmente.",
      highlight: "📱 Viral",
      ctaText: "Acessar Método",
      link: "https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky",
      category: "Conteúdo Digital",
      slug: "shorts-virais"
    }
  ];

  const categories = [
    { name: "Cursos Online", count: "15+", description: "Marketing digital, vendas e negócios" },
    { name: "Ferramentas IA", count: "8+", description: "Automação e criação assistida" },
    { name: "Serviços Financeiros", count: "5+", description: "Bancos digitais e investimentos" },
    { name: "Desenvolvimento", count: "6+", description: "Programação e criação de apps" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="mx-auto bg-cta text-cta-foreground text-sm px-4 py-2">
              🎯 As Melhores Oportunidades do Brasil
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Descubra as <span className="text-gradient-cta">Melhores Oportunidades</span> para Gerar Renda Online em 2024
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cursos comprovados, ferramentas de IA e estratégias que realmente funcionam. 
              Tudo testado e aprovado por nossa equipe especializada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton size="lg" className="text-lg px-8" asChild>
                <a href="#produtos-destaque">
                  Ver Oportunidades
                </a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <Link to="/fabrica-comissoes">
                  Produto Mais Vendido
                </Link>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Categorias Principais</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore nossas categorias cuidadosamente selecionadas com as melhores oportunidades do mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">{category.count}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="produtos-destaque" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-secondary text-secondary-foreground">⭐ Produtos em Destaque</Badge>
            <h2 className="text-3xl font-bold">As Melhores Oportunidades de 2024</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Produtos testados e aprovados pela nossa equipe. Resultados comprovados por milhares de usuários.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <CTAButton size="lg" asChild>
              <Link to="/todos-produtos">
                Ver Todos os Produtos
              </Link>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Por Que Confiar em Nós?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold">Produtos Testados</h3>
                <p className="text-sm text-muted-foreground">
                  Analisamos cada produto antes de recomendar
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold">Links Seguros</h3>
                <p className="text-sm text-muted-foreground">
                  Todos os links são verificados e seguros
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold">Resultados Reais</h3>
                <p className="text-sm text-muted-foreground">
                  Focamos apenas em produtos com resultados comprovados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Pronto para Transformar sua Vida Financeira?
            </h2>
            <p className="text-xl opacity-90">
              Milhares de pessoas já estão gerando renda extra com nossas recomendações. 
              Não perca tempo, comece hoje mesmo!
            </p>
            <CTAButton size="xl" variant="secondary" asChild>
              <Link to="/fabrica-comissoes">
                Começar Agora - Produto Mais Vendido
              </Link>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold text-gradient-cta">Oportunidades Brasil</div>
            <p className="text-muted-foreground">
              Conectando você às melhores oportunidades de renda online do Brasil
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 Oportunidades Brasil. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
