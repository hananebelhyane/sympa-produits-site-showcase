
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold">Association Solidaire</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Une association engagée pour le développement durable et l'économie solidaire.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>contact@association-solidaire.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>123 Rue de la Solidarité, 75000 Paris</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Nos Valeurs</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Commerce équitable</li>
              <li>• Production locale</li>
              <li>• Développement durable</li>
              <li>• Solidarité sociale</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Association Solidaire. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
