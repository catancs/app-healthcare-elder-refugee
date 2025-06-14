import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Screen = 'symptomTriage' | 'gpGuidance' | 'journeyMap' | 'settings' | 'postVisitLogging';

interface NavigationContextType {
  currentScreen: Screen;
  navigateTo: (screen: Screen) => void;
  goBack: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [screenHistory, setScreenHistory] = useState<Screen[]>(['symptomTriage']);

  const navigateTo = (screen: Screen) => {
    setScreenHistory(prev => [...prev, screen]);
  };

  const goBack = () => {
    setScreenHistory(prev => prev.slice(0, -1));
  };

  return (
    <NavigationContext.Provider value={{
      currentScreen: screenHistory[screenHistory.length - 1],
      navigateTo,
      goBack
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}; 