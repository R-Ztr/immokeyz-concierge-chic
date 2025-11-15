import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Prestations", path: "/prestations" },
    { name: "Tarifs", path: "/tarifs" },
    { name: "Qui sommes-nous", path: "/a-propos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
              <Key className="w-6 h-6 text-gold" />
            </div>
            <span className="font-playfair text-xl font-bold text-foreground">
              Immo<span className="text-gold">Keyz</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className="px-4 py-2 font-inter text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                activeClassName="text-gold font-medium bg-accent"
              >
                {item.name}
              </NavLink>
            ))}
            <Button className="ml-4 bg-gold text-background hover:bg-gold-light">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 font-inter text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                  activeClassName="text-gold font-medium bg-accent"
                >
                  {item.name}
                </NavLink>
              ))}
              <Button className="mx-4 mt-2 bg-gold text-background hover:bg-gold-light">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
