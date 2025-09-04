import Header from "@/components/Header";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const FormulaNegocioOnline = () => {
  const benefits = [
    "✅ Mais de 10.000 alunos aprovados",
    "✅ Método Alex Vargas comprovado",
    "✅ Do zero ao primeiro faturamento",
    "✅ Comunidade exclusiva de alunos",
    "✅ Suporte direto do Alex Vargas",
    "✅ Atualizações constantes do conteúdo"
  ];

  const modules = [
    {
      title: "Fundação do Negócio",
      description: "Como estruturar seu negócio online desde o zero, escolhendo o nicho certo e definindo sua estratégia."
    },
    {
      title: "Criação de Produtos",
      description: "Passo a passo para criar produtos digitais que realmente vendem e geram valor para o mercado."
    },
    {
      title: "Marketing Digital",
      description: "Estratégias completas de marketing digital, desde orgânico até tráfego pago avançado."
    },
    {
      title: "Vendas Online",
      description: "Técnicas de vendas que convertem visitantes em compradores fiéis e recorrentes."
    },
    {
      title: "Escala e Automação",
      description: "Como escalar seu negócio e automatizar processos para trabalhar menos e ganhar mais."
    }
  ];

  const testimonials = [
    "Saí do zero e hoje faturo R$ 50.000/mês seguindo o FNO do Alex Vargas!",
    "O curso mudou minha vida! Em 6 meses já tinha meu próprio negócio lucrativo.",
    "Alex Vargas é referência no Brasil. O FNO é o curso mais completo que já fiz."
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-success text-secondary-foreground text-sm px-4 py-2">
              ⭐ CURSO #1 DO BRASIL
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-cta">Fórmula Negócio Online</span><br />
              O Curso Que Já Transformou Mais de 10.000 Vidas
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aprenda com <strong>Alex Vargas</strong>, o maior especialista em negócios online do Brasil. 
              Do zero ao seu primeiro faturamento de 6 dígitos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                size="xl" 
                className="text-lg px-10"
                onClick={() => window.open('https://go.hotmart.com/E11195793E', '_blank')}
              >
                🚀 QUERO COMEÇAR HOJE
              </CTAButton>
              <CTAButton 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://go.hotmart.com/E11195793E?ap=305a', '_blank')}
              >
                Link Alternativo
              </CTAButton>
            </div>
            
            <p className="text-sm text-muted-foreground">
              ⏰ Transforme sua vida financeira em 2024!
            </p>
          </div>
        </div>
      </section>

      {/* About Alex Vargas */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Quem é Alex Vargas?
            </h2>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">O Maior Especialista em Negócios Online do Brasil</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Mais de 10 anos de experiência no mercado digital</li>
                      <li>• Faturamento de mais de R$ 100 milhões</li>
                      <li>• Palestrante internacional reconhecido</li>
                      <li>• Mentor de grandes empresários digitais</li>
                      <li>• Criador dos maiores sucessos do marketing digital</li>
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-2">10.000+</div>
                    <p className="text-sm text-muted-foreground">Alunos transformados</p>
                    <div className="text-2xl font-bold text-primary mb-2 mt-4">R$ 100Mi+</div>
                    <p className="text-sm text-muted-foreground">Faturamento gerado</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <CTAButton size="lg" onClick={() => window.open('https://go.hotmart.com/E11195793E', '_blank')}>
                Quero Aprender com o Alex
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              O Que Você Vai Aprender no FNO
            </h2>
            
            <div className="space-y-6">
              {modules.map((module, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-success text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
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
              Por Que Escolher o Fórmula Negócio Online?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-left p-4 rounded-lg bg-card">
                  {benefit}
                </div>
              ))}
            </div>
            
            <CTAButton size="lg" onClick={() => window.open('https://go.hotmart.com/E11195793E', '_blank')}>
              Garantir Minha Vaga Hoje
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Sucessos Reais dos Alunos do FNO
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="text-2xl text-success">⭐⭐⭐⭐⭐</div>
                      <p className="text-sm italic">"{testimonial}"</p>
                      <div className="text-xs text-muted-foreground">
                        - Aluno certificado FNO
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <CTAButton size="lg" onClick={() => window.open('https://go.hotmart.com/E11195793E', '_blank')}>
                Quero Ser o Próximo Caso de Sucesso
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
                  <h3 className="font-semibold mb-2">O curso é indicado para iniciantes?</h3>
                  <p className="text-muted-foreground">
                    Sim! O FNO foi criado especialmente para quem está começando do zero no mundo digital.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Preciso investir dinheiro além do curso?</h3>
                  <p className="text-muted-foreground">
                    Não necessariamente. O Alex ensina estratégias orgânicas que você pode começar sem investimento.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Quanto tempo para ver resultados?</h3>
                  <p className="text-muted-foreground">
                    Seguindo o método corretamente, muitos alunos veem resultados em 30 a 60 dias.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Tem garantia?</h3>
                  <p className="text-muted-foreground">
                    Sim! Garantia incondicional de 7 dias. Não gostou? Devolução integral.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-success text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Sua Oportunidade de Ouro Está Aqui!
            </h2>
            <p className="text-xl opacity-90">
              Mais de 10.000 pessoas já mudaram de vida com o Fórmula Negócio Online. 
              <strong> Não perca a sua chance!</strong>
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <div className="text-2xl font-bold mb-2">🎯 MÉTODO COMPROVADO:</div>
              <div className="text-lg">O único curso que você precisa para começar online!</div>
            </div>
            
            <CTAButton 
              size="xl" 
              variant="secondary" 
              className="text-xl px-12 py-6"
              onClick={() => window.open('https://go.hotmart.com/E11195793E', '_blank')}
            >
              🚀 QUERO TRANSFORMAR MINHA VIDA HOJE
            </CTAButton>
            
            <p className="text-sm opacity-75">
              Clique no botão acima e comece sua jornada de sucesso agora mesmo
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

export default FormulaNegocioOnline;