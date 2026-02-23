'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Linkedin, Twitter, Mail } from 'lucide-react';
import ContactForm from '@/components/contact-form';

export default function Page() {
  const [pdfDownloading, setPdfDownloading] = useState(false);

  // FIXED: This now triggers an actual browser download
  const handlePdfDownload = () => {
    setPdfDownloading(true);
    
    // Create a temporary link element
    const link = document.createElement('a');
    
    // This points to the file in your /public folder
    link.href = '/The_100K_Conversion_Checklist.pdf'; 
    
    // This sets the name the user sees when saving
    link.download = 'The_100K_Conversion_Checklist.pdf'; 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset the button state after a brief moment
    setTimeout(() => {
      setPdfDownloading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-40">
        <div 
          className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Transform Your Business Strategy
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Unlock premium insights designed for discerning business leaders who demand excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
  href="/The_100K_Conversion_Checklist.pdf"
  download
  className="group relative px-8 py-4 font-semibold text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
  style={{ background: 'linear-gradient(135deg, #00E9FF 0%, #008C99 100%)' }}
>
  Download PDF
</a>
                <a
                  href="#audit"
                  className="px-8 py-4 font-semibold border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-center"
                >
                  Free Audit
                </a>
              </div>

              <div className="space-y-3 pt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Trusted by industry leaders worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Actionable strategies for immediate impact</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-start">
              <div className="relative w-full max-w-sm">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary to-secondary rounded-lg shadow-2xl overflow-hidden">
                  <img
                    src="image.png"
                    alt="The $100K Conversion Checklist"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-card border border-border rounded-lg p-6 shadow-xl max-w-xs">
                  <p className="text-sm text-muted-foreground">Exclusive Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who This Guide Is For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for ambitious professionals who refuse to settle for mediocre results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Premium Brands', description: 'Elevate your brand presence.', icon: '✨' },
              { title: 'Business Owners', description: 'Scale your operations.', icon: '📈' },
              { title: 'E-Commerce Founders', description: 'Master conversion.', icon: '🛍️' }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value & Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">What You'll Discover Inside</h2>
                <p className="text-lg text-muted-foreground">It's a comprehensive blueprint for scaling to new heights.</p>
              </div>

              <div className="space-y-4">
                {[
                  'Strategic frameworks proven to increase conversion rates',
                  'Advanced customer segmentation',
                  'Revenue optimization techniques',
                  'Brand positioning strategies',
                  'Retention and loyalty programs',
                  'Analytics and measurement'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-1">
                      <span className="text-xs font-bold text-primary-foreground">✓</span>
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handlePdfDownload}
                className="group relative px-8 py-4 font-semibold text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl w-fit mt-4"
                style={{
                  background: 'linear-gradient(135deg, #00E9FF 0%, #008C99 100%)',
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Download Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-96 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                  alt="Business strategy and growth visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Website Audit Section */}
      <section id="audit" className="py-20 md:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Website Audit</h2>
          </div>
          <div className="bg-background rounded-lg border border-border overflow-hidden shadow-lg">
            <iframe
              src="https://forms.gle/CkYWC6XNaWobszfn8"
              width="100%"
              height="600"
              className="border-0"
              title="Free Website Audit Form"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2026 Premium Business Guide.</p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/abdul-qoyyum-761599266/" target="_blank" className="p-3 rounded-full border border-border hover:bg-primary/10 transition-all"><Linkedin className="w-5 h-5 text-primary" /></a>
            <a href="https://x.com/abqoyyum" target="_blank" className="p-3 rounded-full border border-border hover:bg-primary/10 transition-all"><Twitter className="w-5 h-5 text-primary" /></a>
            <a href="mailto:ogunmubo06@gmail.com" className="p-3 rounded-full border border-border hover:bg-primary/10 transition-all"><Mail className="w-5 h-5 text-primary" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
