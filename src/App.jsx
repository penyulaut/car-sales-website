import bmw from "./assets/bmw.jpg";
import aboutimg from "./assets/about-img.jpg";
import carengine from "./assets/car-engine.jpg";
import consultant from "./assets/consultant.jpg";
import testdrive from "./assets/testdrive.jpg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <section
        id="Home"
        className="home-section min-h-screen justify-center flex flex-col text-amber-50"
      >
        <div className="hero bg-bmw bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex flex-col">
          <div className="h-screen bg-black/60 flex flex-col justify-center items-center text-center">
            <div className="hero-title">
              <h1 className="text-5xl font-bold mb-4">
                Temukan Mobil Impian Anda
              </h1>
            </div>
            <div className="hero-subtitle mb-6">
              <p className="text-lg">
                Solusi terbaik untuk pembelian mobil baru dan bekas berkualitas
                dengan harga transparan dan layanan terpercaya.
              </p>
            </div>
            <div className="hero-buttons flex gap-4">
              <button className="btn-primary px-6 py-3 bg-white text-black font-semibold rounded transition">
                Lihat Koleksi
              </button>
              <button className="btn-secondary px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="About" className="bg-zinc-950 py-20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <div
            className="text-white text-center md:text-left md:w-1/2"
            data-aos="fade-up"
          >
            <h1 className="text-3xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-zinc-300 leading-relaxed text-2xl">
              Platform terpercaya untuk membeli
              mobil berkualitas dengan proses cepat, aman, dan transparan. Kami
              menawarkan berbagai pilihan mobil baru dan bekas yang telah
              melalui pemeriksaan ketat demi memastikan kenyamanan dan keamanan
              perjalanan Anda. Dengan layanan profesional dan ramah, kami
              berkomitmen menghadirkan pengalaman pembelian mobil yang lebih
              mudah dan menyenangkan.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="flex justify-center md:w-1/2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img
              src={aboutimg}
              alt="About"
              className="w-64 md:w-150 rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* <section>
        <div className="carousel bg-zinc-900">
          <div className="carousel-track">
            <img src={carengine} alt="" />            
            <img src={carengine} alt="" />            
            <img src={carengine} alt="" />            
            <img src={carengine} alt="" />            
            <img src={carengine} alt="" />  

            <img src={carengine} alt="" />            
            <img src={carengine} alt="" />            
            <img src={carengine} alt="" />            
            <img src={carengine} alt="" />            
            <img src={carengine} alt="" />            
          </div>
        </div>
      </section> */}

      <section id="service" className="py-20 bg-zinc-950">
        <h1 className="text-3xl text-center text-white py-9 font-bold">Layanan</h1>
        <div className="card flex flex-col md:flex-row items-center justify-around gap-10 px-6 md:px-20">
          {/* CARD 1 */}
          <div
            className="card-1 bg-zinc-900 rounded-2xl shadow-xl overflow-hidden w-100 hover:scale-105 transition transform duration-300"
            data-aos="fade-up"
          >
            <img src={carengine} alt="" />
            <div className="teks p-6 text-center text-amber-50">
              <h3 className="text-xl font-semibold mb-2">Inspeksi Mobil Profesional</h3>
              <p className="text-sm text-zinc-300">
                Pemeriksaan menyeluruh untuk memastikan kondisi mobil selalu optimal.
              </p>
              <button className="mt-4 px-4 py-2 bg-white rounded-lg text-zinc-900 font-semibold hover:bg-amber-600 transition">
                Lihat Detail
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="card-1 bg-zinc-900 rounded-2xl shadow-xl overflow-hidden w-100 hover:scale-105 transition transform duration-300"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img src={consultant} alt="" />
            <div className="teks p-6 text-center text-amber-50">
              <h3 className="text-xl font-semibold mb-2">Bantuan Konsultasi</h3>
              <p className="text-sm text-zinc-300">
                Rekomendasi mobil terbaik sesuai kebutuhan dan budget Anda.
              </p>
              <button className="mt-4 px-4 py-2 bg-white rounded-lg text-zinc-900 font-semibold hover:bg-amber-600 transition">
                Lihat Detail
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="card-1 bg-zinc-900 rounded-2xl shadow-xl overflow-hidden w-100 hover:scale-105 transition transform duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={testdrive} alt="" />
            <div className="teks p-6 text-center text-amber-50">
              <h3 className="text-xl font-semibold mb-2">Pembelian Mudah & Test Drive</h3>
              <p className="text-sm text-zinc-300">
                Nikmati proses pembelian yang cepat dan fleksibel, lengkap dengan fasilitas test drive.
              </p>
              <button className="mt-4 px-4 py-2 bg-white rounded-lg text-zinc-900 font-semibold hover:bg-amber-600 transition">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-24 px-8">
        <div className="max-w-6xl ms-10 text-white">
          {/* LEFT TEXT */}
          <h1
            className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl mb-16"
            data-aos="fade-up"
          >
            Kami membantu Anda menemukan mobil terbaik dengan pengalaman
            pembelian yang aman, nyaman, dan terpercaya.
          </h1>

          {/* STAT ROW */}
          <div
            className="bg-white/5 rounded-2xl border border-white/10 px-6 py-6 flex items-center justify-between gap-8 backdrop-blur-sm w-1/2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {/* LEFT SMALL NUMBER */}
            <div className="text-white/70 text-lg font-medium">01</div>

            {/* BIG NUMBER */}
            <div className="text-4xl md:text-5xl font-bold text-white">
              97,000
            </div>

            {/* RIGHT DESCRIPTION */}
            <div className="text-white/70 text-right text-sm md:text-base max-w-[200px]">
              Pelanggan yang puas membeli mobil melalui platform kami.
            </div>
          </div>
        </div>
      </section>

      <footer
        className="bg-zinc-900
       text-white py-16 px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND + DESCRIPTION */}
          <div>
            <h2 className="text-2xl font-bold mb-4">PenyuLaut</h2>
            <p className="text-white/70 leading-relaxed">
              Platform penjualan mobil terpercaya yang
              mengutamakan kualitas, kenyamanan, dan keamanan dalam setiap
              transaksi. Kami menyediakan berbagai pilihan mobil baru dan bekas
              yang telah terverifikasi.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#Home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#Services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <p className="font-medium text-white">Address:</p>
                Jl. Samudera Raya No. 12, Jakarta, Indonesia
              </li>
              <li>
                <p className="font-medium text-white">Email:</p>
                support@penyulaut.com
              </li>
              <li>
                <p className="font-medium text-white">Phone:</p>
                +62 812 3456 7890
              </li>
              <li>
                <p className="font-medium text-white">Working Hours:</p>
                Mon – Fri, 9:00 AM – 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} PenyuLaut. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
