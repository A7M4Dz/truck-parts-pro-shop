
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, MessageCircle, Globe, Star, Award, Truck, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const content = {
    en: {
      nav: {
        home: 'Home',
        brands: 'Brands',
        catalog: 'Parts Catalog',
        about: 'About Us',
        contact: 'Contact'
      },
      hero: {
        slides: [
          {
            title: 'Premium IVECO Parts & Solutions',
            subtitle: 'Original and compatible parts for IVECO Stralis and S-Way models',
            cta: 'Explore IVECO Parts',
            image: '/lovable-uploads/f9ea6a29-be85-4162-90b2-33c087878774.png'
          },
          {
            title: 'Advanced Electric Truck Solutions',
            subtitle: 'Cutting-edge electric truck parts and innovative components',
            cta: 'View Electric Parts',
            image: '/lovable-uploads/96350c99-75b3-4a1f-9e6d-b4f97d36d341.png'
          },
          {
            title: 'High-Performance IVECO S-Way',
            subtitle: 'Premium performance components for modern commercial fleets',
            cta: 'S-Way Catalog',
            image: '/lovable-uploads/9593024c-17bd-4a70-a67c-ea93154a27fd.png'
          },
          {
            title: 'MAN Truck Excellence',
            subtitle: 'Genuine MAN parts for maximum reliability and performance',
            cta: 'MAN Parts',
            image: '/lovable-uploads/8b5c93e9-e150-4916-9d20-92cd6e8d45a4.png'
          }
        ]
      },
      brands: {
        title: 'Authorized Partner for Leading Brands',
        subtitle: 'Premium quality truck parts from world-renowned manufacturers'
      },
      features: {
        title: 'Why Choose ALREEM?',
        items: [
          {
            icon: Award,
            title: 'Certified Quality',
            description: 'All parts meet international quality standards and manufacturer specifications'
          },
          {
            icon: Truck,
            title: 'Expert Knowledge',
            description: 'Years of experience in commercial truck parts and fleet solutions'
          },
          {
            icon: Star,
            title: 'Fast Service',
            description: 'Quick sourcing and delivery for urgent fleet maintenance needs'
          }
        ]
      },
      contact: {
        title: 'Get in Touch with ALREEM',
        subtitle: 'Ready to assist with all your commercial truck parts needs',
        phone: '+966 50 410 6845',
        email: 'info@alreem-parts.sa',
        location: 'View Our Location',
        whatsapp: 'WhatsApp Now'
      },
      chat: {
        title: 'Need Help?',
        placeholder: 'Type your message...',
        send: 'Send',
        close: 'Close'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        brands: 'العلامات التجارية',
        catalog: 'كتالوج القطع',
        about: 'عن الرِيم',
        contact: 'تواصل معنا'
      },
      hero: {
        slides: [
          {
            title: 'قطع غيار إيفيكو الأصلية والمتميزة',
            subtitle: 'قطع أصلية ومتوافقة لموديلات إيفيكو سترالس و S-Way',
            cta: 'استكشف قطع إيفيكو',
            image: '/lovable-uploads/f9ea6a29-be85-4162-90b2-33c087878774.png'
          },
          {
            title: 'حلول الشاحنات الكهربائية المتطورة',
            subtitle: 'قطع غيار حديثة ومكونات مبتكرة للشاحنات الكهربائية',
            cta: 'اطلع على القطع الكهربائية',
            image: '/lovable-uploads/96350c99-75b3-4a1f-9e6d-b4f97d36d341.png'
          },
          {
            title: 'إيفيكو S-Way عالية الأداء',
            subtitle: 'مكونات متميزة للأساطيل التجارية الحديثة',
            cta: 'كتالوج S-Way',
            image: '/lovable-uploads/9593024c-17bd-4a70-a67c-ea93154a27fd.png'
          },
          {
            title: 'تميز شاحنات مان الألمانية',
            subtitle: 'قطع مان الأصلية للموثوقية والأداء الفائق',
            cta: 'قطع مان',
            image: '/lovable-uploads/8b5c93e9-e150-4916-9d20-92cd6e8d45a4.png'
          }
        ]
      },
      brands: {
        title: 'شريك معتمد للعلامات التجارية الرائدة',
        subtitle: 'قطع غيار شاحنات عالية الجودة من مصنعين مشهورين عالمياً'
      },
      features: {
        title: 'ليش تختار الرِيم؟',
        items: [
          {
            icon: Award,
            title: 'جودة معتمدة',
            description: 'كل القطع تطابق المعايير العالمية ومواصفات المصنع'
          },
          {
            icon: Truck,
            title: 'خبرة متخصصة',
            description: 'سنوات من الخبرة في قطع الشاحنات التجارية وحلول الأساطيل'
          },
          {
            icon: Star,
            title: 'خدمة سريعة',
            description: 'توريد وتوصيل سريع لاحتياجات صيانة الأساطيل العاجلة'
          }
        ]
      },
      contact: {
        title: 'تواصل مع الرِيم',
        subtitle: 'مستعدين نساعدك في كل احتياجات قطع غيار الشاحنات التجارية',
        phone: '+966 50 410 6845',
        email: 'info@alreem-parts.sa',
        location: 'شوف موقعنا',
        whatsapp: 'واتساب الحين'
      },
      chat: {
        title: 'تحتاج مساعدة؟',
        placeholder: 'اكتب رسالتك...',
        send: 'إرسال',
        close: 'إغلاق'
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentContent.hero.slides.length);
    }, 6000);
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

  const sendChatMessage = async () => {
    if (!chatMessage.trim() || isSending) return;
    
    setIsSending(true);
    try {
      const response = await fetch('https://n8n.ahmed.today/webhook/45e1c1fe-5fb9-4f49-b898-32a44a481b60', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: chatMessage,
          timestamp: new Date().toISOString(),
          language: language,
          source: 'alreem-website'
        }),
      });
      
      console.log('Chat message sent:', response.status);
      setChatMessage('');
      setIsChatOpen(false);
    } catch (error) {
      console.error('Error sending chat message:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl font-arabic' : 'ltr font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/966504106845?text=Hello, I'm interested in truck parts for IVECO/MAN/ZF"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 whatsapp-float animate-pulse-subtle"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Chat Bot */}
      <div className="fixed bottom-6 left-6 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-primary text-white p-4 rounded-full shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-110 animate-pulse-subtle"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-2xl border border-border/20 w-80 max-w-[90vw]">
            <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">{currentContent.chat.title}</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder={currentContent.chat.placeholder}
                  className="flex-1 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isSending}
                />
                <Button
                  onClick={sendChatMessage}
                  disabled={!chatMessage.trim() || isSending}
                  size="sm"
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-40 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/27ada82d-e324-49ad-b143-e7a842cbf645.png" 
                alt="ALREEM Logo" 
                className="h-12 w-auto brand-logo-hover"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 nav-link font-medium">
                {currentContent.nav.home}
              </a>
              <a href="#brands" className="text-foreground hover:text-primary transition-all duration-300 nav-link font-medium">
                {currentContent.nav.brands}
              </a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-all duration-300 nav-link font-medium">
                {currentContent.nav.catalog}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 nav-link font-medium">
                {currentContent.nav.about}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 nav-link font-medium">
                {currentContent.nav.contact}
              </a>
            </div>

            <div className="fixed-language-toggle">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-2 min-w-[120px] justify-center hover:scale-105 transition-all duration-300 border-2 hover:border-primary bg-white"
              >
                <Globe className="h-4 w-4" />
                <span className="font-semibold">
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
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-5xl mx-auto px-4 animate-fade-in-up">
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 slide-title leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl mb-10 opacity-95 font-light">
                    {slide.subtitle}
                  </p>
                  <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {currentContent.hero.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Brand Logos Section */}
      <section id="brands" className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              {currentContent.brands.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {currentContent.brands.subtitle}
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-16 md:gap-24">
            {/* IVECO - Larger */}
            <div className="text-center group">
              <div className="h-32 flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/29942a8a-683c-4463-b5df-c9547885542d.png" 
                  alt="IVECO" 
                  className="h-24 object-contain group-hover:scale-110 transition-transform duration-500 card-hover"
                />
              </div>
            </div>
            
            {/* MAN */}
            <div className="text-center group">
              <div className="h-32 flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/12602803-7c47-4b74-9377-aa63203c35f2.png" 
                  alt="MAN" 
                  className="h-16 object-contain group-hover:scale-110 transition-transform duration-500 card-hover"
                />
              </div>
            </div>
            
            {/* ZF */}
            <div className="text-center group">
              <div className="h-32 flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/ac3fd0f7-8559-4935-8794-7a9e9eaf1ceb.png" 
                  alt="ZF" 
                  className="h-16 object-contain group-hover:scale-110 transition-transform duration-500 card-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {currentContent.features.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {currentContent.features.items.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-500 card-hover group border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="pt-8">
                    <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {currentContent.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-8 card-hover hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-3 text-lg">Phone</h3>
                <a href={`tel:${currentContent.contact.phone}`} className="text-primary hover:underline text-lg font-medium">
                  {currentContent.contact.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-8 card-hover hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-3 text-lg">Email</h3>
                <a href={`mailto:${currentContent.contact.email}`} className="text-primary hover:underline text-lg font-medium">
                  {currentContent.contact.email}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-8 card-hover hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-3 text-lg">Location</h3>
                <a 
                  href="https://maps.app.goo.gl/Q55pRMTiUPafR1736" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-lg font-medium"
                >
                  {currentContent.contact.location}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-8 card-hover hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#25D366]/20 transition-colors duration-300">
                  <MessageCircle className="h-8 w-8 text-[#25D366]" />
                </div>
                <h3 className="font-bold mb-3 text-lg">WhatsApp</h3>
                <a 
                  href="https://wa.me/966504106845?text=Hello, I'm interested in truck parts for IVECO/MAN/ZF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline text-lg font-medium"
                >
                  {currentContent.contact.whatsapp}
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps Embed - Fixed */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-border/20 max-w-5xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.8607746134724!2d46.67220257077407!3d24.71360279743582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0c3b5c8b1f1f%3A0x1234567890abcdef!2z2KfZhNix2YrZhQ!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ALREEM Shop Location"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/lovable-uploads/27ada82d-e324-49ad-b143-e7a842cbf645.png" 
              alt="ALREEM Logo" 
              className="h-16 mx-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/90 mb-8 text-lg">
              {language === 'en' 
                ? 'Your trusted partner for premium commercial truck parts' 
                : 'شريكك الموثوق لقطع غيار الشاحنات التجارية المتميزة'
              }
            </p>
            <div className="flex justify-center items-center space-x-8">
              <img src="/lovable-uploads/29942a8a-683c-4463-b5df-c9547885542d.png" alt="IVECO" className="h-10 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <span className="text-primary-foreground/60">•</span>
              <img src="/lovable-uploads/12602803-7c47-4b74-9377-aa63203c35f2.png" alt="MAN" className="h-10 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <span className="text-primary-foreground/60">•</span>
              <img src="/lovable-uploads/ac3fd0f7-8559-4935-8794-7a9e9eaf1ceb.png" alt="ZF" className="h-10 opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
