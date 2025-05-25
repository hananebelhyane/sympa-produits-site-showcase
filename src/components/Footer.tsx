import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-12" style={{ backgroundColor: "#A31D1D", color: "#F8F2DE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6" style={{ color: "#D84040" }} />
              <h3 className="text-xl font-bold" style={{ color: "#F8F2DE" }}>BARAKA IDMAN</h3>
            </div>
            <p className="mb-4" style={{ color: "#F8F2DE" }}>
              Une association engagée pour la lutte contre l’addiction et la solidarité au Maroc.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#F8F2DE" }}>Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2" style={{ color: "#F8F2DE" }}>
                <Mail className="h-4 w-4" />
                <span>contact@barakaidman.ma</span>
              </div>
              <div className="flex items-center space-x-2" style={{ color: "#F8F2DE" }}>
                <Phone className="h-4 w-4" />
                <span>05 22 33 44 55</span>
              </div>
              <div className="flex items-center space-x-2" style={{ color: "#F8F2DE" }}>
                <MapPin className="h-4 w-4" />
                <span>Centre de TAddictologie El Mellah, Maroc</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#A31D1D" }}>Nos Valeurs</h4>
            <ul className="space-y-2" style={{ color: "#A31D1D" }}>
              <li>• Solidarité sociale</li>
              <li>• Réinsertion</li>
              <li>• Prévention</li>
              <li>• Accompagnement</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: "#D84040", color: "#F8F2DE" }}>
          <p>&copy; 2024 BARAKA IDMAN. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;