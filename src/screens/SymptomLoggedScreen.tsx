import React from 'react';
import { CheckCircle } from 'lucide-react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';

const SymptomLoggedScreen: React.FC = () => {
  return (
    <>
      <ReadAloudButton />
      <div className={sharedStyles.content}>
        <CheckCircle size={64} className={sharedStyles.successIcon} />
        <h1 className={sharedStyles.title}>Symptom Logged</h1>
        <p className={sharedStyles.description}>
          Your symptom has been saved. The next step is to contact your doctor (GP) for advice.
        </p>
      </div>
    </>
  );
};

export default SymptomLoggedScreen; 