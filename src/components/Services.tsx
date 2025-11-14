import { Card } from "@/components/ui/card";
import { Key, Users, Home, Shield, Clock, Sparkles } from "lucide-react";

const services = [
  {
    icon: Key,
    title: "Gestion de Clés",
    description: "Remise et récupération sécurisées des clés pour vos locataires et prestataires."
  },
  {
    icon: Users,
    title: "Accueil Personnalisé",
    description: "Accueil chaleureux de vos locataires et organisation de visites sur mesure."
  },
  {
    icon: Home,
    title: "État des Lieux",
    description: "États des lieux d'entrée et sortie détaillés avec rapport photographique complet."
  },
  {
    icon: Shield,
    title: "Surveillance",
    description: "Surveillance régulière de votre bien et gestion des incidents en votre absence."
  },
  {
    icon: Clock,
    title: "Disponibilité 7j/7",
    description: "Service disponible tous les jours pour répondre à vos besoins et urgences."
  },
  {
    icon: Sparkles,
    title: "Conciergerie Premium",
    description: "Services haut de gamme : ménage, livraisons, courses et bien plus encore."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Une gamme complète de services pour une gestion immobilière sans souci
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
