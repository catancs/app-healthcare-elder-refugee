import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, Thermometer, Wind, Mic, Volume2, User } from 'lucide-react';
import SymptomButton from '../components/SymptomButton';
import HelpButton from '../components/HelpButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './SymptomTriageScreen.module.css';

const SymptomTriageScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleReadAloud = () => {
    window.alert("This would read the on-screen text aloud in the user's selected language.");
  };

  const handleSymptomSelect = () => {
    navigate('/gp-guidance');
  };

  return (
    <div className={sharedStyles.screen}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '5rem' }}>
        <button
          className={sharedStyles.primaryButton}
          style={{ maxWidth: 180, display: 'flex', alignItems: 'center', gap: 8 }}
          onClick={() => navigate('/settings')}
        >
          <User size={20} />
          My Information
        </button>
        <button 
          className={styles.readAloudButton}
          onClick={handleReadAloud}
          aria-label="Read aloud"
        >
          <Volume2 size={24} />
        </button>
      </div>
      <div className={sharedStyles.centeredContent}>
        <h1 className={sharedStyles.title}>How are you feeling?</h1>
        <div className={sharedStyles.singleColumnGrid}>
          <SymptomButton icon={<BrainCircuit size={48} />} onClick={handleSymptomSelect} />
          <SymptomButton icon={<Thermometer size={48} />} onClick={handleSymptomSelect} />
          <SymptomButton icon={<Wind size={48} />} onClick={handleSymptomSelect} />
        </div>
        <div 
          className={styles.voiceInput}
          onClick={() => window.alert('Voice recognition would be activated here to listen for symptoms.')}
        >
          <Mic size={64} />
          <span>Tell me what's wrong</span>
        </div>
      </div>
      <HelpButton />
    </div>
  );
};

export default SymptomTriageScreen; 