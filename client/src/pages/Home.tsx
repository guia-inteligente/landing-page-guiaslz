import { useState, useEffect } from 'react';
import { Menu, X, Phone, Video, MoreVertical, ChevronLeft, Smile, Paperclip, Mic } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
        data-testid="navbar"
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-body)' }}>
              Guia Slz
            </span>
            <span className="text-xs text-gray-400 hidden sm:inline">by @roleslz</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors" data-testid="link-como-funciona">
              Como funciona
            </a>
            <a href="#precos" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors" data-testid="link-precos">
              Preços
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors" data-testid="link-faq">
              FAQ
            </a>
            <button
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1D4ED8] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              data-testid="button-cta-nav"
            >
              Quero meu acesso!
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 animate-in slide-in-from-top duration-200">
            <a href="#como-funciona" className="block text-sm font-medium text-gray-700">Como funciona</a>
            <a href="#precos" className="block text-sm font-medium text-gray-700">Preços</a>
            <a href="#faq" className="block text-sm font-medium text-gray-700">FAQ</a>
            <button className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-full">
              Quero meu acesso!
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #E0F2FE 0%, #FFFFFF 100%)' }}>
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/60 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-pastel-blue/40 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-pastel-mint/50 rounded-full blur-2xl" />
          <svg className="absolute top-32 right-1/4 w-64 h-64 text-pastel-blue/30" viewBox="0 0 200 200">
            <path fill="currentColor" d="M40,-62.6C52.2,-54.5,62.8,-44,69.6,-31.1C76.4,-18.2,79.4,-2.8,76.8,11.4C74.2,25.6,66,38.7,54.8,48.6C43.6,58.5,29.4,65.3,14.4,69.2C-0.6,73.1,-16.4,74.2,-30.8,69.5C-45.2,64.8,-58.2,54.3,-66.5,40.8C-74.8,27.3,-78.4,10.8,-76.1,-4.4C-73.8,-19.6,-65.6,-33.5,-54.2,-42.5C-42.8,-51.5,-28.2,-55.6,-14.3,-59.8C-0.4,-64,12.8,-68.3,26.3,-68.5C39.8,-68.7,53.6,-64.8,40,-62.6Z" transform="translate(100 100)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          {/* Headline */}
          <h1
            className="font-bold text-gray-900 leading-tight tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              maxWidth: '700px',
              margin: '0 auto 24px'
            }}
            data-testid="text-headline"
          >
            Seu concierge pessoal de São Luís, direto no seu WhatsApp
          </h1>

          {/* Subheadline */}
          <p
            className="text-gray-600 leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}
            data-testid="text-subheadline"
          >
            Pergunte onde ir, o que fazer, onde comer. Receba recomendações na hora e ainda ganhe descontos exclusivos nos melhores lugares da ilha.
          </p>

          {/* CTA Button */}
          <button
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
            data-testid="button-cta-hero"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero meu acesso!
          </button>

          {/* WhatsApp Mockup */}
          <div className="mt-12 flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div
              className="relative"
              style={{
                animation: 'float 3s ease-in-out infinite'
              }}
            >
              {/* Phone Frame */}
              <div
                className="relative bg-white rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-2xl"
                style={{
                  width: 'min(380px, 90vw)',
                  transform: 'rotate(-2deg)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 60px rgba(37, 99, 235, 0.15)'
                }}
                data-testid="whatsapp-mockup"
              >
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <ChevronLeft className="w-6 h-6 text-white" />
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    GS
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-bold text-base">Guia Slz</span>
                  </div>
                  <Video className="w-5 h-5 text-white" />
                  <Phone className="w-5 h-5 text-white" />
                  <MoreVertical className="w-5 h-5 text-white" />
                </div>

                {/* Chat Body */}
                <div className="bg-[#ECE5DD] p-3 space-y-3" style={{ minHeight: '360px' }}>
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                      <p className="text-gray-800 text-sm">Me indica um lugar pra jantar no Renascença?</p>
                      <span className="text-[10px] text-gray-500 float-right mt-1 ml-2">19:32</span>
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                      <p className="text-gray-800 text-sm mb-2">Claro! 🍽️ Aqui vão 3 opções top no Renascença:</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="border-l-2 border-primary pl-2">
                          <p className="font-bold text-gray-800">Cabana do Sol</p>
                          <p className="text-gray-600 text-xs">Frutos do mar, ambiente familiar</p>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs">⭐ 4.8</span>
                            <span className="text-xs">💰 $$</span>
                            <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">🎫 10% OFF</span>
                          </div>
                        </div>

                        <div className="border-l-2 border-primary pl-2">
                          <p className="font-bold text-gray-800">Churrascaria Fogo de Chão</p>
                          <p className="text-gray-600 text-xs">Rodízio completo</p>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs">⭐ 4.6</span>
                            <span className="text-xs">💰 $$$</span>
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-medium">🎫 15% OFF</span>
                          </div>
                        </div>

                        <div className="border-l-2 border-primary pl-2">
                          <p className="font-bold text-gray-800">Toca do Caranguejo</p>
                          <p className="text-gray-600 text-xs">Caranguejo e petiscos</p>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs">⭐ 4.7</span>
                            <span className="text-xs">💰 $$</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">🎫 Bebida grátis</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-800 text-sm mt-2">Quer mais detalhes de algum? 😊</p>
                      <span className="text-[10px] text-gray-500 float-right mt-1">19:32</span>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
                  <Smile className="w-6 h-6 text-gray-500" />
                  <Paperclip className="w-6 h-6 text-gray-500" />
                  <div className="flex-1 bg-white rounded-full px-4 py-2">
                    <span className="text-gray-400 text-sm">Mensagem</span>
                  </div>
                  <Mic className="w-6 h-6 text-gray-500" />
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-8 w-12 h-12 bg-yellow-400 rounded-lg rotate-12 flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                <span className="text-lg">🏷️</span>
              </div>
              <div className="absolute top-1/3 -left-10 w-10 h-10 bg-red-400 rounded-full flex items-center justify-center shadow-lg" style={{ animation: 'float 2.5s ease-in-out infinite reverse' }}>
                <span className="text-base">📍</span>
              </div>
              <div className="absolute bottom-20 -right-6 w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg" style={{ animation: 'float 2s ease-in-out infinite' }}>
                <span className="text-base">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
      `}</style>
    </div>
  );
}
