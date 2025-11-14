import { Card } from "@/components/ui/card";
import { ClipboardCheck, Package, Wrench, Calendar, Bell, FileText } from "lucide-react";

const prestations = [
  {
    icon: ClipboardCheck,
    title: "États des lieux professionnels",
    items: [
      "Inspection complète du bien",
      "Rapport photographique détaillé",
      "Documentation juridique conforme",
      "Remise en main propre aux parties"
    ]
  },
  {
    icon: Package,
    title: "Gestion des livraisons",
    items: [
      "Réception de colis et courriers",
      "Coordination avec les livreurs",
      "Stockage temporaire sécurisé",
      "Notification en temps réel"
    ]
  },
  {
    icon: Wrench,
    title: "Coordination des travaux",
    items: [
      "Recherche de prestataires qualifiés",
      "Planification des interventions",
      "Supervision sur site",
      "Validation des travaux réalisés"
    ]
  },
  {
    icon: Calendar,
    title: "Planning personnalisé",
    items: [
      "Organisation des visites",
      "Coordination des rendez-vous",
      "Gestion de l'agenda du bien",
      "Rappels automatiques"
    ]
  },
  {
    icon: Bell,
    title: "Veille et alertes",
    items: [
      "Inspection régulière du bien",
      "Détection des anomalies",
      "Alertes immédiates",
      "Intervention d'urgence si besoin"
    ]
  },
  {
    icon: FileText,
    title: "Rapports détaillés",
    items: [
      "Compte-rendu mensuel complet",
      "Suivi financier transparent",
      "Historique des interventions",
      "Documentation photographique"
    ]
  }
];

const Prestations = () => {
  return (
    <section id="prestations" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos <span className="text-primary">Prestations</span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Un accompagnement complet pour une gestion immobilière d'excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prestations.map((prestation, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <prestation.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground pt-2">
                  {prestation.title}
                </h3>
              </div>
              
              <ul className="space-y-2 ml-2">
                {prestation.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-inter text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prestations;
