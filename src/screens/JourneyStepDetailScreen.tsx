import React from 'react';
import { Phone } from 'lucide-react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './JourneyStepDetailScreen.module.css';

interface JourneyStepDetailScreenProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const JourneyStepDetailScreen: React.FC<JourneyStepDetailScreenProps> = ({ icon, title, description }) => {
  const isContactGP = title === 'Contact your GP';
  const isGpOpen = true;
  const handleCall = () => {
    if (window.confirm("Call your doctor's office now?")) {
      window.alert("This would start a call to your GP at 020-1234567...");
    }
  };

  return (
    <>
      <div className={sharedStyles.content}>
        <div style={{ transform: 'scale(1.5)', marginBottom: '1rem' }}>{icon}</div>
        <h1 className={sharedStyles.title}>
          {title}
          <ReadAloudButton />
        </h1>
        {isContactGP ? (
          <div className={styles.actionContainer}>
            <div className={styles.actionBlock}></div>
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
          <p className={styles.descriptionText}>
            {description}
            <ReadAloudButton />
          </p>
        )}
      </div>
    </>
  );
};

export default JourneyStepDetailScreen;