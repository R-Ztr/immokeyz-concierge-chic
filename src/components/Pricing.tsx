import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Essentiel",
    price: "À partir de 150€",
    period: "/mois",
    description: "Idéal pour les propriétaires occasionnels",
    features: [
      "Gestion des clés",
      "États des lieux",
      "Visites guidées",
      "Support par email",
      "Rapport mensuel"
    ]
  },
  {
    name: "Premium",
    price: "À partir de 350€",
    period: "/mois",
    description: "Pour une gestion complète et sereine",
    features: [
      "Tous les services Essentiel",
      "Surveillance hebdomadaire",
      "Gestion des prestataires",
      "Service conciergerie",
      "Support prioritaire 7j/7",
      "Rapports détaillés"
    ],
    featured: true
  },
  {
    name: "Excellence",
    price: "Sur mesure",
    period: "",
    description: "Service exclusif et personnalisé",
    features: [
      "Tous les services Premium",
      "Gestionnaire dédié",
      "Services sur-mesure",
      "Disponibilité 24h/24",
      "Conciergerie de luxe",
      "Accompagnement VIP"
    ]
  }
];

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tarifs" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos <span className="text-primary">Tarifs</span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Des formules adaptées à tous vos besoins en gestion immobilière
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl ${
                plan.featured ? 'ring-2 ring-primary scale-105 hover:scale-110' : 'hover:scale-105'
              }`}
            >
              {plan.featured && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full w-fit mx-auto mb-4">
                  POPULAIRE
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="font-playfair text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="font-inter text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-inter text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={scrollToContact}
                className={`w-full font-inter font-semibold ${
                  plan.featured 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                Demander un devis
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-inter text-sm mt-12">
          * Tarifs indicatifs. Devis personnalisé selon vos besoins et la localisation du bien.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
