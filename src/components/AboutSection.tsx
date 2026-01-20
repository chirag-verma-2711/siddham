import { Award, Shield, Factory, IndianRupee } from 'lucide-react';
import factoryImage from 'figma:asset/5b8a162295fdb3671fb90892665aed62c800a6e9.png';

export function AboutSection() {
  const features = [
    {
      icon: Factory,
      title: 'MSME Registered',
      description: 'Certified manufacturing unit'
    },
    {
      icon: Shield,
      title: 'Made in India',
      description: 'Proudly Indian manufacturing'
    },
    {
      icon: Award,
      title: 'Since 1996',
      description: '30+ years of excellence'
    },
    {
      icon: Shield,
      title: 'ISI Certified',
      description: 'Premium quality assured'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">About Deep Metal Industries</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manufacturing excellence in stainless steel home products
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Image */}
            <div className="relative">
              <img 
                src={factoryImage}
                alt="Manufacturing Unit"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl mb-6 text-foreground">
                Deep Metal Industries
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Established in 1996 and based in Vasai, Maharashtra, Deep Metal Industries brings over 30 years of manufacturing expertise in delivering premium quality stainless steel household products under the brand name <span className="text-primary font-medium">Siddham</span>.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With three decades of experience, our focus on quality manufacturing ensures every product is hygienic, odourless, and built for long-term durability. We take pride in contributing to Indian manufacturing excellence.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">High Quality Manufacturing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Hygienic, Odourless Stainless Steel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Long-term Durability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Indian Manufacturing Excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credibility Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-lg p-6 text-center border border-border hover:border-primary transition-all hover:shadow-md"
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h4 className="mb-2 text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}