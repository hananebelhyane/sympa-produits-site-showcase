
import { ShoppingBag, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">Association Solidaire</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </a>
            <a href="#produits" className="text-gray-700 hover:text-blue-600 transition-colors">
              Nos Produits
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
