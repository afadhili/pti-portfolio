import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lists = [
    {
      id: 1,
      name: "Home",
      href: "#hero",
    },
    {
      id: 2,
      name: "About",
      href: "#about",
    },
    {
      id: 3,
      name: "Skills",
      href: "#skills",
    },
    {
      id: 4,
      name: "Projects",
      href: "#projects",
    },
    {
      id: 5,
      name: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">
          {"</>"} aifadh.
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {lists.map((list) => (
            <a
              key={list.id}
              href={list.href}
              className="relative text-foreground hover:text-primary transition-colors duration-300 after:content-[''] after:w-0 after:h-0.5 after:bg-primary after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 hover:after:w-[80%]"
            >
              {list.name}
            </a>
          ))}
        </nav>

        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-card/80 backdrop-blur-md shadow-sm py-4 px-4">
            <ul className="flex flex-col space-y-4">
              {lists.map((list) => (
                <li key={list.id}>
                  <a
                    href={list.href}
                    className="block text-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
