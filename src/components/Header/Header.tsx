import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import logoZinda from '../../assets/images/logo-zinda.png';
import './Header.scss';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { t, changeLanguage, getCurrentLanguage, getLanguageName } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  const currentLanguage = getCurrentLanguage();

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={logoZinda} alt="Zinda" className="image" />
          </Link>
        </div>
        
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li><Link to="/" className="header__nav-link">{t('navigation.home')}</Link></li>
            <li><Link to="/management" className="header__nav-link">{t('navigation.management')}</Link></li>
            <li><Link to="/documents" className="header__nav-link">{t('navigation.documents')}</Link></li>
          </ul>
        </nav>

        <div className="header__language">
          <button 
            type="button"
            className="header__language-btn"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
          >
            {getLanguageName(currentLanguage)}
          </button>
          
          {isLanguageMenuOpen && (
            <div className="header__language-menu">
              <button 
                type="button"
                className={`header__language-option ${currentLanguage === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                English
              </button>
              <button 
                type="button"
                className={`header__language-option ${currentLanguage === 'ru' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('ru')}
              >
                Русский
              </button>
              <button 
                type="button"
                className={`header__language-option ${currentLanguage === 'tg' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('tg')}
              >
                Тоҷикӣ
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 