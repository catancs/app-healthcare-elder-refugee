import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import sharedStyles from '../styles/shared.module.css';
import styles from './JourneyNavigation.module.css';

interface JourneyNavigationProps {
  currentStepId: number;
  totalSteps: number;
}

const JourneyNavigation: React.FC<JourneyNavigationProps> = ({ currentStepId, totalSteps }) => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (currentStepId > 1) {
      navigate(`/journey/${currentStepId - 1}`);
    }
  };

  const handleNext = () => {
    if (currentStepId < totalSteps) {
      navigate(`/journey/${currentStepId + 1}`);
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.navigationContainer}>
      <button
        className={`${sharedStyles.navigationButton} ${styles.navButton}`}
        onClick={handlePrevious}
        disabled={currentStepId <= 1}
        aria-label="Previous step"
      >
        <ArrowLeft size={24} />
        <span>Previous</span>
      </button>

      <button
        className={`${sharedStyles.navigationButton} ${styles.navButton}`}
        onClick={handleHome}
        aria-label="Go to home"
      >
        <Home size={24} />
        <span>Home</span>
      </button>

      <button
        className={`${sharedStyles.navigationButton} ${styles.navButton}`}
        onClick={handleNext}
        disabled={currentStepId >= totalSteps}
        aria-label="Next step"
      >
        <span>Next</span>
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default JourneyNavigation; 