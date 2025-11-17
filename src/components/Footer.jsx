import { useState, useEffect } from "react";

function Footer() {
  return (
    <footer
      className="bg-zinc-900
       text-white py-16 px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* BRAND + DESCRIPTION */}
        <div>
          <h2 className="text-2xl font-bold mb-4">PenyuLaut</h2>
          <p className="text-white/70 leading-relaxed">
            Platform penjualan mobil terpercaya yang mengutamakan kualitas,
            kenyamanan, dan keamanan dalam setiap transaksi. Kami menyediakan
            berbagai pilihan mobil baru dan bekas yang telah terverifikasi.
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
  );
}

export default Footer;
