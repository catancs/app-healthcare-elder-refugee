import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Map, CalendarCheck, InfoIcon } from 'lucide-react';
import HelpButton from '../components/HelpButton';
import ReadAloudButton from '../components/ReadAloudButton';
import sharedStyles from '../styles/shared.module.css';
import styles from './GPGuidanceScreen.module.css'

const GPGuidanceScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={sharedStyles.screen}>
      <button className={sharedStyles.backButton} onClick={() => navigate(-1)}>
        <ArrowLeft />
      </button>
      <h1 className={sharedStyles.title}>GP Guidance</h1>
      <div className={sharedStyles.translatorSection} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {!showChat ? (
          <>
            <div className={styles.helpRow}>
              <button
                className={sharedStyles.primaryButton}
                style={{ maxWidth: 260 }}
                onClick={() => setShowChat(true)}
              >
                Get Language Help
              </button>
              <button
                className={styles.infoButton}
                onClick={() => setShowInfo(true)}
                aria-label="More info"
              >
                <InfoIcon size={32} />
              </button>
            </div>
          </>
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


      {showInfo && (
        <div className={styles.infoOverlay} onClick={() => setShowInfo(false)}>
          <div className={styles.infoModal} onClick={e => e.stopPropagation()}>
            <p>This is a private tool to help you translate your words. No one will hear you.</p>
            <button
              className={sharedStyles.primaryButton}
              style={{ marginTop: '1rem' }}
              onClick={() => setShowInfo(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default GPGuidanceScreen; 