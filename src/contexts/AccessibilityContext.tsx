import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  textSize: 'default' | 'large' | 'huge';
  setTextSize: (size: 'default' | 'large' | 'huge') => void;
  isReadAloudEnabled: boolean;
  setIsReadAloudEnabled: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [textSize, setTextSize] = useState<'default' | 'large' | 'huge'>('default');
  const [isReadAloudEnabled, setIsReadAloudEnabled] = useState(false);

  const toggleHighContrast = () => {
    window.alert('High Contrast Mode is a mock feature in this prototype.');
  };

  return (
    <AccessibilityContext.Provider value={{
      highContrast: false,
      toggleHighContrast,
      textSize,
      setTextSize,
      isReadAloudEnabled,
      setIsReadAloudEnabled
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
}; 