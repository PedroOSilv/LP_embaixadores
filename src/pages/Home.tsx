import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const landingPages = [
    {
      title: "Implantes",
      description: "All-on-Four em 24 horas - Transformação completa do seu sorriso",
      route: "/implantes",
      color: "bg-gradient-gold",
      image: "/lovable-uploads/5f1768e0-9a30-4776-b411-edcb0647dcb0.png"
    },
    {
      title: "Alinhadores",
      description: "Aparelhos invisíveis e tratamentos ortodônticos modernos",
      route: "/alinhadores",
      color: "bg-gradient-marble",
      image: "/lovable-uploads/f2b60de3-27a0-43a3-a369-f08574b2ff15.png"
    },
    {
      title: "Facetas",
      description: "Lentes de contato dental e clareamento profissional",
      route: "/facetas",
      color: "bg-gradient-gold",
      image: "/lovable-uploads/80637e89-4cd3-4470-b129-80075f2fc376.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-marble">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center h-16 md:h-20">
            <img 
              src="/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png" 
              alt="Instituto Areluna" 
              className="h-8 md:h-10 object-contain" 
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <section className="text-center py-16 md:py-24">
            <h1 className="font-vivant-black text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6">
              Instituto{" "}
              <span className="text-transparent bg-gradient-gold bg-clip-text">
                Areluna
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Especialistas em transformações dentárias com tecnologia de ponta e atendimento humanizado
            </p>
          </section>

          {/* Services Grid */}
          <section className="max-w-6xl mx-auto">
            <h2 className="font-vivant-black text-2xl md:text-3xl font-medium text-center text-foreground mb-12">
              Nossos Serviços
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {landingPages.map((page, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-gold transition-all duration-300 cursor-pointer border-primary/20 hover:border-primary/40"
                  onClick={() => navigate(page.route)}
                >
                <CardHeader className="pb-4">
                  <div className={`w-full aspect-square rounded-lg ${page.color} mb-4 flex items-center justify-center overflow-hidden`}>
                    {page.image ? (
                      <img 
                        src={page.image} 
                        alt={page.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-white text-4xl font-bold">
                        {page.title.charAt(0)}
                      </div>
                    )}
                  </div>
                    <CardTitle className="text-xl font-vivant-black group-hover:text-primary transition-colors">
                      {page.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-6">
                      {page.description}
                    </CardDescription>
                    <Button 
                      variant="premium" 
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(page.route);
                      }}
                    >
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-vivant-black text-2xl md:text-3xl font-medium text-foreground mb-6">
                Pronto para transformar seu sorriso?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Entre em contato conosco e descubra qual tratamento é ideal para você
              </p>
              <Button 
                variant="premium" 
                size="lg"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;