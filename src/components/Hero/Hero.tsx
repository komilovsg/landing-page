import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.scss';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__title-container">
          <h1 className="hero__title">
            {t('hero.title').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t('hero.title').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </div>
        <p className="hero__subtitle">
          {t('hero.subtitle')}
        </p>
        <button className="hero__button">
          <span className="hero__button-text">{t('hero.cta')}</span>
        </button>
      </div>
      <div className="hero__glow"></div>
    </section>
  );
};

export default Hero; 