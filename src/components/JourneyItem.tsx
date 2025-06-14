import React from 'react';
import styles from './JourneyItem.module.css';

interface JourneyItemProps {
  icon: React.ReactNode;
  title: string;
  status: 'completed' | 'active' | 'upcoming';
  onClick?: () => void;
  style?: React.CSSProperties;
}

const JourneyItem: React.FC<JourneyItemProps> = ({ icon, title, status, onClick, style }) => {
  return (
    <div
      className={`${styles.item} ${styles[status]}`}
      onClick={onClick}
      style={style}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default JourneyItem; 