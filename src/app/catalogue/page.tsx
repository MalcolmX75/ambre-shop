import Image from "next/image";
import { brand } from "@/config/brand";
import { products, categories } from "@/data/products";
import { FloralSeparator } from "@/components/Decorative";

export const metadata = {
  title: `Catalogue — ${brand.brandName}`,
};

export default function CataloguePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-rosewood-pale to-off-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-rosewood mb-4">
            Notre Catalogue
          </h1>
          <p className="text-rosewoodwood-light text-lg">
            Découvrez notre sélection de cosmétiques premium.
          </p>
        </div>
      </section>

      <FloralSeparator />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {categories.map((category) => {
          const catProducts = products.filter(
            (p) => p.category === category.name
          );
          if (catProducts.length === 0) return null;

          return (
            <div key={category.name} className="mb-12">
              <h2 className="font-serif text-2xl text-rosewood mb-6 flex items-center gap-3">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                {category.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-rosewood-light/20 hover:shadow-md transition-shadow group"
                  >
                    <div className="aspect-square bg-rosewood-pale flex items-center justify-center p-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={280}
                        height={280}
                        className="group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-gold font-medium uppercase tracking-wide">
                        {product.category}
                      </span>
                      <h3 className="font-serif text-lg text-rosewood mt-1 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-rosewood/50 text-sm mb-3 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gold font-bold">
                          {product.price.toLocaleString("fr-FR")} FCFA
                        </span>
                        <a
                          href={`${brand.whatsappLink}&text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par ${product.name}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-colors"
                        >
                          Commander
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="text-center py-8">
          <p className="text-rosewood/50 text-sm mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <a
            href={brand.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-base font-medium transition-colors shadow-md"
          >
            Demandez-nous sur WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
