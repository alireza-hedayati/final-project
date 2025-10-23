import { useState, useEffect } from "react";

const useIsMobile = (maxWidth = 1024) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);


    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;
