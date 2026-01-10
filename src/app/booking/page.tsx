"use client";

import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();

  const latitude = -8.360794;
  const longitude = 114.6162595;

  // Contoh gambar untuk galeri
  const galleryImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex flex-col items-center justify-start">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-down">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Lokasi Warnet Kami 📍
          </h1>
          <p className="text-sm sm:text-base text-purple-300 max-w-xl mx-auto">
            Temukan lokasi kami dan mulai petualanganmu di SKY MOON NET
          </p>
        </div>

        {/* Map Wrapper */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 transform transition-all duration-700 hover:scale-[1.01] animate-fade-in">
          <iframe
            title="Lokasi Warnet"
            src={`https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 animate-fade-in-up">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 shadow-lg"
          >
            Buka Navigasi 🧭
          </a>

          <a
            href={`https://earth.google.com/web/@${latitude},${longitude},50a,0d,60y`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-green-500/40 shadow-lg"
          >
            Google Earth 🌍
          </a>

          <button
            onClick={() => router.back()}
            className="px-6 sm:px-8 py-3 sm:py-4 border border-purple-500 rounded-lg font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-105"
          >
            Kembali
          </button>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Suasana dan Fasilitas Kami
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
