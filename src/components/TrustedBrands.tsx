import { Star } from "lucide-react";

const brands = [
  "Airbnb", "Booking.com", "Abritel", "Expedia", "HomeAway", 
  "TripAdvisor", "Vrbo", "Hotels.com", "Agoda", "Hostelworld"
];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-gold fill-gold" />
            <Star className="w-5 h-5 text-gold fill-gold" />
            <Star className="w-5 h-5 text-gold fill-gold" />
            <Star className="w-5 h-5 text-gold fill-gold" />
            <Star className="w-5 h-5 text-gold fill-gold" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">
            Ils nous font <span className="text-gold">confiance</span>
          </h2>
          <p className="font-inter text-muted-foreground">
            Partenaire officiel des plus grandes plateformes de location
          </p>
        </div>

        {/* Infinite scroll logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="px-8 py-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-gold/50 transition-all duration-300 group">
                  <span className="font-inter text-lg font-semibold text-muted-foreground group-hover:text-gold transition-colors whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
            <span className="font-inter text-sm font-medium text-gold">Service 7j/7</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
            <span className="font-inter text-sm font-medium text-gold">Réponse sous 2h</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
            <span className="font-inter text-sm font-medium text-gold">+500 biens gérés</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
