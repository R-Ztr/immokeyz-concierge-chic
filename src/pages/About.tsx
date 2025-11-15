import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Heart, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Une équipe disponible et réactive pour répondre à tous vos besoins avec professionnalisme."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Nous aimons ce que nous faisons et mettons tout notre cœur dans chaque service."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Des standards de qualité élevés pour une expérience client irréprochable."
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Une relation de confiance basée sur l'écoute et la personnalisation de nos services."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-slide-up">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
                Qui sommes-<span className="text-gold">nous</span> ?
              </h1>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
                ImmoKeyz est née de la volonté de révolutionner la gestion immobilière en offrant 
                des services de conciergerie haut de gamme, alliant technologie et service personnalisé.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-8 text-center">
                Notre <span className="text-gold">Histoire</span>
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Fondée en 2024, ImmoKeyz s'est rapidement imposée comme un acteur incontournable 
                  de la conciergerie immobilière. Notre mission : simplifier la vie des propriétaires 
                  et offrir une expérience exceptionnelle aux locataires.
                </p>
                <p className="leading-relaxed">
                  Avec une équipe passionnée et expérimentée, nous gérons chaque aspect de votre bien 
                  immobilier avec le plus grand soin. De la remise de clés à la coordination des 
                  prestations, nous sommes votre partenaire de confiance.
                </p>
                <p className="leading-relaxed">
                  Notre approche combine innovation technologique et touche humaine pour garantir 
                  une gestion optimale de votre patrimoine immobilier, où que vous soyez.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-12 text-center">
              Nos <span className="text-gold">Valeurs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                      <value.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-8">
                Notre <span className="text-gold">Équipe</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Une équipe dynamique et qualifiée, disponible 7j/7 pour vous offrir un service 
                d'exception. Chaque membre de notre équipe est formé aux meilleures pratiques 
                de la conciergerie et partage notre engagement envers l'excellence.
              </p>
              <div className="inline-block p-8 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl border border-gold/20">
                <p className="font-playfair text-2xl text-gold font-semibold mb-2">
                  Plus de 500 propriétés gérées
                </p>
                <p className="text-muted-foreground">
                  avec un taux de satisfaction de 98%
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
