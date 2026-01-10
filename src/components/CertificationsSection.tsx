import { Award, FileCheck, ShieldCheck, Building2 } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      icon: ShieldCheck,
      title: 'ISI Mark Certification',
      description: 'Bureau of Indian Standards approved quality mark ensuring product safety and reliability'
    },
    {
      icon: Building2,
      title: 'UDYAM Registration',
      description: 'MSME registered manufacturing unit - UDYAM-MH-29-0014256'
    },
    {
      icon: FileCheck,
      title: 'GST Registered',
      description: 'Fully compliant with Indian tax regulations and standards'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Manufactured in compliance with Indian quality and regulatory standards'
    }
  ];

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Certifications & Compliance</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manufactured in compliance with Indian quality and regulatory standards
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-lg p-8 border border-border hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <cert.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3 text-foreground">{cert.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Statement */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg mb-2 text-foreground">Trust & Quality Commitment</h4>
                <p className="text-muted-foreground">
                  Deep Metal Industries is committed to maintaining the highest standards of quality and compliance. 
                  All our products are manufactured using food-grade stainless steel and undergo rigorous quality 
                  checks to ensure they meet ISI standards and customer expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
