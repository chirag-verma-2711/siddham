import { CheckCircle2 } from 'lucide-react';
import masalaDabbaImg from 'figma:asset/6MasalaBowls_silver.webp';
import dryFruitDabbaImg from 'figma:asset/9addbddb2954fb069acf287e8265005d4f3557ce.png';
import squareCanisterImg from 'figma:asset/94039e0715ada18c250d12be5241df6434324f58.png';
import roundTiffinImg from 'figma:asset/fb40f4553e53d7ed0cb4e22c1998041d5226b73b.png';
import squareTiffinImg from 'figma:asset/97ccf64244679b25415f338d4bdde58cb18e000b.png';
import poojaSilverBoxImg from 'figma:asset/PoojaSilverBox.webp';
import tiffinKingDuoImg from 'figma:asset/fc105f95e8e33c113708e478efd14f226115501e.png';
import tiffinKingTrioImg from 'figma:asset/72fd3216672b3f71fb1ba3533a68e60262886a6b.png';
import swaad3DMasalaDabbaImg from 'figma:asset/533557484b5de1a2757a6da45041ce1ef8dea154.png';
import celebration3DDryFruitImg from 'figma:asset/43ca7df0df32d72680a9aa14e61ddbf303836314.png';
import premiumMasalaDabbaImg from 'figma:asset/fourCompartment_glass.jpg';
import premiumMasalaDabbaImgsilver from 'figma:asset/fourCompartment_silver.jpg';
import sindoorMasalaDabba9BowlImg from 'figma:asset/9940d9157251b62be37c770d8620ca1f0d850ad1.png';
import nineMasalaBowls from 'figma:asset/nineMasalaBowls.webp';
import sixMasalaBowls from 'figma:asset/sixMasalaBowls.jpg';

