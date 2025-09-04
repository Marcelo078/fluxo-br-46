import Header from "@/components/Header";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const FabricaComissoes = () => {
  const benefits = [
    "✅ Método testado por mais de 5.000 pessoas",
    "✅ Estratégias de marketing digital comprovadas",
    "✅ Sistema automatizado de vendas",
    "✅ Suporte especializado e mentoria",
    "✅ Casos de sucesso reais e documentados",
    "✅ Ferramentas exclusivas incluídas"
  ];

  const modules = [
    {
      title: "Módulo 1: Fundamentos",
      description: "Base sólida para começar no marketing digital com as estratégias certas desde o início."
    },
    {
      title: "Módulo 2: Criação de Produtos",
      description: "Como criar produtos digitais que vendem sozinhos e geram comissões recorrentes."
    },
    {
      title: "Módulo 3: Funis de Vendas",
      description: "Construção de funis otimizados que convertem visitantes em compradores."
    },
    {
      title: "Módulo 4: Tráfego Pago",
      description: "Estratégias avançadas para escalar suas vendas com anúncios lucrativos."
    },
    {
      title: "Módulo 5: Automação",
      description: "Sistema completo para automatizar todo o processo de vendas e follow-up."
    }
  ];

  const testimonials = [
    "'Consegui minha primeira venda em 15 dias seguindo o método da Deborah. Hoje já faturei mais de R$ 50.000!'",
    "'O curso mudou minha vida! Saí do zero e hoje tenho uma renda extra de R$ 8.000 por mês.'",
    "'Método incrível! Em 3 meses já estava faturando mais que meu salário CLT.'"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* SEO-optimized head content would be handled by a meta component */}
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-cta text-cta-foreground text-sm px-4 py-2">
              🔥 PRODUTO MAIS VENDIDO DE 2024
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-cta">Fábrica de Comissões</span><br />
              O Método Que Já Transformou Mais de 5.000 Vidas
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubra como <strong>Deborah Oliveira</strong> criou um sistema que gera comissões todos os dias, 
              mesmo enquanto você dorme. Método 100% comprovado e replicável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                size="xl" 
                className="text-lg px-10"
                onClick={() => window.open('https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM', '_blank')}
              >
                🚀 GARANTIR ACESSO AGORA
              </CTAButton>
              <CTAButton 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://kiwify.app/8Rj75xp?afid=P8U9TjQM', '_blank')}
              >
                Link Alternativo
              </CTAButton>
            </div>
            
            <p className="text-sm text-muted-foreground">
              ⏰ Oferta especial válida apenas hoje!
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Cansado de Trabalhar Muito e Ganhar Pouco?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-destructive/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-destructive mb-4">❌ Problemas Comuns:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Trabalha 8h por dia e não sobra dinheiro</li>
                    <li>• Não sabe como começar na internet</li>
                    <li>• Tentou vários métodos sem sucesso</li>
                    <li>• Falta conhecimento técnico</li>
                    <li>• Não tem tempo para aprender sozinho</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-success/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-success mb-4">✅ Com o Fábrica de Comissões:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Sistema que funciona 24/7 para você</li>
                    <li>• Método passo a passo, sem complicação</li>
                    <li>• Estratégias testadas e aprovadas</li>
                    <li>• Não precisa conhecimento técnico</li>
                    <li>• Suporte completo até você ter resultados</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <CTAButton size="lg" onClick={() => window.open('https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM', '_blank')}>
                Quero Resolver Isso Agora
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              O Que Você Vai Aprender no Fábrica de Comissões
            </h2>
            
            <div className="space-y-6">
              {modules.map((module, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{module.title}</h3>
                        <p className="text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Por Que Escolher o Fábrica de Comissões?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-left p-4 rounded-lg bg-card">
                  {benefit}
                </div>
              ))}
            </div>
            
            <CTAButton size="lg" onClick={() => window.open('https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM', '_blank')}>
              Aproveitar Esta Oferta Agora
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Veja o Que Nossos Alunos Estão Falando
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="text-2xl text-cta">⭐⭐⭐⭐⭐</div>
                      <p className="text-sm italic">{testimonial}</p>
                      <div className="text-xs text-muted-foreground">
                        - Aluno verificado do curso
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <CTAButton size="lg" onClick={() => window.open('https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM', '_blank')}>
                Quero Fazer Parte Deste Sucesso
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Preciso ter experiência prévia?</h3>
                  <p className="text-muted-foreground">
                    Não! O curso foi desenvolvido para iniciantes. Começamos do zero e te levamos até o sucesso.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Quanto tempo para ver resultados?</h3>
                  <p className="text-muted-foreground">
                    Nossos alunos costumam ver as primeiras vendas entre 15 a 30 dias aplicando o método.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Tem garantia?</h3>
                  <p className="text-muted-foreground">
                    Sim! Garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Como funciona o acesso?</h3>
                  <p className="text-muted-foreground">
                    Acesso imediato após a compra. Você recebe login e senha na hora para começar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-cta text-cta-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Não Deixe Esta Oportunidade Passar!
            </h2>
            <p className="text-xl opacity-90">
              Mais de 5.000 pessoas já transformaram suas vidas financeiras com o Fábrica de Comissões. 
              <strong> A próxima pode ser você!</strong>
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <div className="text-2xl font-bold mb-2">⏰ OFERTA ESPECIAL HOJE:</div>
              <div className="text-lg">Desconto exclusivo válido apenas nas próximas horas!</div>
            </div>
            
            <CTAButton 
              size="xl" 
              variant="secondary" 
              className="text-xl px-12 py-6"
              onClick={() => window.open('https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM', '_blank')}
            >
              🚀 SIM! QUERO GARANTIR MEU ACESSO AGORA
            </CTAButton>
            
            <p className="text-sm opacity-75">
              Clique no botão acima e tenha acesso imediato ao curso completo
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

export default FabricaComissoes;