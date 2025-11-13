import { Button } from "@/components/ui/button";

const HeaderWellen = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png" 
              alt="Instituto Areluna" 
              className="h-8 md:h-10 object-contain mr-3" 
            />
          </div>
          
          <div className="flex items-center gap-4">
            <p className="hidden md:block font-vivant-light text-sm text-muted-foreground">
              Sorria com Confiança: Transformação em 24 Horas
            </p>
            <Button 
              variant="premium" 
              size="sm" 
              onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({
                behavior: 'smooth'
              })} 
              className="font-sans font-medium text-sm"
            >
              Quero marcar a minha avaliação
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderWellen;