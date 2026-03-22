import { useLocation } from "react-router-dom";

const YourCallButton = ({ className = "" }) => {
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
      className={`inline-flex items-center justify-center bg-[#FF6B2C] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#e55a1f] transition-colors ${className}`}
      data-testid="your-call-button"
    >
      Your call
    </button>
  );
};

export default YourCallButton;
