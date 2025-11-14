import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simuler l'envoi du formulaire
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Réinitialiser le formulaire
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-<span className="text-primary">nous</span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Une question ? Un projet ? Parlons-en ensemble
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Immokeyz
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed mb-8">
                Notre équipe est à votre disposition pour discuter de vos besoins en gestion 
                immobilière et vous proposer une solution sur mesure.
              </p>
            </div>

            <Card className="p-6 bg-card border-border space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:contact@immokeyz.fr" className="font-inter text-primary hover:underline">
                    contact@immokeyz.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-foreground mb-1">Téléphone</h4>
                  <a href="tel:+33123456789" className="font-inter text-primary hover:underline">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-foreground mb-1">Adresse</h4>
                  <p className="font-inter text-muted-foreground">
                    Paris & Île-de-France
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Nom complet *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jean Dupont"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jean.dupont@exemple.fr"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+33 6 12 34 56 78"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Parlez-nous de votre projet..."
                  className="bg-background border-border min-h-[150px]"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-semibold"
              >
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
