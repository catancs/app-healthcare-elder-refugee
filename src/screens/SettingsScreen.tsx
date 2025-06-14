import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './SettingsScreen.module.css';

interface SettingsScreenProps {
  onBack: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={onBack}>
        <ArrowLeft />
      </button>
      <ReadAloudButton />
      <h1 className={sharedStyles.title}>My Information</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Personal Details</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input className={styles.input} value="Zahra Ahmadi" readOnly />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Date of Birth</label>
          <input className={styles.input} value="01-01-1955" readOnly />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Trusted Contact</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Phone Number</label>
          <input className={styles.input} value="+31 6 1234 5678" readOnly />
        </div>
      </div>

      <button
        className={sharedStyles.primaryButton}
        style={{ marginTop: '2rem', width: '100%', maxWidth: 320 }}
        onClick={() => window.alert('Information Saved.')}
      >
        Save
      </button>
    </div>
  );
};

export default SettingsScreen; 