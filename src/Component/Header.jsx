import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-screen-xl h-[60px] rounded-full shadow-lg flex items-center justify-around px-8 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      }`}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer text-slate-700 font-semibold hover:text-purple-600 transition-all duration-300"
          activeClass="text-purple-600"
        >
          {link.name}
        </Link>
      ))}
    </header>
  );
};

export default Header;
