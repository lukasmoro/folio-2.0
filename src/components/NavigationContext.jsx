import { createContext } from 'react';

export const NavigationContext = createContext({
  navigationDirection: 'none', 
  setNavigationDirection: () => {}
});
