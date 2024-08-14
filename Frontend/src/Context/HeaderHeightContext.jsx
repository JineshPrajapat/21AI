import React, { createContext, useState, useEffect, useRef, useContext } from 'react';

const HeaderHeightContext = createContext();

// Provide the context to your components
export const HeaderHeightProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
        console.log('headerRef', headerRef);

      if (headerRef.current) {
        console.log("headerRef.current.offsetHeight", headerRef.current.offsetHeight)
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    console.log("headerheight context", headerHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <HeaderHeightContext.Provider value={{ headerHeight, headerRef }}>
      {children}
    </HeaderHeightContext.Provider>
  );
};

export const useHeaderHeight = () => {
  return useContext(HeaderHeightContext);
};
