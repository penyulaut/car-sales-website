import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 py-6 px-10 text-amber-50 transition-all duration-300 z-90
        ${active ? "bg-black/10 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container flex justify-between items-center mx-auto px-4">
        <div className="hero-brand text-3xl font-bold">PenyuLaut</div>
        <div className="menu">
          <ul className={`menu-list ${menuOpen ? "open" : "flex justify-between items-center gap-8 font-bold"}`}>
            <li><a href="#Home">Beranda</a></li>
            <li><a href="#About">Tentang</a></li>
            <li><a href="#Services">Layanan</a></li>
            <li><a href="#Contact">Kontak</a></li>         
            <li className="bg-white text-zinc-900 px-5 py-2 rounded-lg"><a href="">Sign Up</a></li>   
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
