import React from 'react';
import './Contacts.scss';

const Contacts: React.FC = () => {
  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__header">
          <h1 className="contacts__title">Contacts and Details</h1>
          <p className="contacts__subtitle">Get in touch with our team and learn more about Zinda Capital</p>
        </div>
        
        <div className="contacts__content">
          <div className="contacts__card contacts__card--primary">
            <div className="contacts__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9H19V21H5V3H13V9H21Z" fill="url(#gradient1)"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff"/>
                    <stop offset="100%" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2>Company Information</h2>
            <div className="contacts__info">
              <div className="contacts__info-item">
                <span className="contacts__label">Company Name</span>
                <span className="contacts__value">CJSC "Zinda Capital"</span>
              </div>
              <div className="contacts__info-item">
                <span className="contacts__label">Address</span>
                <span className="contacts__value">Dushanbe, I. Somoni District, Rudaki Avenue 175</span>
              </div>
              <div className="contacts__info-item">
                <span className="contacts__label">Postal Code</span>
                <span className="contacts__value">734003</span>
              </div>
            </div>
          </div>
          
          <div className="contacts__card contacts__card--secondary">
            <div className="contacts__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 3C3 2.45 3.45 2 4 2H7.5C8.05 2 8.5 2.45 8.5 3C8.5 4.25 8.7 5.45 9.07 6.57C9.18 6.92 9.1 7.31 8.82 7.59L6.62 9.79V10.79Z" fill="url(#gradient2)"/>
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6"/>
                    <stop offset="100%" stopColor="#00d4ff"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2>Contact Details</h2>
            <div className="contacts__info">
              <div className="contacts__info-item">
                <span className="contacts__label">Phone</span>
                <span className="contacts__value">+992 987 365 365</span>
              </div>
              <div className="contacts__info-item">
                <span className="contacts__label">Email</span>
                <span className="contacts__value">info@zinda.tj</span>
              </div>
            </div>
          </div>
          
          <div className="contacts__card contacts__card--accent">
            <div className="contacts__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="url(#gradient3)"/>
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff"/>
                    <stop offset="50%" stopColor="#8b5cf6"/>
                    <stop offset="100%" stopColor="#00d4ff"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2>Banking License</h2>
            <div className="contacts__info">
              <div className="contacts__info-item">
                <span className="contacts__label">License Number</span>
                <span className="contacts__value">BMT No. 0000342</span>
              </div>
              <div className="contacts__info-item">
                <span className="contacts__label">Issue Date</span>
                <span className="contacts__value">02.07.2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
