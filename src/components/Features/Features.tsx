import React from 'react';
import { useTranslation } from 'react-i18next';
import './Features.scss';
import First from '../Cards/FirstCard/First';
import Second from '../Cards/SecondCard/Second';
// import GeometricShadow from '../GeometricShadow';

const Features: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <h2 className="features__title">{t('features.title')}</h2>
          <p className="features__subtitle">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="features__grid">
          {/* Top-Left: All your finances */}
         <First />
     
          {/* Top-Right: From here to anywhere */}
          <Second />
          </div>
      
          {/* Bottom-Left: Limits in July */}
          <div className="features__card">
            <h3 className="features__card-title">{t('features.limits.title')}</h3>
            <div className="features__card-content">
              <div className="features__limits">
                <div className="features__limit-item">
                  <div className="features__progress-circle">
                    <span>75%</span>
                  </div>
                  <div className="features__limit-info">
                    <span>{t('features.limits.transfer')}</span>
                    <span>{t('features.limits.extra')} 10 000 TJS</span>
                  </div>
                </div>
                <div className="features__limit-item">
                  <div className="features__progress-circle">
                    <span>98%</span>
                  </div>
                  <div className="features__limit-info">
                    <span>{t('features.limits.withdrawal')}</span>
                    <span>{t('features.limits.extra')} 24 000 TJS</span>
                  </div>
                </div>
              </div>
              <div className="features__edit-icon">✏️</div>
            </div>
            <p className="features__card-description">
              {t('features.limits.description')}
            </p>
          </div>

          {/* Bottom-Right: Evolve with your business */}
          <div className="features__card">
            <h3 className="features__card-title">{t('features.evolve.title')}</h3>
            <div className="features__card-content">
              <div className="features__exchange">
                <div className="features__exchange-tabs">
                  <button className="features__tab active">{t('features.evolve.buy')}</button>
                  <button className="features__tab">{t('features.evolve.sell')}</button>
                </div>
                <div className="features__chart">
                  <div className="features__chart-line"></div>
                  <div className="features__chart-labels">
                    <span>SEP</span>
                    <span>OCT</span>
                    <span>NOV</span>
                    <span>DEC</span>
                    <span>JAN</span>
                    <span>FEB</span>
                  </div>
                </div>
                <div className="features__exchange-values">
                  <span>112.12 TJS</span>
                  <span>112.12 USD</span>
                </div>
              </div>
            </div>
            <p className="features__card-description">
              {t('features.evolve.description')}
            </p>
          </div>

      </div>
    </section>
  );
};

export default Features; 