export function ProductsSection() {
  const products = [
    {
      name: 'Sindoor Masala Dabba',
      image: masalaDabbaImg,
      details: '6 Masala Bowls & 1 Masala Spoon',
      size: '23.3×15.7×6 cm / 1250 ml',
      highlights: [
        'Premium Quality Stainless Steel',
        'Mirror Finish - Lustrous Appearance',
        'Multi Purpose Dabba',
        '100% Odourless & Hygienic'
      ]
    },
    {
      name: 'Sindoor Masala Dabba',
      image: sixMasalaBowls,
      details: '6 Masala Bowls & 1 Masala Spoon',
      size: '23.3×15.7×6 cm / 1250 ml',
      highlights: [
        'Premium Quality Stainless Steel',
        'Mirror Finish - Lustrous Appearance',
        'Multi Purpose Dabba',
        '100% Odourless & Hygienic'
      ]
    },
    {
      name: 'Sindoor Masala Dabba',
      image: sindoorMasalaDabba9BowlImg,
      details: '9 Masala Bowls & 1 Masala Spoon',
      size: '23.0×23.0×6.5 cm / 1900 ml',
      highlights: [
        'Premium Quality Stainless Steel',
        'Mirror Finish - Lustrous Appearance',
        'Multi Purpose Dabba',
        '100% Odourless & Hygienic'
      ]
    },
    {
      name: 'Sindoor Masala Dabba',
      image: nineMasalaBowls,
      details: '9 Masala Bowls & 1 Masala Spoon',
      size: '23.0×23.0×6.5 cm / 1900 ml',
      highlights: [
        'Premium Quality Stainless Steel',
        'Mirror Finish - Lustrous Appearance',
        'Multi Purpose Dabba',
        '100% Odourless & Hygienic'
      ]
    },
    {
      name: 'Swaad 3D Masala Dabba',
      image: swaad3DMasalaDabbaImg,
      details: '9 Compartment Masala Organizer',
      size: '23.0×23.0×6.5 cm / 1900 ml',
      highlights: [
        'Premium Quality Stainless Steel',
        '9 Individual Compartments',
        'Unique 3D Design',
        'Perfect for Complete Spice Collection'
      ]
    },
    {
      name: 'Premium Masala Dabba',
      image: premiumMasalaDabbaImg,
      details: '4 Compartment Spice Container with Lid',
      size: '20.0×20.0×6.5 cm / 1500 ml',
      highlights: [
        'Premium Mirror Finish Stainless Steel',
        'Airtight Transparent Lid',
        '4 Deep Compartments',
        'Elegant Modern Design'
      ]
    },
    {
      name: 'Premium Masala Dabba',
      image: premiumMasalaDabbaImgsilver,
      details: '4 Compartment Spice Container with Lid',
      size: '20.0×20.0×6.5 cm / 1500 ml',
      highlights: [
        'Premium Mirror Finish Stainless Steel',
        'Airtight Transparent Lid',
        '4 Deep Compartments',
        'Elegant Modern Design'
      ]
    },
    {
      name: 'Sindoor Dry Fruit Dabba',
      image: dryFruitDabbaImg,
      details: '1 Set with 4 Bowls',
      size: '23.0×23.0×6.5 cm / 1900 ml',
      highlights: [
        'Premium Quality Stainless Steel',
        'Mirror Finish - Lustrous Appearance',
        'Multi Purpose Dabba',
        '100% Odourless & Hygienic'
      ]
    },
    {
      name: 'Celebration 3D Dry Fruit Dabba',
      image: celebration3DDryFruitImg,
      details: '4 Compartment Premium Dry Fruit Storage',
      size: '23.0×23.0×6.5 cm / 1900 ml',
      highlights: [
        'Premium Quality Stainless Steel',
        'Unique 3D Compartment Design',
        'Mirror Finish - Premium Look',
        'Perfect for Gifting & Serving'
      ]
    },
    {
      name: 'Tiffin King Duo',
      image: tiffinKingDuoImg,
      details: '2 Tier Lunch Box with Carry Bag',
      size: '9.5×9.5×10.5 cm / 800 ml',
      highlights: [
        'Premium Stainless Steel',
        'Leak-Proof Design',
        'Includes Premium Carry Bag',
        'Perfect for Travel & Office'
      ]
    },
    {
      name: 'Tiffin King Trio',
      image: tiffinKingTrioImg,
      details: '3 Tier Lunch Box with Carry Bag',
      size: '9.5×9.5×15.5 cm / 1200 ml',
      highlights: [
        'Premium Stainless Steel',
        'Leak-Proof Design',
        'Includes Premium Carry Bag',
        'Perfect for Family Meals'
      ]
    },
    {
      name: 'Round Tiffin',
      image: roundTiffinImg,
      details: 'Available in 3 sizes',
      size: 'Small 300ml | Medium 400ml | Big 600ml',
      highlights: [
        'Premium Quality Stainless Steel',
        'Secure Locking Mechanism',
        'Leak-Proof Design',
        'Perfect for Travel & Office'
      ]
    },
    {
      name: 'Square Tiffin',
      image: squareTiffinImg,
      details: 'Space-efficient square design',
      size: '11.8×6.1×10.3 cm / 400 ml',
      highlights: [
        'Premium Quality Stainless Steel',
        'Secure Locking Mechanism',
        'Leak-Proof & Stackable',
        'Space-Saving Design'
      ]
    },
    {
      name: 'Pooja Silver Box',
      image: poojaSilverBoxImg,
      details: 'Traditional design with engraved motifs',
      size: '13.5×5.5×13.5 cm',
      highlights: [
        'Pure Silver Finish',
        'Intricate Traditional Engravings',
        'Perfect for Pooja & Gifting',
        'Premium Craftsmanship'
      ]
    },
    {
      name: 'Square Canister Set',
      image: squareCanisterImg,
      details: 'Available in 3 sizes',
      size: 'Small 300ml | Medium 350ml | Big 400ml',
      highlights: [
        'Premium Quality Stainless Steel',
        'Mirror Finish',
        'Airtight & Stackable',
        'Multi Purpose Storage'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Our Products</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium stainless steel products designed for modern Indian homes
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-white aspect-[3/4]">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5 border-t border-border">
                  <h3 className="text-lg mb-1 text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.details}</p>
                  <p className="text-sm mb-4 text-primary">{product.size}</p>
                  
                  {/* Highlights */}
                  <div className="space-y-2">
                    {product.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              All products manufactured with food-grade stainless steel, ISI certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}