import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function useResetScroll() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 10);
  }, [location]); 
}
