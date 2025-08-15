import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoZinda from '../../assets/images/logo-zinda.png';
import { MailIcon, PhoneIcon, DocumentIcon } from '../icons';
import './Footer.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const handlePhoneClick = () => {
    window.location.href = 'tel:+992987365365';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@zinda.tj';
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left Section - Company Information */}
        <div className="footer__left">
          <div className="footer__logo">
            <img src={logoZinda} alt="Zinda" className="footer__logo-image" />
          </div>
          <div className="footer__address">
            {t('footer.address')}
          </div>
        </div>

        {/* Right Section - Contact & Legal Information */}
        <div className="footer__right">
          <div className="footer__contacts">
            <Link to="/documents" className="footer__contact-item footer__contact-item--link">
              <div className="footer__contact-icon">
                <DocumentIcon width={20} height={20} fill="#8b5cf6" />
              </div>
              <span>{t('navigation.documents')}</span>
            </Link>
            <button 
              onClick={handlePhoneClick}
              className="footer__contact-item footer__contact-item--link"
            >
              <div className="footer__contact-icon">
                <PhoneIcon width={20} height={20} fill="#8b5cf6" />
              </div>
              <span>+992 987 365 365</span>
            </button>
            <button 
              onClick={handleEmailClick}
              className="footer__contact-item footer__contact-item--link"
            >
              <div className="footer__contact-icon">
                <MailIcon width={20} height={20} fill="#8b5cf6" />
              </div>
              <span>info@zinda.tj</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Copyright & License */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <div className="footer__copyright">
            {t('footer.copyright')}
          </div>
          <div className="footer__license">
            {t('footer.license')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 