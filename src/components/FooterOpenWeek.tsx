const FooterOpenWeek = () => {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contactos */}
          <div>
            {/* Logo above Contactos */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png" 
                alt="Instituto Areluna" 
                className="h-10 md:h-12 object-contain"
              />
            </div>
            
            <h3 className="font-vivant-medium text-xl font-medium mb-6 text-primary">
              Contactos
            </h3>
            <div className="space-y-4 text-white/80">
              <div>
                <p className="font-medium">📍 Localização</p>
                <p className="text-sm">Rua de Júlio Dinis 194 R/C, 4050-024 Porto</p>
              </div>
              
              <div>
                <p className="font-medium">📞 Telefones</p>
                <p className="text-sm">+351 916 880 692 | +351 916 880 673</p>
                <p className="text-xs text-white/60">* Custo de chamada para rede fixa ou rede móvel nacional</p>
              </div>
            </div>
          </div>

          {/* Informações Regulamentares e CTA */}
          <div>
            <div className="mb-6">
              <h3 className="font-vivant-medium text-xl font-medium mb-4 text-primary">
                Entidade Reguladora da Saúde
              </h3>
              <div className="text-white/70 text-sm space-y-2">
                <p>Nº de Registo na ERS – E161637</p>
                <p>Nº da licença de funcionamento – 21593/2022</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="font-vivant-medium text-lg font-medium mb-4 text-primary">
                Aproveite a Open Week!
              </h3>
              <button
                onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-gold hover:bg-gradient-gold/90 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Quero agendar meu rastreio gratuito
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
            <p>&copy; 2024 Instituto Areluna. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOpenWeek;