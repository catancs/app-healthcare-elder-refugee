import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Phone, Calendar, Hospital, Pill, ArrowLeft } from 'lucide-react';
import HelpButton from '../components/HelpButton';
import JourneyItem from '../components/JourneyItem';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';

interface JourneyMapScreenProps {
  journeySteps: { id: number; title: string; iconName: string }[];
  activeStepId: number;
}

const JourneyMapScreen: React.FC<JourneyMapScreenProps> = ({ journeySteps, activeStepId }) => {
  const navigate = useNavigate();
  const iconMap: { [key: string]: React.ReactNode } = {
    Stethoscope: <Stethoscope />,
    Phone: <Phone />,
    Calendar: <Calendar />,
    Hospital: <Hospital />,
    Pill: <Pill />
  };

  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={() => navigate(-1)}>
        <ArrowLeft />
      </button>
      <ReadAloudButton />
      <h1 className={sharedStyles.title}>My Healthcare Journey</h1>
      <div className={sharedStyles.timeline}>
        {journeySteps.map((step) => (
          <JourneyItem
            key={step.id}
            icon={iconMap[step.iconName]}
            title={step.title}
            status={step.id === activeStepId ? 'active' : step.id < activeStepId ? 'completed' : 'upcoming'}
            onClick={() => navigate(`/journey/${step.id}`)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      <HelpButton />
    </div>
  );
};

export default JourneyMapScreen; 