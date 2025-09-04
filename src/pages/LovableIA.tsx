import Header from "@/components/Header";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const LovableIA = () => {
  const benefits = [
    "✅ Criação de apps sem programar",
    "✅ Interface 100% visual e intuitiva",
    "✅ IA que entende suas necessidades",
    "✅ Deploy automático na nuvem",
    "✅ Templates prontos para usar",
    "✅ Suporte técnico especializado"
  ];

  const features = [
    {
      title: "Interface Visual",
      description: "Crie aplicações complexas usando apenas drag & drop. Sem código, sem complicação."
    },
    {
      title: "IA Integrada",
      description: "Nossa IA entende o que você quer criar e sugere as melhores soluções automaticamente."
    },
    {
      title: "Deploy Instantâneo",
      description: "Publique sua aplicação na web com um clique. Hospedagem gratuita incluída."
    },
    {
      title: "Templates Premium",
      description: "Biblioteca com centenas de templates profissionais para qualquer tipo de negócio."
    }
  ];

  const useCases = [
    {
      title: "E-commerce Completo",
      description: "Crie sua loja online com carrinho, pagamentos e gestão de produtos"
    },
    {
      title: "Landing Pages",
      description: "Desenvolva páginas de vendas otimizadas para conversão máxima"
    },
    {
      title: "Apps Corporativos",
      description: "Sistemas internos, dashboards e ferramentas para sua empresa"
    },
    {
      title: "Portfólios Profissionais",
      description: "Sites pessoais e portfólios que impressionam clientes"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2">
              🤖 INTELIGÊNCIA ARTIFICIAL
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-cta">Lovable IA</span><br />
              Crie Aplicações Profissionais Sem Programar
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A plataforma de <strong>inteligência artificial mais avançada</strong> para criar aplicações web. 
              Do conceito ao deploy em minutos, não em meses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                size="xl" 
                className="text-lg px-10"
                onClick={() => window.open('https://lovable.dev/?via=marcelo-barbosa', '_blank')}
              >
                🚀 COMEÇAR GRATUITAMENTE
              </CTAButton>
              <CTAButton 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://lovable.dev/invite/04d3a1d5-ac6c-4590-be24-e12e5e711a61', '_blank')}
              >
                Link Convite Especial
              </CTAButton>
            </div>
            
            <p className="text-sm text-muted-foreground">
              ⚡ Teste grátis • Sem cartão de crédito • Resultados em minutos
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Cansado de Depender de Programadores?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-destructive/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-destructive mb-4">❌ Problemas Tradicionais:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Precisa contratar desenvolvedores caros</li>
                    <li>• Projetos demoram meses para ficar prontos</li>
                    <li>• Mudanças custam tempo e dinheiro</li>
                    <li>• Dependência técnica constante</li>
                    <li>• Orçamentos que explodem</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-success/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-success mb-4">✅ Com Lovable IA:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Crie sozinho, sem programar</li>
                    <li>• Apps prontos em minutos ou horas</li>
                    <li>• Mudanças instantâneas e gratuitas</li>
                    <li>• Total autonomia e controle</li>
                    <li>• Custo fixo e previsível</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <CTAButton size="lg" onClick={() => window.open('https://lovable.dev/?via=marcelo-barbosa', '_blank')}>
                Resolver Isso Agora
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Recursos Que Fazem a Diferença
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              O Que Você Pode Criar
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <CTAButton size="lg" onClick={() => window.open('https://lovable.dev/?via=marcelo-barbosa', '_blank')}>
                Criar Minha Primeira App
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Por Que Escolher Lovable IA?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-left p-4 rounded-lg bg-card">
                  {benefit}
                </div>
              ))}
            </div>
            
            <CTAButton size="lg" onClick={() => window.open('https://lovable.dev/?via=marcelo-barbosa', '_blank')}>
              Começar Gratuitamente
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              O Que Dizem Nossos Usuários
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-2xl text-primary">⭐⭐⭐⭐⭐</div>
                    <p className="text-sm italic">
                      "Incrível! Criei meu e-commerce em 2 horas. Antes levaria meses e custaria uma fortuna."
                    </p>
                    <div className="text-xs text-muted-foreground">
                      - Empresário Digital
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-2xl text-primary">⭐⭐⭐⭐⭐</div>
                    <p className="text-sm italic">
                      "A IA realmente entende o que eu quero. É como ter um desenvolvedor expert ao meu lado."
                    </p>
                    <div className="text-xs text-muted-foreground">
                      - Consultora de Marketing
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-2xl text-primary">⭐⭐⭐⭐⭐</div>
                    <p className="text-sm italic">
                      "Revolucionou meu negócio. Agora crio landing pages toda semana sem dor de cabeça."
                    </p>
                    <div className="text-xs text-muted-foreground">
                      - Coach Online
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <CTAButton size="lg" onClick={() => window.open('https://lovable.dev/?via=marcelo-barbosa', '_blank')}>
                Ser o Próximo Caso de Sucesso
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Preciso saber programar?</h3>
                  <p className="text-muted-foreground">
                    Não! O Lovable foi criado especificamente para pessoas sem conhecimento técnico criarem aplicações profissionais.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Quanto tempo leva para criar uma app?</h3>
                  <p className="text-muted-foreground">
                    Depende da complexidade, mas aplicações simples ficam prontas em minutos. Apps mais complexas em algumas horas.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">As aplicações são responsivas?</h3>
                  <p className="text-muted-foreground">
                    Sim! Todas as aplicações criadas são automaticamente responsivas e funcionam perfeitamente em celulares e tablets.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Posso personalizar completamente?</h3>
                  <p className="text-muted-foreground">
                    Absolutamente! Você tem controle total sobre design, funcionalidades e comportamento da sua aplicação.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Pare de Sonhar. Comece a Criar!
            </h2>
            <p className="text-xl opacity-90">
              Milhares de empreendedores já estão criando suas aplicações com Lovable IA. 
              <strong> Não perca mais tempo esperando!</strong>
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <div className="text-2xl font-bold mb-2">🎯 OFERTA ESPECIAL:</div>
              <div className="text-lg">Teste grátis por 7 dias + Templates premium inclusos!</div>
            </div>
            
            <CTAButton 
              size="xl" 
              variant="secondary" 
              className="text-xl px-12 py-6"
              onClick={() => window.open('https://lovable.dev/?via=marcelo-barbosa', '_blank')}
            >
              🚀 COMEÇAR GRATUITAMENTE AGORA
            </CTAButton>
            
            <p className="text-sm opacity-75">
              Sem compromisso • Cancele quando quiser • Suporte brasileiro
            </p>
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

export default LovableIA;