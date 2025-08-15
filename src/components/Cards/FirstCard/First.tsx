

import React from 'react';
import './First.scss';
import { SideBar } from '../../icons';

const First: React.FC = () => {
  return (
    <div className="first-card">
      <div className="first-card__content">
        {/* Left Section - Text Content */}
        <div className="first-card__left">
          <h3 className="first-card__title">All your finances — in one place</h3>
          <p className="first-card__description">
            Accounts, credits, deposits, and analytics — all in one intuitive dashboard.
          </p>
        </div>

        {/* Right Section - Interactive Elements */}
        <div className="first-card__right">
       <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default First;


