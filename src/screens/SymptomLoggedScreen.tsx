import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Map } from 'lucide-react';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';

const SymptomLoggedScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ReadAloudButton />
      <div className={sharedStyles.content}>
        <CheckCircle size={64} className={sharedStyles.successIcon} />
        <h1 className={sharedStyles.title}>Symptom Logged</h1>
        <p className={sharedStyles.description}>
          Your symptom has been saved. The next step is to contact your doctor (GP) for advice.
        </p>

        <button
          className={sharedStyles.journeyButton}
          style={{ marginTop: '1rem', maxWidth: 260 }}
          onClick={() => navigate('/journey-map')}
        >
          <Map size={24} />
          <span>See all the steps</span>
        </button>
      </div>
    </>
  );
};

export default SymptomLoggedScreen;
