import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, MessageCircle, Globe, Star, Award, Truck, Send, X, Settings, Wrench, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      message: language === 'en' ? 'Hello! How can I help you with truck parts today?' : 'مرحباً! كيف يمكنني مساعدتك في قطع غيار الشاحنات اليوم؟',
      timestamp: new Date()
    }
  ]);

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
        subtitle: 'Premium quality truck parts from world-renowned manufacturers',
        items: [
          {
            name: 'IVECO',
            description: 'Italian excellence in commercial vehicles. Original and compatible parts for all IVECO models including Stralis, S-Way, and Daily series.',
            logo: '/lovable-uploads/29942a8a-683c-4463-b5df-c9547885542d.png',
            specialties: ['Engine Components', 'Transmission Parts', 'Electrical Systems']
          },
          {
            name: 'MAN',
            description: 'German engineering precision. Genuine MAN parts for TGX, TGS, and TGL series with guaranteed quality and performance.',
            logo: '/lovable-uploads/12602803-7c47-4b74-9377-aa63203c35f2.png',
            specialties: ['Brake Systems', 'Suspension', 'Cabin Parts']
          },
          {
            name: 'ZF',
            description: 'World leader in driveline and chassis technology. Premium ZF transmissions, axles, and steering systems for commercial vehicles.',
            logo: '/lovable-uploads/ac3fd0f7-8559-4935-8794-7a9e9eaf1ceb.png',
            specialties: ['Transmissions', 'Axles', 'Steering Systems']
          }
        ]
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
        subtitle: 'قطع غيار شاحنات عالية الجودة من مصنعين مشهورين عالمياً',
        items: [
          {
            name: 'إيفيكو',
            description: 'التميز الإيطالي في المركبات التجارية. قطع أصلية ومتوافقة لجميع موديلات إيفيكو بما في ذلك سترالس و S-Way وسلسلة ديلي.',
            logo: '/lovable-uploads/29942a8a-683c-4463-b5df-c9547885542d.png',
            specialties: ['مكونات المحرك', 'قطع ناقل الحركة', 'الأنظمة الكهربائية']
          },
          {
            name: 'مان',
            description: 'دقة الهندسة الألمانية. قطع مان الأصلية لسلاسل TGX و TGS و TGL مع ضمان الجودة والأداء.',
            logo: '/lovable-uploads/12602803-7c47-4b74-9377-aa63203c35f2.png',
            specialties: ['أنظمة الفرامل', 'نظام التعليق', 'قطع الكابينة']
          },
          {
            name: 'زد إف',
            description: 'الرائد عالمياً في تقنية نقل الحركة والهيكل. ناقلات حركة وأكسل وأنظمة توجيه ZF المتميزة للمركبات التجارية.',
            logo: '/lovable-uploads/ac3fd0f7-8559-4935-8794-7a9e9eaf1ceb.png',
            specialties: ['ناقلات الحركة', 'الأكسل', 'أنظمة التوجيه']
          }
        ]
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

  useEffect(() => {
    setChatHistory([
      {
        type: 'bot',
        message: language === 'en' ? 'Hello! How can I help you with truck parts today?' : 'مرحباً! كيف يمكنني مساعدتك في قطع غيار الشاحنات اليوم؟',
        timestamp: new Date()
      }
    ]);
  }, [language]);

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
    
    const userMessage = {
      type: 'user',
      message: chatMessage,
      timestamp: new Date()
    };
    
    setChatHistory(prev => [...prev, userMessage]);
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
      
      const responseData = await response.json();
      console.log('Chat response:', responseData);
      
      const botMessage = {
        type: 'bot',
        message: responseData.reply || (language === 'en' ? 'Thank you for your message. We will get back to you soon!' : 'شكراً لرسالتك. سنتواصل معك قريباً!'),
        timestamp: new Date()
      };
      
      setChatHistory(prev => [...prev, botMessage]);
      setChatMessage('');
    } catch (error) {
      console.error('Error sending chat message:', error);
      const errorMessage = {
        type: 'bot',
        message: language === 'en' ? 'Sorry, there was an error. Please try again or contact us directly.' : 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.',
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, errorMessage]);
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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 whatsapp-float animate-pulse-subtle"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Enhanced Chat Bot */}
      <div className="fixed bottom-6 left-6 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 animate-pulse-subtle"
            aria-label="Open chat"
          >
            <MessageCircle className="h-5 w-5" />
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-2xl border border-border/20 w-80 max-w-[85vw] max-h-[450px] flex flex-col chat-bot-mobile">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold text-sm">{currentContent.chat.title}</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            {/* Chat History */}
            <div className="flex-1 p-3 overflow-y-auto max-h-72 space-y-2">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${msg.type} ${msg.type === 'user' ? 'ml-auto' : 'mr-auto'}`}
                >
                  <div className="text-xs">{msg.message}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))}
              {isSending && (
                <div className="chat-message bot mr-auto">
                  <div className="text-xs">
                    {language === 'en' ? 'Typing...' : 'يكتب...'}
                  </div>
                </div>
              )}
            </div>
            
            {/* Input Area */}
            <div className="p-3 border-t border-border/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder={currentContent.chat.placeholder}
                  className="flex-1 border border-border rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={isSending}
                />
                <Button
                  onClick={sendChatMessage}
                  disabled={!chatMessage.trim() || isSending}
                  size="sm"
                  className="px-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation with White Background */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/27ada82d-e324-49ad-b143-e7a842cbf645.png" 
                alt="ALREEM Logo" 
                className="h-10 w-auto brand-logo-hover"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="nav-link font-medium text-sm">
                {currentContent.nav.home}
              </a>
              <a href="#brands" className="nav-link font-medium text-sm">
                {currentContent.nav.brands}
              </a>
              <a href="#catalog" className="nav-link font-medium text-sm">
                {currentContent.nav.catalog}
              </a>
              <a href="#about" className="nav-link font-medium text-sm">
                {currentContent.nav.about}
              </a>
              <a href="#contact" className="nav-link font-medium text-sm">
                {currentContent.nav.contact}
              </a>
            </div>

            <div className="fixed-language-toggle">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-1 min-w-[90px] justify-center hover:scale-105 transition-all duration-300 border-2 border-orange-400 hover:border-orange-300 bg-white/90 hover:bg-white text-orange-600 hover:text-orange-700 text-xs"
              >
                <Globe className="h-3 w-3" />
                <span className="font-semibold">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slideshow with Minimal Overlay */}
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
              <div className="absolute inset-0 hero-gradient"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 slide-title leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 opacity-95 font-light">
                    {slide.subtitle}
                  </p>
                  <Button size="lg" className="text-base px-6 py-3 btn-professional transform hover:scale-105 transition-all duration-300 shadow-2xl">
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {currentContent.hero.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange-400 scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Brand Cards Section */}
      <section id="brands" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              {currentContent.brands.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {currentContent.brands.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentContent.brands.items.map((brand, index) => (
              <Card key={index} className="brand-card hover:shadow-2xl transition-all duration-500 card-hover group border-0 overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className={`flex items-center justify-center mb-4 bg-white/50 rounded-xl p-4 ${
                      brand.name === 'IVECO' ? 'h-32' : 'h-24'
                    }`}>
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className={`object-contain group-hover:scale-110 transition-transform duration-500 ${
                          brand.name === 'IVECO' ? 'h-20' : 'h-12'
                        }`}
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{brand.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 text-sm">
                      <Settings className="h-3 w-3 text-orange-500" />
                      {language === 'en' ? 'Specialties:' : 'التخصصات:'}
                    </h4>
                    <div className="space-y-1">
                      {brand.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentContent.features.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.features.items.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-500 card-hover group border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mb-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentContent.contact.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {currentContent.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 card-hover hover:shadow-xl transition-all duration-300 group bg-white border-0 contact-card">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mb-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold mb-2 text-base text-gray-900">Phone</h3>
                <a href={`tel:${currentContent.contact.phone}`} className="text-orange-600 hover:text-orange-700 hover:underline text-sm font-medium transition-colors">
                  {currentContent.contact.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-hover hover:shadow-xl transition-all duration-300 group bg-white border-0 contact-card">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2 text-base text-gray-900">Email</h3>
                <a href={`mailto:${currentContent.contact.email}`} className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors">
                  {currentContent.contact.email}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-hover hover:shadow-xl transition-all duration-300 group bg-white border-0 contact-card">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mb-4 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2 text-base text-gray-900">Location</h3>
                <a 
                  href="https://maps.app.goo.gl/Q55pRMTiUPafR1736" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 hover:underline text-sm font-medium transition-colors"
                >
                  {currentContent.contact.location}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-hover hover:shadow-xl transition-all duration-300 group bg-white border-0 contact-card">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2 text-base text-gray-900">WhatsApp</h3>
                <a 
                  href="https://wa.me/966504106845?text=Hello, I'm interested in truck parts for IVECO/MAN/ZF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 hover:underline text-sm font-medium transition-colors"
                >
                  {currentContent.contact.whatsapp}
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Fixed Google Maps Embed */}
          <div className="mb-12">
            <div className="maps-container bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.140919439!2d46.67220257077407!3d24.71360279743582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0c3b5c8b1f1f%3A0x1234567890abcdef!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
                width="100%"
                height="300"
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
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/lovable-uploads/27ada82d-e324-49ad-b143-e7a842cbf645.png" 
              alt="ALREEM Logo" 
              className="h-12 mx-auto mb-4"
            />
            <p className="text-gray-300 mb-6 text-base">
              {language === 'en' 
                ? 'Your trusted partner for premium commercial truck parts' 
                : 'شريكك الموثوق لقطع غيار الشاحنات التجارية المتميزة'
              }
            </p>
            <div className="flex justify-center items-center space-x-6">
              <img src="/lovable-uploads/29942a8a-683c-4463-b5df-c9547885542d.png" alt="IVECO" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <span className="text-gray-400">•</span>
              <img src="/lovable-uploads/12602803-7c47-4b74-9377-aa63203c35f2.png" alt="MAN" className="h-6 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <span className="text-gray-400">•</span>
              <img src="/lovable-uploads/ac3fd0f7-8559-4935-8794-7a9e9eaf1ceb.png" alt="ZF" className="h-6 opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
