import React from 'react';
import { useTranslation } from 'react-i18next';
import './Documents.scss';

const Documents: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="documents">
      <div className="documents__container">
        <div className="documents__header">
          <h1 className="documents__title">{t('documents.title')}</h1>
          <p className="documents__subtitle">{t('documents.subtitle')}</p>
        </div>
        
        <div className="documents__content">
          <div className="documents__section">
            <h2 className="documents__section-title">
              <div className="documents__section-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="url(#gradient1)"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff"/>
                      <stop offset="100%" stopColor="#8b5cf6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {t('documents.sections.legal')}
            </h2>
            <div className="documents__grid">
              <div className="documents__card documents__card--primary">
                <div className="documents__card-header">
                  <h3>Banking License</h3>
                  <span className="documents__card-badge">{t('documents.categories.official')}</span>
                </div>
                <p className="documents__card-description">BMT No. 0000342 dated 02.07.2025</p>
                <div className="documents__card-actions">
                  <button className="documents__download-btn documents__download-btn--primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t('documents.actions.download')}
                  </button>
                </div>
              </div>
              
              <div className="documents__card documents__card--secondary">
                <div className="documents__card-header">
                  <h3>Company Registration</h3>
                  <span className="documents__card-badge">{t('documents.categories.certificate')}</span>
                </div>
                <p className="documents__card-description">Certificate of Registration and Incorporation</p>
                <div className="documents__card-actions">
                  <button className="documents__download-btn documents__download-btn--secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t('documents.actions.download')}
                  </button>
                </div>
              </div>
              
              <div className="documents__card documents__card--accent">
                <div className="documents__card-header">
                  <h3>Financial Reports</h3>
                  <span className="documents__card-badge">{t('documents.categories.annual')}</span>
                </div>
                <p className="documents__card-description">Annual Financial Statements 2024</p>
                <div className="documents__card-actions">
                  <button className="documents__download-btn documents__download-btn--accent">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t('documents.actions.download')}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="documents__section">
            <h2 className="documents__section-title">
              <div className="documents__section-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="url(#gradient2)"/>
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6"/>
                      <stop offset="100%" stopColor="#00d4ff"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {t('documents.sections.forms')}
            </h2>
            <div className="documents__grid">
              <div className="documents__card documents__card--info">
                <div className="documents__card-header">
                  <h3>Account Opening Form</h3>
                  <span className="documents__card-badge">{t('documents.categories.application')}</span>
                </div>
                <p className="documents__card-description">Standard account opening application for individuals and businesses</p>
                <div className="documents__card-actions">
                  <button className="documents__download-btn documents__download-btn--info">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t('documents.actions.download')}
                  </button>
                </div>
              </div>
              
              <div className="documents__card documents__card--success">
                <div className="documents__card-header">
                  <h3>Loan Application</h3>
                  <span className="documents__card-badge">{t('documents.categories.business')}</span>
                </div>
                <p className="documents__card-description">Business loan application form with detailed requirements</p>
                <div className="documents__card-actions">
                  <button className="documents__download-btn documents__download-btn--success">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t('documents.actions.download')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
