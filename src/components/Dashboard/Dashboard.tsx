import React from 'react';
// import { useTranslation } from 'react-i18next';
import profileImage from '../../assets/images/profile.png';
import './Dashboard.scss';
import GeometricShadow from '../GeometricShadow';

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__container">
 
      <GeometricShadow position="top-right" size="small" opacity={0.3} />
        <div className="dashboard__overlay">
          <img src={profileImage} alt="Dashboard" className="dashboard__image" />
          <div className="dashboard__mirror"></div>
        </div>
        <GeometricShadow position="bottom-left" size="medium" opacity={0.4} />
  
      </div>
    </section>
  );
};

export default Dashboard; 