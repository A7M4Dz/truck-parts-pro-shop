
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, MessageCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      nav: {
        home: 'Home',
        brands: 'Brands',
        catalog: 'Parts Catalog',
        services: 'Services',
        about: 'About Us',
        contact: 'Contact'
      },
      hero: {
        slides: [
          {
            title: 'Premium IVECO Parts & Solutions',
            subtitle: 'Professional parts for IVECO Stralis and S-Way models',
            image: '/lovable-uploads/f9ea6a29-be85-4162-90b2-33c087878774.png'
          },
          {
            title: 'Modern IVECO Electric Solutions',
            subtitle: 'Advanced electric truck parts and components',
            image: '/lovable-uploads/96350c99-75b3-4a1f-9e6d-b4f97d36d341.png'
          },
          {
            title: 'IVECO S-Way Performance Parts',
            subtitle: 'High-performance components for modern fleets',
            image: '/lovable-uploads/9593024c-17bd-4a70-a67c-ea93154a27fd.png'
          },
          {
            title: 'MAN Truck Excellence',
            subtitle: 'Quality MAN parts for maximum reliability',
            image: '/lovable-uploads/8b5c93e9-e150-4916-9d20-92cd6e8d45a4.png'
          }
        ]
      },
      brands: {
        title: 'Authorized Dealer for Leading Brands',
        subtitle: 'Premium quality parts from trusted manufacturers',
        iveco: {
          name: 'IVECO',
          description: 'Complete range of IVECO truck parts and components'
        },
        man: {
          name: 'MAN',
          description: 'Genuine MAN parts for optimal performance'
        },
        zf: {
          name: 'ZF',
          description: 'Advanced ZF transmission and drivetrain solutions'
        }
      },
      services: {
        title: 'Professional Services',
        items: [
          {
            title: 'Parts Consultation',
            description: 'Expert guidance for part selection and compatibility'
          },
          {
            title: 'Installation Support',
            description: 'Professional installation and technical assistance'
          },
          {
            title: 'Warranty Service',
            description: 'Comprehensive warranty on all genuine parts'
          },
          {
            title: 'Fleet Solutions',
            description: 'Customized solutions for commercial fleets'
          }
        ]
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Ready to help with your truck parts needs',
        phone: '+966 50 410 6845',
        email: 'info@truckparts.sa',
        location: 'View Location',
        whatsapp: 'Chat on WhatsApp'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        brands: 'العلامات التجارية',
        catalog: 'كتالوج القطع',
        services: 'الخدمات',
        about: 'من نحن',
        contact: 'اتصل بنا'
      },
      hero: {
        slides: [
          {
            title: 'قطع غيار إيفيكو المتميزة والحلول',
            subtitle: 'قطع غيار احترافية لموديلات إيفيكو سترالس و S-Way',
            image: '/lovable-uploads/f9ea6a29-be85-4162-90b2-33c087878774.png'
          },
          {
            title: 'حلول إيفيكو الكهربائية الحديثة',
            subtitle: 'قطع غيار ومكونات متقدمة للشاحنات الكهربائية',
            image: '/lovable-uploads/96350c99-75b3-4a1f-9e6d-b4f97d36d341.png'
          },
          {
            title: 'قطع غيار إيفيكو S-Way عالية الأداء',
            subtitle: 'مكونات عالية الأداء للأساطيل الحديثة',
            image: '/lovable-uploads/9593024c-17bd-4a70-a67c-ea93154a27fd.png'
          },
          {
            title: 'تميز شاحنات مان',
            subtitle: 'قطع غيار مان عالية الجودة للموثوقية القصوى',
            image: '/lovable-uploads/8b5c93e9-e150-4916-9d20-92cd6e8d45a4.png'
          }
        ]
      },
      brands: {
        title: 'وكيل معتمد للعلامات التجارية الرائدة',
        subtitle: 'قطع غيار عالية الجودة من مصنعين موثوقين',
        iveco: {
          name: 'إيفيكو',
          description: 'مجموعة كاملة من قطع غيار شاحنات إيفيكو'
        },
        man: {
          name: 'مان',
          description: 'قطع غيار مان الأصلية للأداء الأمثل'
        },
        zf: {
          name: 'ZF',
          description: 'حلول متقدمة لناقل الحركة ونظام الدفع من ZF'
        }
      },
      services: {
        title: 'خدمات مهنية',
        items: [
          {
            title: 'استشارة قطع الغيار',
            description: 'إرشاد خبير لاختيار القطع والتوافق'
          },
          {
            title: 'دعم التركيب',
            description: 'تركيب احترافي ومساعدة تقنية'
          },
          {
            title: 'خدمة الضمان',
            description: 'ضمان شامل على جميع القطع الأصلية'
          },
          {
            title: 'حلول الأساطيل',
            description: 'حلول مخصصة للأساطيل التجارية'
          }
        ]
      },
      contact: {
        title: 'تواصل معنا',
        subtitle: 'مستعدون لمساعدتك في احتياجات قطع غيار الشاحنات',
        phone: '+966 50 410 6845',
        email: 'info@truckparts.sa',
        location: 'عرض الموقع',
        whatsapp: 'محادثة واتساب'
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentContent.hero.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentContent.hero.slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentContent.hero.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentContent.hero.slides.length) % currentContent.hero.slides.length);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/966504106845?text=Hello, I'm interested in truck parts for IVECO/MAN/ZF"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                TruckParts
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors nav-link">
                {currentContent.nav.home}
              </a>
              <a href="#brands" className="text-foreground hover:text-primary transition-colors nav-link">
                {currentContent.nav.brands}
              </a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors nav-link">
                {currentContent.nav.catalog}
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors nav-link">
                {currentContent.nav.services}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors nav-link">
                {currentContent.nav.about}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors nav-link">
                {currentContent.nav.contact}
              </a>
            </div>

            <div className="fixed-language-toggle">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-2 min-w-[110px] justify-center"
              >
                <Globe className="h-4 w-4" />
                <span className="font-medium">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slideshow */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {currentContent.hero.slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 slide-title">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                  <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
                    {currentContent.contact.whatsapp}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {currentContent.hero.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Brand Logos Section */}
      <section id="brands" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {currentContent.brands.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {currentContent.brands.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 card-hover group">
              <CardContent className="pt-6">
                <div className="h-24 flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/29942a8a-683c-4463-b5df-c9547885542d.png" 
                    alt="IVECO Logo" 
                    className="h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{currentContent.brands.iveco.name}</h3>
                <p className="text-muted-foreground">{currentContent.brands.iveco.description}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 card-hover group">
              <CardContent className="pt-6">
                <div className="h-24 flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/12602803-7c47-4b74-9377-aa63203c35f2.png" 
                    alt="MAN Logo" 
                    className="h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{currentContent.brands.man.name}</h3>
                <p className="text-muted-foreground">{currentContent.brands.man.description}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 card-hover group">
              <CardContent className="pt-6">
                <div className="h-24 flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/ac3fd0f7-8559-4935-8794-7a9e9eaf1ceb.png" 
                    alt="ZF Logo" 
                    className="h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{currentContent.brands.zf.name}</h3>
                <p className="text-muted-foreground">{currentContent.brands.zf.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {currentContent.services.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.services.items.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 card-hover">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {currentContent.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href={`tel:${currentContent.contact.phone}`} className="text-primary hover:underline">
                  {currentContent.contact.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href={`mailto:${currentContent.contact.email}`} className="text-primary hover:underline">
                  {currentContent.contact.email}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <a 
                  href="https://maps.app.goo.gl/Q55pRMTiUPafR1736" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {currentContent.contact.location}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-[#25D366] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <a 
                  href="https://wa.me/966504106845?text=Hello, I'm interested in truck parts for IVECO/MAN/ZF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  {currentContent.contact.whatsapp}
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.3962408804855!2d46.6722!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAzMDguMCJF!5e0!3m2!1sen!2ssa!4v1625097200000!5m2!1sen!2ssa"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shop Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">TruckParts</div>
            <p className="text-primary-foreground/80 mb-4">
              {language === 'en' 
                ? 'Your trusted partner for commercial truck parts' 
                : 'شريكك الموثوق لقطع غيار الشاحنات التجارية'
              }
            </p>
            <div className="flex justify-center items-center space-x-6">
              <img src="/lovable-uploads/29942a8a-683c-4463-b5df-c9547885542d.png" alt="IVECO" className="h-8 opacity-80" />
              <span className="text-primary-foreground/60">•</span>
              <img src="/lovable-uploads/12602803-7c47-4b74-9377-aa63203c35f2.png" alt="MAN" className="h-8 opacity-80" />
              <span className="text-primary-foreground/60">•</span>
              <img src="/lovable-uploads/ac3fd0f7-8559-4935-8794-7a9e9eaf1ceb.png" alt="ZF" className="h-8 opacity-80" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
