import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Home, Award } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "500+",
    label: "Propriétés gérées",
    description: "Appartements et maisons de prestige"
  },
  {
    icon: Users,
    value: "1200+",
    label: "Clients satisfaits",
    description: "Propriétaires et locataires"
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Taux de satisfaction",
    description: "Service de qualité supérieure"
  },
  {
    icon: Award,
    value: "5 ans",
    label: "D'expérience",
    description: "Excellence et professionnalisme"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre <span className="text-gold">Excellence</span> en chiffres
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Des résultats qui témoignent de notre engagement et de notre expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-gold/50 transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-gold/10 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="space-y-2">
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-gold group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <h3 className="font-inter text-lg font-semibold text-foreground">
                    {stat.label}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
