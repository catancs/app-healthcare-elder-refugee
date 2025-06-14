import React, { useState } from 'react';
import { Stethoscope, Phone, Calendar, Hospital, Pill, UserCircle } from 'lucide-react';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { AccessibilityProvider, useAccessibility } from './contexts/AccessibilityContext';
import SymptomTriageScreen from './screens/SymptomTriageScreen';
import GPGuidanceScreen from './screens/GPGuidanceScreen';
import JourneyMapScreen from './screens/JourneyMapScreen';
import JourneyStepDetailScreen from './screens/JourneyStepDetailScreen';
import SymptomLoggedScreen from './screens/SymptomLoggedScreen';
import GPAppointmentScreen from './screens/GPAppointmentScreen';
import VisitHospitalScreen from './screens/VisitHospitalScreen';
import PickupPrescriptionScreen from './screens/PickupPrescriptionScreen';
import SettingsScreen from './screens/SettingsScreen';
import PostVisitLoggingScreen from './screens/PostVisitLoggingScreen';
import AccessibilitySettings from './components/AccessibilitySettings';
import './styles/theme.css';

const journeySteps = [
  { id: 1, title: 'Symptom Logged', iconName: 'Stethoscope' },
  { id: 2, title: 'Contact your GP', iconName: 'Phone' },
  { id: 3, title: 'GP Appointment', iconName: 'Calendar' },
  { id: 4, title: 'Visit the Hospital', iconName: 'Hospital' },
  { id: 5, title: 'Pick up Prescription', iconName: 'Pill' }
];

const iconMap: { [key: string]: React.ReactNode } = {
  Stethoscope: <Stethoscope size={64} />,
  Phone: <Phone size={64} />,
  Calendar: <Calendar size={64} />,
  Hospital: <Hospital size={64} />,
  Pill: <Pill size={64} />
};

const stepDescriptions: { [key: number]: string } = {
  2: 'Contact your GP to discuss your symptoms. You can use the AI translator to help communicate in Dutch. Your GP will help determine if you need an appointment or if they can provide advice over the phone. Remember to have your insurance information ready.',
  3: 'This is where you can see details about your GP appointment. Remember to bring your ID and any relevant documents.',
  4: 'This is where you can see details about visiting the hospital. Make sure to follow the instructions from your doctor.',
  5: 'This is where you can see details about picking up your prescription. Visit your local pharmacy with your prescription.'
};

const AppContent: React.FC = () => {
  const { currentScreen, navigateTo, goBack } = useNavigation();
  const { highContrast, textSize } = useAccessibility();
  const [activeStepId, setActiveStepId] = useState(1);
  const [viewingStepId, setViewingStepId] = useState<number | null>(null);

  const handleSymptomSelect = () => {
    setActiveStepId(2);
    navigateTo('gpGuidance');
  };

  const handleViewJourney = () => {
    navigateTo('journeyMap');
  };

  const handleGoBackToSymptomTriage = () => {
    navigateTo('symptomTriage');
  };

  const handleStepSelect = (id: number) => {
    setViewingStepId(id);
  };

  const handleBackToJourneyMap = () => {
    setViewingStepId(null);
  };

  return (
    <div className={`${highContrast ? 'high-contrast' : ''} ${textSize !== 'default' ? `text-${textSize}` : ''}`}>
      {currentScreen === 'symptomTriage' && (
        <div style={{ position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            top: '1rem', 
            left: '50%', 
            transform: 'translateX(-50%)',
            zIndex: 100
          }}>
            <button
              style={{
                backgroundColor: 'var(--white)',
                color: 'var(--text-primary)',
                border: '1px solid var(--text-primary)',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              onClick={() => navigateTo('settings')}
            >
              <UserCircle size={20} />
              <span>My Information</span>
            </button>
          </div>
          <SymptomTriageScreen onSymptomSelect={handleSymptomSelect} />
        </div>
      )}
      {currentScreen === 'gpGuidance' && (
        <GPGuidanceScreen onBack={goBack} onViewJourney={handleViewJourney} />
      )}
      {currentScreen === 'journeyMap' && (
        viewingStepId === null ? (
          <JourneyMapScreen
            journeySteps={journeySteps}
            activeStepId={activeStepId}
            onStepSelect={handleStepSelect}
          />
        ) : viewingStepId === 1 ? (
          <SymptomLoggedScreen onBack={handleBackToJourneyMap} />
        ) : viewingStepId === 3 ? (
          <GPAppointmentScreen onBack={handleBackToJourneyMap} />
        ) : viewingStepId === 4 ? (
          <VisitHospitalScreen onBack={handleBackToJourneyMap} />
        ) : viewingStepId === 5 ? (
          <PickupPrescriptionScreen onBack={handleBackToJourneyMap} />
        ) : (
          <JourneyStepDetailScreen
            icon={iconMap[journeySteps.find(s => s.id === viewingStepId)?.iconName || 'Stethoscope']}
            title={journeySteps.find(s => s.id === viewingStepId)?.title || ''}
            description={stepDescriptions[viewingStepId] || 'Details about this step will appear here.'}
            onBack={handleBackToJourneyMap}
          />
        )
      )}
      {currentScreen === 'settings' && (
        <SettingsScreen onBack={handleGoBackToSymptomTriage} />
      )}
      {currentScreen === 'postVisitLogging' && (
        <PostVisitLoggingScreen />
      )}
      <AccessibilitySettings />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <AccessibilityProvider>
        <AppContent />
      </AccessibilityProvider>
    </NavigationProvider>
  );
};

export default App;
