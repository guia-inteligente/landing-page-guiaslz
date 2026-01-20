import { useState, useEffect } from 'react';
import { Menu, X, Phone, Video, MoreVertical, ChevronLeft, Smile, Paperclip, Mic, Instagram, Check, X as XIcon } from 'lucide-react';
import logoGuia from '@assets/logo-roleslz-render.png';

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
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logoGuia} 
              alt="Guia Slz - Seu concierge de São Luís" 
              className="h-10 w-auto"
              data-testid="logo"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-medium text-gray-700 hover:text-[#B91C1C] transition-colors" data-testid="link-como-funciona">
              Como funciona
            </a>
            <a href="#beneficios" className="text-sm font-medium text-gray-700 hover:text-[#B91C1C] transition-colors" data-testid="link-beneficios">
              Benefícios
            </a>
            <a href="#precos" className="text-sm font-medium text-gray-700 hover:text-[#B91C1C] transition-colors" data-testid="link-precos">
              Preços
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-[#B91C1C] transition-colors" data-testid="link-faq">
              FAQ
            </a>
            <button
              className="inline-flex items-center gap-2 bg-[#B91C1C] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#991B1B] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              data-testid="button-cta-nav"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
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
            <a href="#beneficios" className="block text-sm font-medium text-gray-700">Benefícios</a>
            <a href="#precos" className="block text-sm font-medium text-gray-700">Preços</a>
            <a href="#faq" className="block text-sm font-medium text-gray-700">FAQ</a>
            <button className="w-full inline-flex items-center justify-center gap-2 bg-[#B91C1C] text-white font-semibold px-6 py-3 rounded-full">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quero meu acesso!
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FDF6E3 0%, #FFFFFF 100%)' }}>
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/60 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-[#FEE2E2]/40 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-[#FEF3C7]/50 rounded-full blur-2xl" />
          <svg className="absolute top-32 right-1/4 w-64 h-64 text-[#FEE2E2]/30" viewBox="0 0 200 200">
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
            className="text-gray-600 leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: '600px',
              margin: '0 auto 32px',
              animationDelay: '200ms'
            }}
            data-testid="text-subheadline"
          >
            Pergunte onde ir, o que fazer, onde comer. Receba recomendações na hora e ainda ganhe descontos exclusivos nos melhores lugares da ilha.
          </p>

          {/* CTA Button */}
          <button
            className="inline-flex items-center gap-2 bg-[#B91C1C] text-white font-semibold text-lg px-9 py-4 rounded-full shadow-lg hover:bg-[#991B1B] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: '400ms' }}
            data-testid="button-cta-hero"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero meu acesso!
          </button>

          {/* WhatsApp Mockup */}
          <div className="mt-12 flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '600ms' }}>
            <div
              className="relative"
              style={{
                animation: 'float 3s ease-in-out infinite'
              }}
            >
              {/* Phone Frame */}
              <div
                className="relative bg-white rounded-[40px] border-[10px] border-gray-900 overflow-hidden shadow-2xl"
                style={{
                  width: 'min(360px, 90vw)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 60px rgba(185, 28, 28, 0.1)'
                }}
                data-testid="whatsapp-mockup"
              >
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <ChevronLeft className="w-6 h-6 text-white" />
                  <div className="w-10 h-10 rounded-full bg-[#B91C1C] flex items-center justify-center overflow-hidden">
                    <img src={logoGuia} alt="Guia Slz" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-bold text-base">Guia Slz</span>
                  </div>
                  <Video className="w-5 h-5 text-white" />
                  <Phone className="w-5 h-5 text-white" />
                  <MoreVertical className="w-5 h-5 text-white" />
                </div>

                {/* Chat Body */}
                <div className="bg-[#ECE5DD] p-3 space-y-3" style={{ minHeight: '340px' }}>
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
                      <p className="text-gray-800 text-sm mb-2">Claro! 🍽️ Aqui vão 3 opções top:</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="border-l-2 border-[#B91C1C] pl-2">
                          <p className="font-bold text-gray-800">1. Cabana do Sol</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            <span className="text-xs">⭐ 4.8</span>
                            <span className="text-xs">💰 $$</span>
                            <span className="text-xs bg-[#FEF3C7] text-yellow-800 px-1.5 py-0.5 rounded font-medium">🎫 10% OFF</span>
                          </div>
                        </div>

                        <div className="border-l-2 border-[#B91C1C] pl-2">
                          <p className="font-bold text-gray-800">2. Churrascaria Fogo de Chão</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            <span className="text-xs">⭐ 4.6</span>
                            <span className="text-xs">💰 $$$</span>
                            <span className="text-xs bg-[#FEF3C7] text-yellow-800 px-1.5 py-0.5 rounded font-medium">🎫 15% OFF</span>
                          </div>
                        </div>

                        <div className="border-l-2 border-[#B91C1C] pl-2">
                          <p className="font-bold text-gray-800">3. Toca do Caranguejo</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            <span className="text-xs">⭐ 4.7</span>
                            <span className="text-xs">💰 $$</span>
                            <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">🎫 Bebida grátis</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-800 text-sm mt-2">Quer mais detalhes? 😊</p>
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
              <div className="absolute -top-4 -right-8 w-12 h-12 bg-[#FEF3C7] rounded-lg rotate-12 flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                <span className="text-lg">🏷️</span>
              </div>
              <div className="absolute top-1/3 -left-10 w-10 h-10 bg-[#B91C1C] rounded-full flex items-center justify-center shadow-lg" style={{ animation: 'float 2.5s ease-in-out infinite reverse' }}>
                <span className="text-base">📍</span>
              </div>
              <div className="absolute bottom-20 -right-6 w-10 h-10 bg-[#FEF3C7] rounded-full flex items-center justify-center shadow-lg" style={{ animation: 'float 2s ease-in-out infinite' }}>
                <span className="text-base">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-gray-50 border-y border-gray-200 py-6" data-testid="social-proof-bar">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-sm md:text-base font-medium text-gray-600 flex items-center justify-center gap-2 flex-wrap">
            <span>Criado por quem mapeia São Luís há 5 anos.</span>
            <span className="inline-flex items-center gap-1 text-[#B91C1C] font-semibold">
              <Instagram className="w-4 h-4" />
              @roleslz
            </span>
            <span>com <strong>330 mil seguidores</strong> e mais de <strong>1.000 estabelecimentos parceiros</strong>.</span>
          </p>
        </div>
      </section>

      {/* Product vs Alternatives Section */}
      <section className="py-16 md:py-24 bg-white" data-testid="comparison-section">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Without Guia */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-gray-900 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                Sem o Guia Inteligente
              </h3>
              <div className="space-y-4">
                {[
                  'Fica rolando o Instagram esperando aparecer algo bom',
                  'Pesquisa no Google e cai em resultado desatualizado',
                  'Manda mensagem pra vários amigos e fica esperando alguém responder',
                  'Paga preço cheio em tudo'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <XIcon className="w-3 h-3 text-red-500" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* With Guia */}
            <div className="bg-[#FEF2F2] border-2 border-[#B91C1C] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#B91C1C] text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMENDADO
              </div>
              <h3 className="font-bold text-xl text-[#B91C1C] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                Com o Guia Inteligente
              </h3>
              <div className="space-y-4">
                {[
                  'Pergunta o que quer e recebe resposta na hora',
                  'Recomendações atualizadas de quem conhece a ilha de verdade',
                  'Resposta em segundos, não em horas',
                  'Descontos exclusivos nos estabelecimentos parceiros'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section id="beneficios" className="py-20 pb-16 bg-white" data-testid="features-section">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
              BENEFÍCIOS
            </span>
            <h2
              className="font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Tudo que você precisa pra aproveitar São Luís
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Recomendações personalizadas, descontos exclusivos e respostas em segundos.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {/* Card 1: Descontos */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 min-h-[340px] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
              <h3 className="font-semibold text-gray-900 text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Descontos exclusivos pra quem usa o Guia
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Nossos estabelecimentos parceiros dão condições especiais só pra quem é assinante. A assinatura se paga no primeiro rolê!
              </p>

              {/* Mockup */}
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-start gap-2 mb-3">
                  <span className="text-lg">🍔</span>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Hamburgueria do Zé</p>
                    <p className="text-xs text-gray-500">⭐ 4.8 · Vinhais · $</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] border border-[#F59E0B] rounded-lg p-3">
                  <p className="font-bold text-[#B45309] text-sm">🎫 10% OFF</p>
                  <p className="text-xs text-[#D97706]">Exclusivo assinante</p>
                </div>
              </div>
            </div>

            {/* Card 2: Personalização */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 min-h-[340px] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
              <h3 className="font-semibold text-gray-900 text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Recomendação sob medida pro seu dia
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Fala o bairro, o quanto quer gastar, a ocasião, o horário. Ele entende tudo e te entrega exatamente o que você precisa.
              </p>

              {/* Mini WhatsApp Mockup */}
              <div className="bg-[#ECE5DD] rounded-xl p-3 space-y-2">
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] rounded-lg px-3 py-2 max-w-[85%]">
                    <p className="text-gray-800 text-xs">Jantar romântico até R$150 no Renascença?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg px-3 py-2 max-w-[90%]">
                    <p className="text-gray-800 text-xs">💑 Perfeito! Achei 3 opções especiais:</p>
                    <p className="text-gray-700 text-xs mt-1">1. Restaurante Luna 🌙</p>
                    <p className="text-gray-700 text-xs">2. Bistrô Maré Alta 🦐</p>
                    <p className="text-gray-700 text-xs">3. Casa do Chef 👨‍🍳</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Credibilidade */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 min-h-[340px] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
              <h3 className="font-semibold text-gray-900 text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                5 anos mapeando São Luís
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                O Guia foi criado pelo time do @roleslz. São 330 mil seguidores, mais de 1.000 estabelecimentos visitados e 200 milhões de views.
              </p>

              {/* Stats Mockup */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Instagram className="w-5 h-5 text-[#B91C1C]" />
                  <span className="font-bold text-gray-900">@roleslz</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <p className="font-bold text-2xl text-[#B91C1C]">330k</p>
                    <p className="text-[11px] text-gray-500 uppercase">seg.</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-2xl text-[#B91C1C]">1000+</p>
                    <p className="text-[11px] text-gray-500 uppercase">locais</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-2xl text-[#B91C1C]">200M</p>
                    <p className="text-[11px] text-gray-500 uppercase">views</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" /> Atualizado diariamente
                  </p>
                  <p className="text-xs text-gray-600 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" /> Curadoria humana + IA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Múltiplos Formatos - Centered */}
          <div className="flex justify-center mt-6">
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 min-h-[300px] max-w-[360px] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
              <h3 className="font-semibold text-gray-900 text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Manda áudio, texto ou vídeo
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Tá dirigindo? Manda um áudio. Quer digitar? Digita. O Guia entende qualquer formato e te responde na hora.
              </p>

              {/* Input Formats Mockup */}
              <div className="bg-[#ECE5DD] rounded-xl p-3 space-y-2">
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] rounded-lg px-3 py-2 flex items-center gap-2">
                    <span>🎤</span>
                    <div className="flex gap-0.5">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className={`w-1 ${i < 4 ? 'h-3 bg-gray-600' : 'h-2 bg-gray-400'} rounded-full`}></div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">0:04</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] rounded-lg px-3 py-2">
                    <p className="text-gray-800 text-xs">💬 "Pizza boa no Cohatrac?"</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg px-3 py-2">
                    <p className="text-gray-800 text-xs flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-500" /> Entendido! Aqui vão as melhores pizzarias...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-[#FDF6E3]" data-testid="how-it-works-section">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Como funciona
            </h2>
            <p
              className="text-gray-600 text-lg italic"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Simples assim. Em menos de 2 minutos você já está usando.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">Faça sua assinatura</h3>
              <p className="text-gray-500 text-sm max-w-[180px]">R$ 15 por mês. Cancela quando quiser, sem burocracia.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">Receba o acesso no WhatsApp</h3>
              <p className="text-gray-500 text-sm max-w-[180px]">Em poucos segundos você já pode começar a usar.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">Pergunte o que quiser sobre a ilha</h3>
              <p className="text-gray-500 text-sm max-w-[180px]">Restaurante, bar, evento, trânsito, praia, programa com criança...</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">Aproveite com desconto</h3>
              <p className="text-gray-500 text-sm max-w-[180px]">Use os benefícios exclusivos nos lugares parceiros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos de Perguntas Section */}
      <section className="py-20 bg-white" data-testid="examples-section">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
              EXEMPLOS
            </span>
            <h2
              className="font-bold text-gray-900"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Veja o que você pode perguntar
            </h2>
          </div>

          {/* Questions Grid */}
          <div className="grid md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {[
              'Me indica um samba ou um reggae acontecendo agora aqui em São Luís?',
              'Como está o trânsito agora na avenida Jerônimo de Albuquerque?',
              'Me indica um hamburger até 25 reais no Vinhais?',
              'Qual praia tem uma peixada com bom custo benefício?',
              'Me indica um restaurante com área kids?',
              'Uma pizza boa pelo Cohatrac?'
            ].map((question, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl px-6 py-5 flex items-center gap-3 hover:border-[#B91C1C] hover:bg-[#FEF2F2] transition-all duration-200 cursor-pointer"
              >
                <span className="text-2xl">💬</span>
                <p className="text-gray-700">{question}</p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <p className="text-gray-600 font-medium text-lg text-center mt-8 max-w-lg mx-auto">
            Você não precisa mais perder tempo pesquisando. Basta perguntar e ele vai te responder na hora!
          </p>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-white" data-testid="testimonials-section">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="font-bold text-gray-900"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              O que nossos assinantes dizem
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
              <div className="h-1.5 bg-[#EF4444]"></div>
              <div className="p-7">
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "Perguntei onde tinha um reggae bom no sábado e em 10 segundos já tinha 3 opções com endereço e tudo. E ainda ganhei desconto na entrada!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Mariana</p>
                    <p className="text-gray-500 text-sm">moradora do Calhau</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
              <div className="h-1.5 bg-[#3B82F6]"></div>
              <div className="p-7">
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "Eu usava o Google pra tudo e sempre caía em lugar fechado ou desatualizado. Agora só pergunto pro Guia. É como ter um amigo que conhece todos os cantos da cidade."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Rafael</p>
                    <p className="text-gray-500 text-sm">morador do Renascença</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
              <div className="h-1.5 bg-[#F59E0B]"></div>
              <div className="p-7">
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "Minha esposa e eu queríamos um restaurante com área kids no Renascença. Em 1 minuto tínhamos a recomendação perfeita. Virou nosso lugar favorito."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Pedro</p>
                    <p className="text-gray-500 text-sm">pai de 2 filhos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pra Quem É Section */}
      <section className="py-20 bg-gray-50" data-testid="target-audience-section">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
              PRA QUEM É
            </span>
            <h2
              className="font-bold text-gray-900"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              O Guia é perfeito pra você se...
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1000px] mx-auto">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 text-center hover:border-[#B91C1C] hover:shadow-[0_4px_20px_rgba(185,28,28,0.1)] transition-all duration-200">
              <span className="text-5xl mb-4 block">🧭</span>
              <h3 className="font-semibold text-gray-900 text-base mb-2">Quem gosta de explorar a cidade</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Você curte descobrir lugares novos mas não tem tempo de ficar pesquisando. Quer recomendação boa e rápida.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 text-center hover:border-[#B91C1C] hover:shadow-[0_4px_20px_rgba(185,28,28,0.1)] transition-all duration-200">
              <span className="text-5xl mb-4 block">💑</span>
              <h3 className="font-semibold text-gray-900 text-base mb-2">O casal sem ideia</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Toda sexta a mesma pergunta: 'onde a gente vai?'. Com o Guia, vocês decidem em 30 segundos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 text-center hover:border-[#B91C1C] hover:shadow-[0_4px_20px_rgba(185,28,28,0.1)] transition-all duration-200">
              <span className="text-5xl mb-4 block">💰</span>
              <h3 className="font-semibold text-gray-900 text-base mb-2">Quem quer economizar</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Você já ia sair de qualquer jeito. Agora sai com desconto exclusivo e a assinatura se paga sozinha.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 text-center hover:border-[#B91C1C] hover:shadow-[0_4px_20px_rgba(185,28,28,0.1)] transition-all duration-200">
              <span className="text-5xl mb-4 block">✈️</span>
              <h3 className="font-semibold text-gray-900 text-base mb-2">Turista conhecendo a ilha</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Primeira vez em São Luís? O Guia te mostra o que os locais sabem de verdade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-white" data-testid="pricing-section">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
              INVESTIMENTO
            </span>
            <h2
              className="font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Simples e acessível
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              E com os descontos exclusivos nos estabelecimentos parceiros, a assinatura se paga no primeiro rolê.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-[420px] mx-auto">
            <div className="bg-[#0F0F0F] rounded-3xl p-10 text-center shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="mb-8">
                <span className="font-bold text-white text-6xl" style={{ fontFamily: 'var(--font-heading)' }}>R$ 15</span>
                <span className="text-gray-400 text-lg">/mês</span>
              </div>

              {/* Features */}
              <div className="space-y-3.5 text-left mb-8">
                {[
                  'Recomendações ilimitadas',
                  'Descontos exclusivos em parceiros',
                  'Áudio, texto ou vídeo',
                  'Resposta em segundos',
                  'Cancele quando quiser'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300 text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full bg-[#B91C1C] text-white font-bold text-base py-4 rounded-full hover:bg-[#991B1B] hover:-translate-y-0.5 transition-all duration-200">
                Quero meu acesso!
              </button>

              <p className="text-gray-500 text-sm mt-4">
                Parcele em até 12x no cartão
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-20 bg-[#B91C1C]" data-testid="guarantee-section">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          {/* Shield Icon */}
          <div className="mb-6">
            <span className="text-6xl">🛡️</span>
          </div>

          <h2
            className="font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Seu risco é zero
          </h2>

          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Se você assinar, testar e em até 7 dias achar que não é pra você, devolvemos 100% do seu dinheiro na hora. Sem perguntas, sem burocracia. Simples assim!
          </p>

          <button className="inline-flex items-center gap-2 bg-white text-[#B91C1C] font-bold text-base px-9 py-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:bg-[#FDF6E3] hover:-translate-y-0.5 transition-all duration-200">
            Quero meu acesso!
          </button>
        </div>
      </section>

      {/* Sobre o Criador Section */}
      <section className="py-20 bg-white" data-testid="about-creator-section">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-[280px] h-[280px] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-gradient-to-br from-[#B91C1C] to-[#7F1D1D] flex items-center justify-center">
                <span className="text-white text-8xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>JL</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-3">
                CONHEÇA O CRIADOR
              </span>
              <h2
                className="font-bold text-gray-900 mb-5"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 3vw, 2rem)' }}
              >
                João Lima
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-7">
                <p>
                  Especialista em criação de conteúdo para o Instagram há mais de 5 anos. Fundador da página Rolê São Luís (@roleslz) que conta com mais de 330 mil seguidores e uma média de 5 milhões de impressões todos os meses. Já atendeu mais de 1000 empresas e atingiu mais de 200 milhões de views ao longo de todos esses anos.
                </p>
                <p>
                  Através do seu trabalho, ele ajuda empresários a faturarem mais e o público a ter experiências memoráveis na cidade.
                </p>
                <p>
                  E agora, através do Guia Inteligente, ele quer facilitar a vida de quem mora em São Luís e dos turistas que visitam a nossa cidade. Tudo em tempo real, com respostas precisas e automáticas, direto no seu WhatsApp.
                </p>
              </div>

              <button className="inline-flex items-center gap-2 bg-[#B91C1C] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#991B1B] hover:-translate-y-0.5 transition-all duration-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Quero meu acesso!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50" data-testid="faq-section">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="font-bold text-gray-900"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Perguntas frequentes
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-[700px] mx-auto bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <FAQItem
              question="Quanto custa?"
              answer="R$ 15 por mês. Menos que um açaí. E com os descontos exclusivos, a assinatura se paga no primeiro rolê."
            />
            <FAQItem
              question="Como funciona o acesso?"
              answer="Depois do pagamento, você recebe um link no e-mail pra adicionar o Guia no seu WhatsApp. Leva menos de 1 minuto pra começar a usar."
            />
            <FAQItem
              question="Preciso baixar algum aplicativo?"
              answer="Não. Funciona direto no WhatsApp que você já usa todo dia."
            />
            <FAQItem
              question="E se eu não gostar?"
              answer="Você tem 7 dias pra testar. Se não curtir, é só pedir reembolso que devolvemos 100% do valor. Sem perguntas, sem burocracia."
            />
            <FAQItem
              question="Posso perguntar qualquer coisa sobre São Luís?"
              answer="Sim! Restaurantes, bares, eventos, trânsito, praias, programas com crianças, lugares pra trabalhar remoto... O Guia foi treinado pra responder tudo sobre a cidade."
            />
            <FAQItem
              question="Funciona mesmo se eu não entendo nada de tecnologia?"
              answer="Com certeza. Se você sabe mandar mensagem no WhatsApp, você sabe usar o Guia. É só perguntar. Até criança consegue usar!"
            />
            <FAQItem
              question="A plataforma de pagamento é segura?"
              answer="Sim. Usamos a Kiwify, que é 100% segura e usada por milhares de produtos digitais no Brasil."
            />
            <FAQItem
              question="Posso parcelar?"
              answer="Sim! Você consegue parcelar em até 12x no cartão de crédito."
              isLast
            />
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-[#0F0F0F]" data-testid="final-cta-section">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.625rem)' }}
          >
            Pronto pra conhecer São Luís de verdade?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Comece agora. Sem compromisso, sem burocracia.
          </p>

          <button className="inline-flex items-center gap-2.5 bg-[#B91C1C] text-white font-bold text-lg px-12 py-5 rounded-full shadow-[0_4px_20px_rgba(185,28,28,0.4)] hover:bg-[#DC2626] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_25px_rgba(185,28,28,0.5)] transition-all duration-200">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero meu acesso!
          </button>

          <p className="text-gray-500 text-sm mt-5 flex items-center justify-center gap-2">
            🔒 Pagamento seguro via Kiwify
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] border-t border-[#1F1F1F] pt-12 pb-8" data-testid="footer">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Logo */}
          <div className="mb-10">
            <img
              src={logoGuia}
              alt="Guia Slz"
              className="h-11 w-auto brightness-0 invert"
            />
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-10">
            {/* Column 1 */}
            <div>
              <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-4">PRODUTO</h4>
              <nav className="space-y-2">
                <a href="#como-funciona" className="block text-gray-400 text-sm hover:text-white transition-colors">Como funciona</a>
                <a href="#beneficios" className="block text-gray-400 text-sm hover:text-white transition-colors">Benefícios</a>
                <a href="#precos" className="block text-gray-400 text-sm hover:text-white transition-colors">Preços</a>
              </nav>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-4">SUPORTE</h4>
              <nav className="space-y-2">
                <a href="#faq" className="block text-gray-400 text-sm hover:text-white transition-colors">FAQ</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Contato</a>
              </nav>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-4">REDES</h4>
              <nav>
                <a
                  href="https://instagram.com/roleslz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @roleslz
                </a>
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#262626] pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2026 Guia Inteligente de São Luís
              </p>
              <p className="text-gray-500 text-sm">
                Pagamento seguro via Kiwify
              </p>
              <a
                href="https://instagram.com/roleslz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer, isLast = false }: { question: string; answer: string; isLast?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={!isLast ? 'border-b border-gray-200' : ''}>
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <span className="text-gray-400 text-xl flex-shrink-0 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-6 pb-5 text-gray-600 text-[15px] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
