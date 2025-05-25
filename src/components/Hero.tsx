
const Hero = () => {
  return (
    <section id="accueil" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Des produits avec du 
            <span className="text-blue-600"> cœur</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez notre sélection de produits artisanaux et équitables, 
            créés avec passion par les membres de notre association pour soutenir des causes qui nous tiennent à cœur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
