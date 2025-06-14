import React from 'react';
import styles from './SymptomButton.module.css';

interface SymptomButtonProps {
  icon: React.ReactNode;
  text?: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const SymptomButton: React.FC<SymptomButtonProps> = ({ icon, text, onClick, style }) => {
  return (
    <button className={styles.symptomButton} onClick={onClick} style={style}>
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};

export default SymptomButton; 