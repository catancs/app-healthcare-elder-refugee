import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Map, CalendarCheck } from 'lucide-react';
import HelpButton from '../components/HelpButton';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';

const GPGuidanceScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);

  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={() => navigate(-1)}>
        <ArrowLeft />
      </button>
      <h1 className={sharedStyles.title}>GP Guidance</h1>
      <div className={sharedStyles.translatorSection} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {!showChat ? (
          <button
            className={sharedStyles.primaryButton}
            style={{ maxWidth: 260, margin: '0 auto' }}
            onClick={() => setShowChat(true)}
          >
            Talk with AI translator
          </button>
        ) : (
          <>
            <div className={sharedStyles.userBubble}>I have a stomach ache.</div>
            <div className={sharedStyles.aiBubble}>Ik heb buikpijn.</div>
          </>
        )}
      </div>
      <button className={sharedStyles.journeyButton} onClick={() => navigate('/journey-map')}>
        <Map size={32} />
        <span>My Journey</span>
      </button>
      <button 
        className={sharedStyles.primaryButton} 
        style={{ marginTop: '1rem' }}
        onClick={() => navigate('/post-visit-logging')}
      >
        <CalendarCheck size={24} />
        <span>I have made an appointment</span>
      </button>
      <ReadAloudButton />
      <HelpButton />
    </div>
  );
};

export default GPGuidanceScreen; 