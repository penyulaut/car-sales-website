import bmw from "./assets/bmw.jpg";
import aboutimg from "./assets/about-img.jpg";
import carengine from "./assets/car-engine.jpg";
import consultant from "./assets/consultant.jpg";
import testdrive from "./assets/testdrive.jpg";
import sedan from "./assets/sedan.jpg";
import sedan2 from "./assets/sedan2.jpg";
import blackmini from "./assets/blackmini.jpg";
import { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";

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
              Platform terpercaya untuk membeli mobil berkualitas dengan proses
              cepat, aman, dan transparan. Kami menawarkan berbagai pilihan
              mobil baru dan bekas yang telah melalui pemeriksaan ketat demi
              memastikan kenyamanan dan keamanan perjalanan Anda. Dengan layanan
              profesional dan ramah, kami berkomitmen menghadirkan pengalaman
              pembelian mobil yang lebih mudah dan menyenangkan.
            </p>
            <div className="mt-4">
              <button className="bg-white px-7 py-2 text-xl text-black rounded-3xl font-medium">
                Lihat
              </button>
            </div>
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

      <section className="py-20 bg-zinc-950">
        <div>
          <div className="card flex flex-col md:flex-row items-center justify-around gap-10 px-6 md:px-20">
            {/* CARD 1 */}
            <div className="card-1rounded-2xl shadow-xl overflow-hidden w-120 hover:scale-105 transition transform duration-300">
              <div className="teks p-6 text-amber-50 flex items-center gap-4">
                <div>
                  <i className="fa-solid fa-road text-7xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Inspeksi Mobil Profesional
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Pemeriksaan menyeluruh untuk memastikan kondisi mobil selalu optimal.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="card-1rounded-2xl shadow-xl overflow-hidden w-120 hover:scale-105 transition transform duration-300">
              <div className="teks p-6 text-amber-50 flex items-center gap-4">
                <div>
                  <i className="fa-solid fa-handshake-angle text-7xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Bantuan Konsultasi
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Rekomendasi mobil terbaik sesuai kebutuhan dan budget Anda.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="card-1rounded-2xl shadow-xl overflow-hidden w-120 hover:scale-105 transition transform duration-300">
              <div className="teks p-6 text-amber-50 flex items-center gap-4">
                <div>
                  <i className="fa-solid fa-car text-7xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Pembelian Mudah & Test Drive
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Nikmati proses pembelian yang cepat dan fleksibel, lengkap
                    dengan fasilitas test drive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-20 bg-zinc-950">
        <div className="card flex flex-col md:flex-row items-center justify-around gap-10 px-6 md:px-20">
          <div
            className="relative group bg-zinc-900 rounded-2xl shadow-xl overflow-hidden w-120 cursor-pointer"
            data-aos="fade-up"
          >
            <img
              src={sedan}
              alt=""
              className="object-cover transition duration-500 group-hover:opacity-20 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500 px-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Inspeksi Mobil Profesional
              </h3>
              <p className="text-zinc-300 text-sm mb-4">
                Kami memastikan setiap detail mobil diperiksa secara teliti—
                mulai dari mesin, kelistrikan, rem, hingga keselamatan
                berkendara.
              </p>
              <button className="px-5 py-2 bg-white rounded-lg text-zinc-900 font-semibold hover:bg-amber-600 transition">
                Lihat Detail
              </button>
            </div>
          </div>

          <div
            className="relative group bg-zinc-900 rounded-2xl shadow-xl overflow-hidden w-120 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img
              src={blackmini}
              alt=""
              className="object-cover transition duration-500 group-hover:opacity-20 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500 px-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Inspeksi Mobil Profesional
              </h3>
              <p className="text-zinc-300 text-sm mb-4">
                Kami memastikan setiap detail mobil diperiksa secara teliti—
                mulai dari mesin, kelistrikan, rem, hingga keselamatan
                berkendara.
              </p>
              <button className="px-5 py-2 bg-white rounded-lg text-zinc-900 font-semibold hover:bg-amber-600 transition">
                Lihat Detail
              </button>
            </div>
          </div>

          <div
            className="relative group bg-zinc-900 rounded-2xl shadow-xl overflow-hidden w-120 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={sedan2}
              alt=""
              className="object-cover transition duration-500 group-hover:opacity-20 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500 px-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Inspeksi Mobil Profesional
              </h3>
              <p className="text-zinc-300 text-sm mb-4">
                Kami memastikan setiap detail mobil diperiksa secara teliti—
                mulai dari mesin, kelistrikan, rem, hingga keselamatan
                berkendara.
              </p>
              <button className="px-5 py-2 bg-white rounded-lg text-zinc-900 font-semibold hover:bg-amber-600 transition">
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
            className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mb-16"
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
    </>
  );
}

export default App;
