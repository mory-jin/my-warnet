'use client';

import { useRouter } from 'next/navigation';

export default function PricingPage() {
  const router = useRouter();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-[#050b1f] to-black">
      <div className="max-w-7xl mx-auto">

        {/* BACK BUTTON */}
        <div className="mb-10">
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-3 px-5 py-2 
            rounded-lg border border-cyan-500/40 
            bg-cyan-500/10 hover:bg-cyan-500/20
            text-cyan-400 font-semibold transition"
          >
            <span className="group-hover:-translate-x-1 transition">←</span>
            Back
          </button>
        </div>

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
            bg-clip-text text-transparent animate-pulse">
            Paket Harga Sky Moon Net
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Harga turun bareng hujan 🌧️ — performa tetap maksimal 🚀
            <br/>
            Pilih paket terbaik sesuai jam mainmu.
          </p>
        </div>

        {/* PAKET WAKTU */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              title: 'Paket Pagi Hemat',
              price: '20K',
              time: '07.00 - 11.00',
              duration: '4 Jam',
              desc: 'Gas gaming pagi biar mood naik!',
              highlight: true
            },
            {
              title: 'Paket Siang Santai',
              price: '28K',
              time: '11.00 - 16.00',
              duration: '5 Jam',
              desc: 'Santai sambil main, istirahat makin seru'
            },
            {
              title: 'Paket Malam Gaming',
              price: '48K',
              time: '22.00 - 06.00',
              duration: '8 Jam',
              desc: 'Begadang tanpa mikir harga 🔥'
            }
          ].map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border backdrop-blur 
              transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]
              ${p.highlight
                ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/10'
                : 'border-blue-900 bg-blue-950/40'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-4 right-4 bg-cyan-500 text-black 
                  px-3 py-1 rounded-full text-sm font-bold">
                  BEST DEAL
                </span>
              )}

              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-6">{p.desc}</p>

              <div className="text-4xl font-extrabold text-white mb-2">
                {p.price}
              </div>

              <ul className="text-gray-300 space-y-2">
                <li>⏱ {p.duration} full</li>
                <li>🕒 {p.time}</li>
                <li>🎮 Gratis sewa game</li>
                <li>⚡ Harga lebih hemat</li>
              </ul>
            </div>
          ))}
        </div>

        {/* MEMBER PACKAGE */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center
            bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Paket Member Spesial
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: 'Member',
                price: '8K / jam',
                perHour: 'Normal 10K / jam',
                discount: 'Diskon 2K',
                popular: true
              },
              {
                title: 'Member 1.5 Jam',
                price: '12K',
                perHour: '8K / jam',
                discount: '-'
              },
              {
                title: 'Member 6 Jam',
                price: '45K',
                perHour: '7.5K / jam',
                discount: 'Diskon 2.5K',
                popular: true
              },
              {
                title: 'Member 10 Jam',
                price: '70K',
                perHour: '7K / jam',
                discount: 'Diskon 3K'
              }
            ].map((m, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-10 border 
                transition-all duration-500 hover:scale-105
                ${m.popular
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-600/20 to-blue-600/10'
                  : 'border-blue-800 bg-blue-950/40'
                }`}
              >
                {m.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2
                    bg-gradient-to-r from-cyan-400 to-blue-500
                    px-4 py-1 rounded-full text-black font-bold text-sm">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {m.title}
                </h3>

                <div className="text-gray-300 space-y-2 mb-6">
                  <p>💸 {m.perHour}</p>
                  <p>🔥 {m.discount}</p>
                </div>

                <div className="text-4xl font-extrabold text-white">
                  {m.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Siap push rank atau mabar sampai pagi?
          </p>
          <a
            href="https://discord.com/invite/AhsUgvCq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-xl font-bold text-lg
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:from-cyan-400 hover:to-blue-500
            transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            Request Game di Discord
          </a>
        </div>

      </div>
    </section>
  );
}
