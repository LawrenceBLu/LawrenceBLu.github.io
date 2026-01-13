import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollingUp, setScrollingUp] = useState(true);


useEffect(() => {
  let lastY = window.scrollY;

  const onScroll = () => {
    const y = window.scrollY;

    setIsAtTop(y < 10);
    setScrollingUp(y < lastY);

    lastY = y;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

const showBareNav = isAtTop;
const showFullBar = !isAtTop && scrollingUp;
const hideNav = !isAtTop && !scrollingUp;

  return (
  <>
    {/* LOGO (only when full bar is shown) */}
    <div
      className={cn(
        "fixed top-4 left-6 z-50 transition-all duration-400",
        showFullBar
          ? "opacity-0 md:opacity-100 translate-y-0"
          : "opacity-0 -translate-y-3 pointer-events-none"
      )}
    >
      <a href="#hero" className="text-lg font-bold text-foreground">
        <span className="text-primary">Lawrence</span> Lu
      </a>
    </div>

    {/* NAV CONTAINER */}
    <nav className="fixed top-0 left-0 z-40 w-full">
      <div className="relative h-14 flex items-center justify-center">

        {/* BACKGROUND BAR */}
        <div
          className={cn(
            "absolute inset-0 bg-background/70 backdrop-blur-md shadow-lg transition-all duration-400",
            showFullBar
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        />

        {/* NAV ITEMS */}
        <div
          className={cn(
            "relative z-10 flex items-center transition-all duration-400 ease-out",
            showBareNav && "translate-y-0 opacity-100",
            hideNav && "-translate-y-full opacity-0 pointer-events-none",
            showFullBar &&
              "md:translate-x-[calc(50vw-18rem)] md:opacity-100 md:translate-y-0"
          )}
        >
          <div className="hidden md:flex space-x-8 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* MOBILE MENU */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 animate-fade-in"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden",
              isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
      </div>
    </nav>

    {/* MOBILE OVERLAY */}
    
  </>
);



};