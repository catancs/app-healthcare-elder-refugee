import React from 'react';
import { Phone, Heart } from 'lucide-react';
import styles from './HelpButton.module.css';

const HelpButton: React.FC = () => {
  const handleHelpClick = () => {
    if (window.confirm('Call your trusted contact for help?')) {
      window.alert('Simulating call to your trusted contact for help...');
    }
  };

  return (
    <button className={styles.helpButton} onClick={handleHelpClick}>
      <Phone />
      Call for Help
      <Heart />
    </button>
  );
};

export default HelpButton; 