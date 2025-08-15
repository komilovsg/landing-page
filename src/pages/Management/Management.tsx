import React from 'react';
import { useTranslation } from 'react-i18next';
import './Management.scss';

const Management: React.FC = () => {
  const { t } = useTranslation();

  const managementTeam = [
    {
      id: 1,
      name: 'Ахмад Каримов',
      positionKey: 'ceo',
      description: 'Более 15 лет опыта в банковском секторе. Специалист по стратегическому планированию и развитию бизнеса. Под его руководством компания достигла значительного роста и расширения клиентской базы.',
      photo: '/assets/images/profile.png'
    },
    {
      id: 2,
      name: 'Сара Назарова',
      positionKey: 'cfo',
      description: 'Эксперт по финансовому планированию и анализу с опытом работы в международных финансовых институтах. Отвечает за финансовую стабильность и эффективность компании.',
      photo: '/assets/images/profile.png'
    },
    {
      id: 3,
      name: 'Рустам Саидов',
      positionKey: 'coo',
      description: 'Специалист по операционному управлению и оптимизации бизнес-процессов. Обеспечивает эффективную работу всех подразделений компании.',
      photo: '/assets/images/profile.png'
    },
    {
      id: 4,
      name: 'Диана Юсупова',
      positionKey: 'cdo',
      description: 'Эксперт по стратегическому развитию и партнерским отношениям. Отвечает за расширение бизнеса и внедрение инновационных решений.',
      photo: '/assets/images/profile.png'
    },
    {
      id: 5,
      name: 'Тимур Рахманов',
      positionKey: 'cro',
      description: 'Специалист по управлению рисками и соответствию нормативным требованиям. Обеспечивает безопасность и стабильность операций компании.',
      photo: '/assets/images/profile.png'
    },
    {
      id: 6,
      name: 'Алина Фазылова',
      positionKey: 'chro',
      description: 'Эксперт по управлению человеческими ресурсами и корпоративной культуре. Отвечает за развитие команды и создание благоприятной рабочей среды.',
      photo: '/assets/images/profile.png'
    }
  ];

  return (
    <div className="management">
      <div className="management__container">
        <div className="management__header">
          <h1 className="management__title">{t('management.title')}</h1>
          <p className="management__subtitle">{t('management.subtitle')}</p>
        </div>
        
        <div className="management__grid">
          {managementTeam.map((member) => (
            <div key={member.id} className="management__card">
              <div className="management__card-photo">
                <img src={member.photo} alt={member.name} />
                <div className="management__card-overlay">
                  <div className="management__card-social">
                    <button className="management__social-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="management__social-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="management__card-content">
                <h3 className="management__card-name">{member.name}</h3>
                <p className="management__card-position">{t(`management.positions.${member.positionKey}`)}</p>
                <p className="management__card-description">{member.description}</p>
                
                <div className="management__card-actions">
                  <button className="management__contact-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t('common.contact')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
