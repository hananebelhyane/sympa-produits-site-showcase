
const AboutSection = () => {
  return (
    <section id="a-propos" className="py-16" style={{ backgroundColor: '#FFF2EB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            À propos de notre Association
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Notre Mission
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              L'Association Solidaire œuvre depuis plus de 10 ans pour promouvoir 
              le commerce équitable et l'artisanat local. Nous soutenons les producteurs 
              et artisans de notre région en leur offrant une plateforme pour valoriser 
              leur savoir-faire traditionnel.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Nos Engagements
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#FFDCDC' }}></span>
                Soutenir l'économie locale et les circuits courts
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#FFDCDC' }}></span>
                Promouvoir des pratiques écologiques et durables
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#FFDCDC' }}></span>
                Préserver les savoir-faire artisanaux traditionnels
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#FFDCDC' }}></span>
                Créer du lien social au sein de notre communauté
              </li>
            </ul>
          </div>
          
          <div className="rounded-lg p-8" style={{ backgroundColor: '#FFDCDC' }}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Rejoignez-nous !
            </h3>
            <p className="text-gray-700 mb-6">
              Que vous soyez artisan, producteur ou simplement passionné par 
              les valeurs du commerce équitable, notre association vous accueille 
              à bras ouverts. Ensemble, construisons un avenir plus solidaire.
            </p>
            
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <strong>Adhésion annuelle :</strong> 20€
              </div>
              <div className="text-sm text-gray-600">
                <strong>Ateliers mensuels :</strong> Gratuits pour les membres
              </div>
              <div className="text-sm text-gray-600">
                <strong>Marchés solidaires :</strong> Tous les samedis matin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
