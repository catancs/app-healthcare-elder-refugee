import React from 'react';
import { BrainCircuit, Thermometer, Wind, Mic, Volume2 } from 'lucide-react';
import SymptomButton from '../components/SymptomButton';
import HelpButton from '../components/HelpButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './SymptomTriageScreen.module.css';

interface SymptomTriageScreenProps {
  onSymptomSelect: () => void;
}

const SymptomTriageScreen: React.FC<SymptomTriageScreenProps> = ({ onSymptomSelect }) => {
  const handleReadAloud = () => {
    window.alert("This would read the on-screen text aloud in the user's selected language.");
  };

  return (
    <div className={sharedStyles.screen}>
      <button 
        className={styles.readAloudButton}
        onClick={handleReadAloud}
        aria-label="Read aloud"
      >
        <Volume2 size={24} />
      </button>
      <div className={sharedStyles.centeredContent}>
        <h1 className={sharedStyles.title}>What are your symptoms?</h1>
        <div className={sharedStyles.singleColumnGrid}>
          <SymptomButton icon={<BrainCircuit size={48} />} onClick={onSymptomSelect} />
          <SymptomButton icon={<Thermometer size={48} />} onClick={onSymptomSelect} />
          <SymptomButton icon={<Wind size={48} />} onClick={onSymptomSelect} />
        </div>
        <div 
          className={styles.voiceInput}
          onClick={() => window.alert('Voice recognition would be activated here to listen for symptoms.')}
        >
          <Mic size={48} />
          <span>Or speak your symptom</span>
        </div>
      </div>
      <HelpButton />
    </div>
  );
};

export default SymptomTriageScreen; 