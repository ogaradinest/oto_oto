import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LetsTalkButton = ({ className = "" }) => {
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition-colors ${className}`}
      data-testid="lets-talk-button"
    >
      Let's talk
      <ArrowRight size={16} />
    </button>
  );
};

export default LetsTalkButton;
