import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, Thermometer, Wind, Mic, Volume2, User , InfoIcon} from 'lucide-react';
import SymptomButton from '../components/SymptomButton';
import HelpButton from '../components/HelpButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './SymptomTriageScreen.module.css';

const SymptomTriageScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showUpdateLog, setShowUpdateLog] = useState(false);

  const handleReadAloud = () => {
    window.alert("This would read the on-screen text aloud in the user's selected language.");
  };

  const handleSymptomSelect = () => {
    navigate('/gp-guidance');
  };

  return (
    <div className={sharedStyles.screen}>
      {/* Update Log Button */}
      <button
        className={styles.updateLogButton}
        onClick={() => setShowUpdateLog(true)}
        aria-label="Update log"
      >
        <InfoIcon size={24} />
        <span>Update log</span>
      </button>


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

    {/* Update Log Modal */}
    {showUpdateLog && (
        <div className={styles.infoOverlay} onClick={() => setShowUpdateLog(false)}>
          <div className={styles.infoModal} onClick={e => e.stopPropagation()}>
            <h2>Update Log</h2>
            <p>
              - Renamed “What are your symptoms?” to “How are you feeling?” for better clarity.<br />
              - Added improved tap and hover animations on all main page buttons.<br />
              - On the GP Guidance page, enhanced the “Talk with AI translator” button text and added an info option.<br />
              - On the Symptom Logged step, added the “See all the steps” navigation button.
            </p>
            <button
              className={sharedStyles.primaryButton}
              style={{ marginTop: '1rem' }}
              onClick={() => setShowUpdateLog(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SymptomTriageScreen; 