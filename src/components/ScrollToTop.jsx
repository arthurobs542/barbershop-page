import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 p-5 rounded-full shadow-lg bg-amber-500 text-white
        transition-opacity duration-500 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        hover:bg-amber-600
      `}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
