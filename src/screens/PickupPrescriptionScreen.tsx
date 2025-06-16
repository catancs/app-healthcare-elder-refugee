import React from 'react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './PickupPrescriptionScreen.module.css';

const PickupPrescriptionScreen: React.FC = () => {
  return (
    <>
      <ReadAloudButton />
      <div className={sharedStyles.content}>
        <h1 className={sharedStyles.title}>Pick up Prescription</h1>
        <div className={styles.qrCodeContainer}>
          <img 
            src="/qr-code.png" 
            alt="Prescription QR Code" 
            className={styles.qrCode}
          />
        </div>
        <p className={styles.instruction}>
          Please show this code to the pharmacist. They will scan it to get your medicine.
        </p>
      </div>
    </>
  );
};

export default PickupPrescriptionScreen; 