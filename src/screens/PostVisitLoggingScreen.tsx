import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pill, Hospital, ArrowLeft } from 'lucide-react';
import SymptomButton from '../components/SymptomButton';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';

const PostVisitLoggingScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={() => navigate(-1)}>
        <ArrowLeft />
      </button>
      <ReadAloudButton />
      <div className={sharedStyles.centeredContent}>
        <h1 className={sharedStyles.title}>What happened at your appointment?</h1>
        <div className={sharedStyles.singleColumnGrid}>
          <SymptomButton
            icon={<Pill size={48} />}
            text="I got a prescription"
            onClick={() => {
              window.alert("Journey Updated! The 'Pick up Prescription' step is now active.");
              navigate('/journey/5');
            }}
            style={{ fontSize: '1.2rem' }}
          />
          <SymptomButton
            icon={<Hospital size={48} />}
            text="I was referred to the hospital"
            onClick={() => {
              window.alert("Journey Updated! The 'Visit the Hospital' step is now active.");
              navigate('/journey/4');
            }}
            style={{ fontSize: '1.2rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostVisitLoggingScreen; 