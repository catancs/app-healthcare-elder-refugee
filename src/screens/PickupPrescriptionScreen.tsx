import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './PickupPrescriptionScreen.module.css';

interface PickupPrescriptionScreenProps {
  onBack: () => void;
}

const PickupPrescriptionScreen: React.FC<PickupPrescriptionScreenProps> = ({ onBack }) => {
  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={onBack}>
        <ArrowLeft />
      </button>
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
    </div>
  );
};

export default PickupPrescriptionScreen; 