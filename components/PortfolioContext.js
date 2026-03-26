'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [is3DMode, setIs3DMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggle3D = () => setIs3DMode(prev => !prev);

  return (
    <PortfolioContext.Provider value={{ is3DMode, toggle3D, isLoaded }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export const usePortfolio = () => useContext(PortfolioContext);
