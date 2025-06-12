
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
            title: 'Quality Parts for Professional Fleets',
            subtitle: 'Certified IVECO • MAN • ZF Components',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80'
          },
          {
            title: 'Trusted Commercial Vehicle Solutions',
            subtitle: 'Premium Parts & Professional Service',
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80'
          },
          {
            title: 'Expert Installation & Support',
            subtitle: 'Your Reliable Parts Partner',
            image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80'
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
            title: 'قطع غيار عالية الجودة للأساطيل المهنية',
            subtitle: 'مكونات معتمدة من إيفيكو • مان • ZF',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80'
          },
          {
            title: 'حلول موثوقة للمركبات التجارية',
            subtitle: 'قطع غيار متميزة وخدمة احترافية',
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80'
          },
          {
            title: 'تركيب خبير ودعم فني',
            subtitle: 'شريكك الموثوق لقطع الغيار',
            image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80'
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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors duration-300"
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
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.home}
              </a>
              <a href="#brands" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.brands}
              </a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.catalog}
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.services}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.about}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.contact}
              </a>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
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
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                  <Button size="lg" className="text-lg px-8 py-4">
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {currentContent.hero.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Brand Logos Section */}
      <section id="brands" className="py-20 bg-muted/30">
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
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-20 flex items-center justify-center mb-6">
                  <div className="text-4xl font-bold text-primary">IVECO</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{currentContent.brands.iveco.name}</h3>
                <p className="text-muted-foreground">{currentContent.brands.iveco.description}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-20 flex items-center justify-center mb-6">
                  <div className="text-4xl font-bold text-primary">MAN</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{currentContent.brands.man.name}</h3>
                <p className="text-muted-foreground">{currentContent.brands.man.description}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-20 flex items-center justify-center mb-6">
                  <div className="text-4xl font-bold text-primary">ZF</div>
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
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
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
      <section id="contact" className="py-20 bg-muted/30">
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
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href={`tel:${currentContent.contact.phone}`} className="text-primary hover:underline">
                  {currentContent.contact.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href={`mailto:${currentContent.contact.email}`} className="text-primary hover:underline">
                  {currentContent.contact.email}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
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

            <Card className="text-center p-6">
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
            <div className="flex justify-center space-x-6">
              <span>IVECO</span>
              <span>•</span>
              <span>MAN</span>
              <span>•</span>
              <span>ZF</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
