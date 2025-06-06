import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function useCounter() {
  return useContext(CounterContext);
}

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount(c => c + 1);
  const resetear = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, incrementar, resetear }}>
      {children}
    </CounterContext.Provider>
  );
}