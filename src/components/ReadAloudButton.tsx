import React from 'react';
import { Volume2 } from 'lucide-react';
import styles from './ReadAloudButton.module.css';

const ReadAloudButton: React.FC = () => {
  const handleReadAloud = () => {
    window.alert("This would read the on-screen text aloud in the user's selected language.");
  };

  return (
    <button 
      className={styles.readAloudButton}
      onClick={handleReadAloud}
      aria-label="Read aloud"
    >
      <Volume2 size={24} />
    </button>
  );
};

export default ReadAloudButton; 