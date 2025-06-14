import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';

interface SymptomLoggedScreenProps {
  onBack: () => void;
}

const SymptomLoggedScreen: React.FC<SymptomLoggedScreenProps> = ({ onBack }) => {
  const { navigateTo } = useNavigation();

  const handleNext = () => {
    navigateTo('gpGuidance');
  };

  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={onBack}>
        <ArrowLeft />
      </button>
      <ReadAloudButton />
      
      <div className={sharedStyles.content}>
        <CheckCircle size={64} className={sharedStyles.successIcon} />
        <h1 className={sharedStyles.title}>Symptom Logged</h1>
        <p className={sharedStyles.description}>
          Your symptom has been saved. The next step is to contact your doctor (GP) for advice.
        </p>
        <button 
          className={sharedStyles.primaryButton}
          onClick={handleNext}
        >
          Next: Contact GP
        </button>
      </div>
    </div>
  );
};

export default SymptomLoggedScreen; 