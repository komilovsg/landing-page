import React from 'react';
import './Second.scss';
import ChatsIcon from '../../icons/ChatsIcon';

const Second: React.FC = () => {
  return (
    <div className="second-card">
      <div className="second-card__content">
        {/* Left Section - Text Content */}
        <div className="second-card__right">
       <ChatsIcon/>
        </div>

        {/* Right Section - Interactive Elements */}
        <div className="second-card__left">
          <h3 className="second-card__title">All your finances — in one place</h3>
          <p className="second-card__description">
            Accounts, credits, deposits, and analytics — all in one intuitive dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;


