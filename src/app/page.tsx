'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStartPlaying = () => {
    setIsLoading(true);
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
      // Navigasi ke booking page
      router.push('/booking');
    }, 1500);
  };

  const handleViewPackages = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPackage = (packageName: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Anda memilih paket ${packageName}! Silakan lakukan pembayaran di kasir. 💳`);
    }, 1000);
  };

  const handleContactUs = () => {
    const phoneNumber = "6281234567890"; // tanpa + dan spasi
    const message = encodeURIComponent(
      "Halo, saya ingin bertanya tentang layanan Anda."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo/Icon */}
            <div className={`mb-8 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                <img
                  src="/LOGO.png"
                  alt="Logo"
                  className="w-50 h-50 object-contain filter brightness-0 invert"
                />
              </div>
            </div>

            {/* Main Title */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              SKY<span className="text-purple-400">MOON</span> NET
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl mb-8 text-gray-300 transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block animate-pulse">🎮</span> 
              <span className="ml-2">NEW GAMING ZONE IN NEGARA</span>
              <span className="inline-block animate-pulse ml-2">🎮</span>
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button 
                onClick={handleStartPlaying}
                disabled={isLoading}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Loading...
                  </>
                ) : (
                  <>
                    Lihat Langsung
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </>
                )}
              </button>
              <button 
                onClick={handleViewPackages}
                className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-purple-400 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Lihat Paket
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scroll Indicator
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div> */}
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Fasilitas Premium
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "💻",
                  title: "PC Gaming High-End",
                  description: "RTX 3050, Intel, 16GB RAM DDR4, CCBoot-Booster"
                },
                {
                  icon: "🌐",
                  title: "Internet Faster",
                  description: "200 Mbps Biznet Metronet Connection"
                },
                {
                  icon: "🎧",
                  title: "Gaming Gear Premium",
                  description: "Mechanical keyboard, Gaming mouse, Headset"
                },
                {
                  icon: "🪑",
                  title: "Comfortable Gaming Chair",
                  description: "Ergonomic design for long gaming sessions"
                },
                {
                  icon: "🍕",
                  title: "Snack & Minuman",
                  description: "Menu lengkap untuk energi gaming"
                },
                {
                  icon: "🏆",
                  title: "Turnamen & Event",
                  description: "Kompetisi dengan hadiah menarik"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-4xl mb-4 animate-pulse">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Paket Harga
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "10K",
                  duration: "/jam",
                  features: ["PC Gaming High Spec", "Internet 100 Mbps", "Gaming Chair"],
                  popular: false
                },
                {
                  name: "Member",
                  price: "Start 8K",
                  duration: "/jam",
                  features: [
                    "PC Gaming High-Spec",
                    "Internet 100 Mbps",
                    "Gaming Chair",
                    "Member 3K (sekali bayar)",
                    "Harga Lebih Murah"
                  ],
                  popular: true
                },
                {
                  name: "Happy Hours",
                  price: "Start 20K",
                  duration: "/jam",
                  features: [
                    "PC Gaming High-Spec",
                    "Internet 100 Mbps",
                    "Gaming Chair",
                    "Paket jam lebih hemat",
                    "Gratis Sewa Game"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div 
                  key={index}
                  className={`relative ${plan.popular ? 'scale-105' : ''} transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute z-50 -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      POPULAR
                    </div>
                  )}
                  <div className={`bg-gray-900/50 backdrop-blur-sm border ${plan.popular ? 'border-purple-500' : 'border-gray-700'} rounded-xl p-8 h-full hover:bg-purple-900/30 transition-all duration-300`}>
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{plan.price}</span>
                      <span className="text-lg text-gray-400">{plan.duration}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol utama di bawah grid */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => window.location.href = '/pricing'}
                className="py-4 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl text-lg transition-all duration-300"
              >
                Lihat Semua Paket
              </button>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-300 mb-12">Siap untuk pengalaman gaming terbaik?</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-all duration-300 cursor-pointer transform hover:scale-105" onClick={handleStartPlaying}>
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2 text-purple-400">Lokasi</h3>
                <p className="text-gray-400">Lelateng, Kabupaten Jembrana, Bali</p>
                <p className="text-sm text-purple-400 mt-2">Klik untuk info kontak</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-all duration-300 cursor-pointer transform hover:scale-105" onClick={handleContactUs}>
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2 text-purple-400">Kontak</h3>
                <p className="text-gray-400">087751790082</p>
                <p className="text-sm text-purple-400 mt-2">Klik untuk info kontak</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Jam Operasional</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div className="flex justify-between">
                  <span className="text-gray-300">Senin - Minggu</span>
                  <span className="text-purple-400 font-bold">24 Jam</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-300">Libur Nasional</span>
                  <span className="text-purple-400 font-bold">24 Jam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            {/* Social Media Section */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Follow Us
              </h3>
              <p className="text-gray-400 mb-8">Ikuti kami di social media untuk update terbaru!</p>
              
              <div className="flex justify-center items-center gap-6 mb-8">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/skymoon_net/?hl=id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Instagram
                  </span>
                </a>

                {/* Facebook */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Facebook
                  </span>
                </a>

                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@skymoon_nett?_r=1&_t=ZS-917HJwFJMxR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-black via-gray-800 to-black rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-500/50 border border-gray-600">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    TikTok
                  </span>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 mb-8"></div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 mb-4">© 2024 SkyMoon Net. All rights reserved.</p>
              <div className="flex justify-center space-x-6">
                <span className="text-2xl hover:text-purple-400 transition-colors cursor-pointer">🎮</span>
                <span className="text-2xl hover:text-purple-400 transition-colors cursor-pointer">🕹️</span>
                <span className="text-2xl hover:text-purple-400 transition-colors cursor-pointer">🎯</span>
                <span className="text-2xl hover:text-purple-400 transition-colors cursor-pointer">🏆</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes animation-delay-2000 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}