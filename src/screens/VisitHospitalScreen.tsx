import React from 'react';
import { Hospital } from 'lucide-react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './VisitHospitalScreen.module.css';

const VisitHospitalScreen: React.FC = () => {
  return (
    <>
      <ReadAloudButton />
      <div className={sharedStyles.content}>
        <Hospital size={64} className={styles.hospitalIcon} />
        <h1 className={sharedStyles.title}>Hospital Visit</h1>
        <div className={styles.hospitalDetails}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Hospital:</span>
            <span className={styles.value}>Amsterdam UMC</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Department:</span>
            <span className={styles.value}>Cardiology</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Date:</span>
            <span className={styles.value}>Thursday, 26 October</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Time:</span>
            <span className={styles.value}>2:00 PM</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Translator:</span>
            <span className={styles.value}>Confirmed (Farsi)</span>
          </div>
        </div>
        <button 
          className={sharedStyles.primaryButton}
          onClick={() => window.alert('Directions would open in maps.')}
        >
          Get Directions
        </button>
      </div>
    </>
  );
};

export default VisitHospitalScreen; 