import { useState, useEffect } from "react";

function RelojDigital() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", fontSize: "2em", margin: "40px" }}>
      {hora.toLocaleTimeString()}
    </div>
  );
}

export default RelojDigital;