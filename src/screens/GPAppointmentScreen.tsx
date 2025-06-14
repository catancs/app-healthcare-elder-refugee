import React from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './GPAppointmentScreen.module.css';

interface GPAppointmentScreenProps {
  onBack: () => void;
}

const GPAppointmentScreen: React.FC<GPAppointmentScreenProps> = ({ onBack }) => {
  const handleAddToCalendar = () => {
    window.alert("This would open the phone's calendar.");
  };

  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={onBack}>
        <ArrowLeft />
      </button>
      <ReadAloudButton />
      
      <div className={sharedStyles.content}>
        <Calendar size={64} className={styles.calendarIcon} />
        <h1 className={sharedStyles.title}>Your GP Appointment</h1>
        
        <div className={styles.appointmentDetails}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Date:</span>
            <span className={styles.value}>Tuesday, 24 October</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Time:</span>
            <span className={styles.value}>10:30 AM</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Address:</span>
            <span className={styles.value}>Medisch Centrum Oost, Amsterdam</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Translator:</span>
            <span className={styles.value}>Confirmed (Farsi)</span>
          </div>
        </div>

        <button 
          className={sharedStyles.primaryButton}
          onClick={handleAddToCalendar}
        >
          Add to my Calendar
        </button>
      </div>
    </div>
  );
};

export default GPAppointmentScreen; 