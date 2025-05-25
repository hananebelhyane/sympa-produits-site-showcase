
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      name: "Savons artisanaux",
      description: "Savons naturels fabriqués à la main avec des ingrédients biologiques locaux.",
      price: "8€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "Cosmétiques",
      isNew: true
    },
    {
      name: "Miel de lavande",
      description: "Miel pur récolté dans nos ruches biologiques, parfum délicat de lavande.",
      price: "12€",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      category: "Alimentaire",
    },
    {
      name: "Confitures maison",
      description: "Confitures traditionnelles aux fruits de saison, sans conservateurs.",
      price: "6€",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=300&fit=crop",
      category: "Alimentaire",
    },
    {
      name: "Tissages traditionnels",
      description: "Nappes et sets de table tissés selon les techniques ancestrales.",
      price: "25€",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
      category: "Artisanat",
      isNew: true
    },
    {
      name: "Huile d'olive bio",
      description: "Huile d'olive vierge extra de première pression à froid.",
      price: "15€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "Alimentaire",
    },
    {
      name: "Poteries locales",
      description: "Vaisselle en céramique façonnée par nos artisans locaux.",
      price: "18€",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      category: "Artisanat",
    }
  ];

  return (
    <section id="produits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Produits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chaque produit raconte une histoire et soutient notre mission sociale. 
            Découvrez notre gamme variée d'articles artisanaux et biologiques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
