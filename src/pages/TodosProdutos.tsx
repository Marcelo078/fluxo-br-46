import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";

const TodosProdutos = () => {
  const allProducts = [
    {
      title: "Fábrica de Comissões - Deborah Oliveira",
      description: "Método completo para criar uma máquina de vendas online e gerar comissões todos os dias. Estratégias comprovadas de marketing digital e vendas.",
      highlight: "🔥 Mais Vendido",
      ctaText: "Garantir Acesso",
      link: "https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM",
      category: "Marketing Digital",
      slug: "fabrica-comissoes"
    },
    {
      title: "Fórmula Negócio Online - Alex Vargas",
      description: "O curso mais completo do Brasil para quem quer começar do zero no marketing digital. Mais de 10 mil alunos já mudaram de vida.",
      highlight: "✅ #1 Brasil",
      ctaText: "Começar Hoje",
      link: "https://go.hotmart.com/E11195793E",
      category: "Negócios Online",
      slug: "formula-negocio-online"
    },
    {
      title: "Shorts Virais - Conteúdo TikTok",
      description: "Descubra os segredos para criar vídeos que viralizam no TikTok, Instagram Reels e YouTube Shorts. Aumente seu alcance exponencialmente.",
      highlight: "📱 Viral",
      ctaText: "Acessar Método",
      link: "https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky",
      category: "Conteúdo Digital",
      slug: "shorts-virais"
    },
    {
      title: "Influencer Milionário LEGACY",
      description: "Torne-se um influenciador de sucesso e monetize sua audiência. Estratégias avançadas para crescer nas redes sociais e gerar renda.",
      highlight: "💎 Premium",
      ctaText: "Ser Influencer",
      link: "https://kiwify.app/ge9QR3E?afid=alNgRff5",
      category: "Influencer",
      slug: "influencer-milionario"
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
      title: "Readdy IA - Desenvolvimento NoCode",
      description: "Crie aplicações SaaS completas em segundos usando inteligência artificial. Sem código, sem complicação.",
      highlight: "⚡ Rápido",
      ctaText: "Começar Grátis",
      link: "https://readdy.ai/invite/Abq8XgpzJGtX",
      category: "Ferramentas IA",
      slug: "readdy-ia"
    },
    {
      title: "Manus IA - Apps NoCode",
      description: "Desenvolva aplicativos profissionais sem escrever código. Ideal para empreendedores e pequenas empresas.",
      highlight: "💻 NoCode",
      ctaText: "Criar App",
      link: "https://manus.im/invitation/NNBGIDNC6MTV",
      category: "Ferramentas IA",
      slug: "manus-ia"
    },
    {
      title: "Método ADL - Automação Digital",
      description: "Sistema completo de automação para seus negócios digitais. Economize tempo e aumente a produtividade.",
      highlight: "🤖 Auto",
      ctaText: "Automatizar",
      link: "https://kiwify.app/itNNPGK?afid=sczZtkvA",
      category: "Automação",
      slug: "metodo-adl"
    },
    {
      title: "700 Receitas de Bolos",
      description: "Coleção completa com 700 receitas de bolos para você começar seu negócio de confeitaria ou impressionar a família.",
      highlight: "🍰 Doces",
      ctaText: "Ver Receitas",
      link: "https://kiwify.app/Ae5oNZe?afid=eDWLErf4",
      category: "Gastronomia",
      slug: "700-receitas-bolos"
    },
    {
      title: "Super Presell - Pré-Vendas",
      description: "Domine a arte das pré-vendas e venda seus produtos antes mesmo de criá-los. Técnicas avançadas de validação.",
      highlight: "💰 Vendas",
      ctaText: "Dominar Técnica",
      link: "https://kiwify.app/qeDlA3h?afid=6Kybii5i",
      category: "Vendas",
      slug: "super-presell"
    },
    {
      title: "Academia da Riqueza Digital",
      description: "Treinamento completo sobre investimentos digitais, criptomoedas e oportunidades financeiras na era digital.",
      highlight: "📊 Finanças",
      ctaText: "Investir Certo",
      link: "https://kiwify.app/Xoqjz5T?afid=JbfKYymn",
      category: "Investimentos",
      slug: "academia-riqueza"
    },
    {
      title: "Método Delivery de Sucesso",
      description: "Monte seu negócio de delivery e fature alto com restaurantes virtuais. Estratégias para dominar o mercado.",
      highlight: "🍕 Delivery",
      ctaText: "Começar Negócio",
      link: "https://kiwify.app/LPGXVer?afid=Eq7whBMe",
      category: "Negócios",
      slug: "delivery-sucesso"
    }
  ];

  const categories = [
    "Todos",
    "Marketing Digital",
    "Negócios Online",
    "Ferramentas IA",
    "Conteúdo Digital",
    "Vendas",
    "Investimentos"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-6 mb-12">
            <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2">
              🎯 Catálogo Completo 2024
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Todas as <span className="text-gradient-cta">Melhores Oportunidades</span><br />
              em Um Só Lugar
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore nossa seleção completa de cursos, ferramentas e oportunidades testadas e aprovadas. 
              Encontre exatamente o que você precisa para alcançar seus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Não Encontrou o Que Procurava?
            </h2>
            <p className="text-muted-foreground">
              Nossa equipe está sempre buscando as melhores oportunidades do mercado. 
              Entre em contato conosco ou confira nossos produtos mais populares.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" asChild>
                <Link to="/fabrica-comissoes">
                  Ver Mais Vendido
                </Link>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <Link to="/">
                  Voltar ao Início
                </Link>
              </CTAButton>
            </div>
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

export default TodosProdutos;