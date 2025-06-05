import { useState, useEffect } from "react";

function ControlScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 10,
      right: 10,
      background: "#eee",
      padding: "8px",
      borderRadius: "6px",
      boxShadow: "1px 1px 6px #bbb"
    }}>
      Scroll vertical: {scrollY}px
    </div>
  );
}

export default ControlScroll;