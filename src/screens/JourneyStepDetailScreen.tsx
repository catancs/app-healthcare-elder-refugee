import React from 'react';
import { ArrowLeft, Phone } from 'lucide-react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './JourneyStepDetailScreen.module.css'; // Assuming this CSS file will be adjusted

interface JourneyStepDetailScreenProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onBack: () => void;
}

const JourneyStepDetailScreen: React.FC<JourneyStepDetailScreenProps> = ({ icon, title, description, onBack }) => {
  const isContactGP = title === 'Contact your GP';

  // This would be dynamic in a real app, but for the mockup, it's always open.
  const isGpOpen = true; 

  const handleCall = () => {
    if (window.confirm("Call your doctor's office now?")) {
      window.alert("This would start a call to your GP at 020-1234567...");
    }
  };

  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={onBack}>
        <ArrowLeft />
      </button>

      {/* The main content area */}
      <div className={sharedStyles.content}>
        {/* The main icon for the step */}
        <div style={{ transform: 'scale(1.5)', marginBottom: '1rem' }}>{icon}</div>

        {/* The title of the step, with a Read Aloud button */}
        <h1 className={sharedStyles.title}>
          {title}
          <ReadAloudButton />
        </h1>

        {/* Conditional rendering specifically for the "Contact your GP" screen */}
        {isContactGP ? (
          <div className={styles.actionContainer}>
            
            {/* Optional Help Block */}
            <div className={styles.actionBlock}>

            </div>

            {/* Main Action Block */}
            <div className={styles.actionBlock}>
              <div className={styles.availabilityStatus}>
                {isGpOpen ? '✅' : '❌'} 
                <span className={isGpOpen ? styles.openText : styles.closedText}>
                  Your GP is Open Now
                </span>
              </div>
              <button 
                className={sharedStyles.primaryButton}
                onClick={handleCall}
              >
                <Phone size={24} />
                Call Your Doctor
              </button>
            </div>

          </div>
        ) : (
          // Fallback for all other generic journey steps
          <p className={styles.descriptionText}>
            {description}
            <ReadAloudButton />
          </p>
        )}
      </div>
    </div>
  );
};

export default JourneyStepDetailScreen;