import React from 'react';
import geometricShadow from '../../assets/images/geometric-shadow.svg';
import './GeometricShadow.scss';

interface GeometricShadowProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: 'small' | 'medium' | 'large';
  opacity?: number;
  className?: string;
}

const GeometricShadow: React.FC<GeometricShadowProps> = ({
  position = 'center',
  size = 'medium',
  opacity = 0.6,
  className = ''
}) => {
  return (
    <div className={`geometric-shadow geometric-shadow--${position} geometric-shadow--${size} ${className}`}>
      <img 
        src={geometricShadow} 
        alt="" 
        className="geometric-shadow__image"
        style={{ opacity }}
      />
    </div>
  );
};

export default GeometricShadow;
