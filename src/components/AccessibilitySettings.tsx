import React, { useState } from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { Globe, Settings, X } from 'lucide-react';
import styles from './AccessibilitySettings.module.css';

const AccessibilitySettings: React.FC = () => {
  const { highContrast, toggleHighContrast, textSize, setTextSize } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.settingsContainer}>
      {!isOpen ? (
        <button 
          className={styles.settingsButton}
          onClick={() => setIsOpen(true)}
          aria-label="Open settings menu"
        >
          <Settings size={24} />
        </button>
      ) : (
        <div className={styles.settings}>
          <div className={styles.settingsHeader}>
            <h2>Settings</h2>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close settings menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className={styles.settingsSection}>
            <h3>Language</h3>
            <button
              className={styles.languageButton}
              onClick={() => window.alert('Language selection would appear here, offering native languages like Arabic, Farsi, or Tigrinya.')}
            >
              <Globe size={20} />
              <span>Change Language</span>
            </button>
          </div>

          <div className={styles.settingsSection}>
            <h3>Accessibility</h3>
            <div className={styles.setting}>
              <label className={styles.settingLabel}>
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={toggleHighContrast}
                />
                <span>High Contrast Mode</span>
              </label>
            </div>

            <div className={styles.setting}>
              <label className={styles.settingLabel}>Text Size:</label>
              <select
                value={textSize}
                onChange={(e) => setTextSize(e.target.value as 'default' | 'large' | 'huge')}
                className={styles.select}
              >
                <option value="default">Default</option>
                <option value="large">Large</option>
                <option value="huge">Huge</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilitySettings; 