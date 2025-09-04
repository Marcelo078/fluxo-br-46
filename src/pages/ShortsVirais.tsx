import Header from "@/components/Header";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ShortsVirais = () => {
  const benefits = [
    "✅ Estratégias comprovadas para viral",
    "✅ Técnicas para TikTok, Instagram e YouTube",
    "✅ Scripts prontos para usar",
    "✅ Análise de trends em tempo real",
    "✅ Método para engajamento máximo",
    "✅ Monetização através de views"
  ];

  const platforms = [
    {
      name: "TikTok",
      description: "Domine o algoritmo do TikTok e crie conteúdos que explodem em visualizações"
    },
    {
      name: "Instagram Reels",
      description: "Estratégias específicas para maximizar alcance nos Reels do Instagram"
    },
    {
      name: "YouTube Shorts",
      description: "Aproveite o poder dos Shorts para crescer no YouTube rapidamente"
    }
  ];

  const modules = [
    {
      title: "Fundamentos dos Shorts",
      description: "Teoria e prática: entenda como funcionam os algoritmos e o que faz um vídeo viralizar."
    },
    {
      title: "Criação de Conteúdo",
      description: "Técnicas profissionais para criar vídeos atrativos mesmo com recursos limitados."
    },
    {
      title: "Edição e Efeitos",
      description: "Ferramentas gratuitas e pagas para editar seus vídeos como um profissional."
    },
    {
      title: "Estratégias de Postagem",
      description: "Quando, como e onde postar para maximizar visualizações e engajamento."
    },
    {
      title: "Monetização",
      description: "Como transformar visualizações em dinheiro através de várias estratégias comprovadas."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2">
              📱 CONTEÚDO VIRAL
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-cta">Shorts Virais</span><br />
              Domine o Algoritmo e Crie Conteúdo que Explode
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aprenda as estratégias secretas para criar vídeos que <strong>viralizam no TikTok, Instagram Reels e YouTube Shorts</strong>. 
              Método testado por criadores que já alcançaram milhões de visualizações.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                size="xl" 
                className="text-lg px-10"
                onClick={() => window.open('https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky', '_blank')}
              >
                🚀 CRIAR CONTEÚDO VIRAL
              </CTAButton>
              <CTAButton 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://kiwify.app/obq34JI?afid=HqmgdEky', '_blank')}
              >
                Link Alternativo
              </CTAButton>
            </div>
            
            <p className="text-sm text-muted-foreground">
              ⏰ Comece a viralizar hoje mesmo!
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Domine Todas as Principais Plataformas
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {platforms.map((platform, index) => (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <CTAButton size="lg" onClick={() => window.open('https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky', '_blank')}>
                Dominar Todas as Plataformas
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Cansado de Postar e Não Ter Visualizações?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-destructive/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-destructive mb-4">❌ Problemas Comuns:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Vídeos com poucas visualizações</li>
                    <li>• Não sabe como engajar a audiência</li>
                    <li>• Conteúdo não viraliza</li>
                    <li>• Algoritmo não favorece seus posts</li>
                    <li>• Falta de ideias criativas</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-success/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-success mb-4">✅ Com Shorts Virais:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Vídeos com milhares de views</li>
                    <li>• Engajamento máximo garantido</li>
                    <li>• Conteúdo que o algoritmo ama</li>
                    <li>• Crescimento orgânico acelerado</li>
                    <li>• Banco de ideias infinito</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <CTAButton size="lg" onClick={() => window.open('https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky', '_blank')}>
                Resolver Isso Agora
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              O Que Você Vai Aprender
            </h2>
            
            <div className="space-y-6">
              {modules.map((module, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
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
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Por Que Escolher o Shorts Virais?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-left p-4 rounded-lg bg-card">
                  {benefit}
                </div>
              ))}
            </div>
            
            <CTAButton size="lg" onClick={() => window.open('https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky', '_blank')}>
              Começar a Viralizar Hoje
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Resultados Que Você Pode Esperar
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">1M+</div>
                  <h3 className="font-semibold mb-2">Visualizações</h3>
                  <p className="text-sm text-muted-foreground">
                    Alcance milhões de pessoas com seus vídeos
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10x</div>
                  <h3 className="font-semibold mb-2">Mais Engajamento</h3>
                  <p className="text-sm text-muted-foreground">
                    Aumente drasticamente likes, comments e shares
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100k+</div>
                  <h3 className="font-semibold mb-2">Novos Seguidores</h3>
                  <p className="text-sm text-muted-foreground">
                    Cresça sua audiência exponencialmente
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <CTAButton size="lg" onClick={() => window.open('https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky', '_blank')}>
              Quero Estes Resultados
            </CTAButton>
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
                  <h3 className="font-semibold mb-2">Funciona para todas as idades?</h3>
                  <p className="text-muted-foreground">
                    Sim! As estratégias funcionam independente da idade. O importante é aplicar as técnicas corretamente.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Preciso aparecer nos vídeos?</h3>
                  <p className="text-muted-foreground">
                    Não necessariamente! Ensinamos várias técnicas para criar conteúdo viral sem aparecer.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Quanto tempo para viralizar?</h3>
                  <p className="text-muted-foreground">
                    Aplicando as técnicas, muitos alunos conseguem seus primeiros virais em 7 a 14 dias.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Funciona em qualquer nicho?</h3>
                  <p className="text-muted-foreground">
                    Sim! As estratégias são universais e adaptáveis para qualquer nicho ou área de interesse.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-premium text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Seja o Próximo a Viralizar!
            </h2>
            <p className="text-xl opacity-90">
              Milhares de criadores já estão usando nossas estratégias para alcançar milhões de pessoas. 
              <strong> Não fique para trás!</strong>
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <div className="text-2xl font-bold mb-2">🎯 GARANTIA ESPECIAL:</div>
              <div className="text-lg">Se não viralizar em 30 dias, devolvemos seu dinheiro!</div>
            </div>
            
            <CTAButton 
              size="xl" 
              variant="secondary" 
              className="text-xl px-12 py-6"
              onClick={() => window.open('https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky', '_blank')}
            >
              🚀 QUERO VIRALIZAR AGORA
            </CTAButton>
            
            <p className="text-sm opacity-75">
              Acesso imediato + Bônus exclusivos por tempo limitado
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

export default ShortsVirais;