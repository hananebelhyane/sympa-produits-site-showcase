const AboutSection = () => {
  
  const whatsappNumber = "0703777808";
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite soutenir BARAKA IDMAN."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="a-propos" className="py-16" style={{ backgroundColor: '#F8F2DE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#A31D1D] mb-6">
            À propos de notre Association
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#A31D1D] mb-4">
              Parrainer un atelier
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              L'association nationale <strong>BARAKA IDMAN-Stop Drogue</strong> est une organisation volontaire opérant sur l'ensemble du territoire marocain. Son but principal est de lutter contre le fléau de l’addiction aux drogues, considérée comme une cause majeure de criminalité, de maladies chroniques, de vulnérabilités, et d'accidents de la route.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Le rôle de l'association inclut l'orientation et la sensibilisation, la prévention, l'accompagnement, et la réinsertion socio-économique des individus touchés par l'addiction.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Le siège de BARAKA IDMAN se trouve au Centre de TAddictologie El Mellah, un établissement créé par Sa Majesté le Roi Mohamed VI sous les auspices de la Fondation Mohamed V pour la Solidarité, en coordination avec le Ministère de la santé.
            </p>
            <h3 className="text-2xl font-semibold text-[#A31D1D] mb-4">
              Notre mission
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              BARAKA IDMAN contribue à la mise en œuvre de programmes de sensibilisation, d'accompagnement, et d'intégration par le biais d'ateliers parallèles, de séances intensives et collectives, ainsi que d'activités sportives, culturelles et sociales.
            </p>
          </div>
          
          <div className="rounded-lg p-8" style={{ backgroundColor: '#D84040' }}>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Comment aider ?
            </h3>
            <p className="text-white mb-6">
              Vous souhaitez soutenir notre action ? Plusieurs moyens s'offrent à vous :
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white border border-[#A31D1D] text-[#A31D1D] font-semibold py-2 px-4 rounded hover:bg-[#F8F2DE] transition"
              >
                Acheter un produit
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white border border-[#A31D1D] text-[#A31D1D] font-semibold py-2 px-4 rounded hover:bg-[#F8F2DE] transition"
              >
                Faire un don
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white border border-[#A31D1D] text-[#A31D1D] font-semibold py-2 px-4 rounded hover:bg-[#F8F2DE] transition"
              >
                Devenir partenaire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;