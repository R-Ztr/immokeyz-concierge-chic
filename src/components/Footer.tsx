const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-2">Immokeyz</h3>
            <p className="font-inter text-sm text-muted-foreground">
              Conciergerie Immobilière de Prestige
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="font-inter text-sm text-muted-foreground">
              © {new Date().getFullYear()} Immokeyz. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
