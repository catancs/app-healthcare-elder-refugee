import React from 'react';
import { Routes, Route, Outlet, useParams, useNavigate } from 'react-router-dom';
import { Stethoscope, Phone, Calendar, Hospital, Pill, ArrowLeft } from 'lucide-react';
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
import JourneyNavigation from './components/JourneyNavigation';
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

const Layout: React.FC = () => {
  const { highContrast, textSize } = useAccessibility();
  
  return (
    <div className={`${highContrast ? 'high-contrast' : ''} ${textSize !== 'default' ? `text-${textSize}` : ''}`}>
      <Outlet />
      <AccessibilitySettings />
    </div>
  );
};

const JourneyStepPage: React.FC = () => {
  const { stepId } = useParams();
  const navigate = useNavigate();
  const stepIdNum = parseInt(stepId || '0', 10);
  const step = journeySteps.find(s => s.id === stepIdNum);
  
  const renderStepContent = () => {
    switch (stepIdNum) {
      case 1:
        return <SymptomLoggedScreen />;
      case 3:
        return <GPAppointmentScreen />;
      case 4:
        return <VisitHospitalScreen />;
      case 5:
        return <PickupPrescriptionScreen />;
      default:
        return (
          <JourneyStepDetailScreen
            icon={iconMap[step?.iconName || 'Stethoscope']}
            title={step?.title || ''}
            description={stepDescriptions[stepIdNum] || 'Details about this step will appear here.'}
          />
        );
    }
  };

  return (
    <div className="screen">
      <button className="backButton" onClick={() => navigate('/journey-map')} aria-label="Back to journey map" style={{ position: 'absolute', top: 24, left: 24, zIndex: 101 }}>
        <ArrowLeft size={28} />
      </button>
      {renderStepContent()}
      <JourneyNavigation currentStepId={stepIdNum} totalSteps={journeySteps.length} />
    </div>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SymptomTriageScreen />} />
        <Route path="gp-guidance" element={<GPGuidanceScreen />} />
        <Route path="journey-map" element={<JourneyMapScreen journeySteps={journeySteps} activeStepId={1} />} />
        <Route path="journey/:stepId" element={<JourneyStepPage />} />
        <Route path="settings" element={<SettingsScreen />} />
        <Route path="post-visit-logging" element={<PostVisitLoggingScreen />} />
      </Route>
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <AppRoutes />
    </AccessibilityProvider>
  );
};

export default App;
