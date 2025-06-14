import React from 'react';
import { Hospital, ArrowLeft } from 'lucide-react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './VisitHospitalScreen.module.css';

interface VisitHospitalScreenProps {
  onBack: () => void;
}

const VisitHospitalScreen: React.FC<VisitHospitalScreenProps> = ({ onBack }) => {
  const handleOpenMaps = () => {
    window.alert("This would open the address in your phone's map application.");
  };

  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={onBack}>
        <ArrowLeft />
      </button>
      <ReadAloudButton />
      
      <div className={sharedStyles.content}>
        <Hospital size={64} className={styles.hospitalIcon} />
        <h1 className={sharedStyles.title}>Visit the Hospital</h1>
        
        <div className={styles.referralDetails}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Hospital:</span>
            <span className={styles.value}>OLVG, Location Oost</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Department:</span>
            <span className={styles.value}>Cardiology (Hartbewaking)</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>What to bring:</span>
            <span className={styles.value}>Your ID card, insurance card, and this referral.</span>
          </div>
        </div>

        <button 
          className={sharedStyles.primaryButton}
          onClick={handleOpenMaps}
        >
          Open in Maps
        </button>
      </div>
    </div>
  );
};

export default VisitHospitalScreen; 