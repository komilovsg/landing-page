import React from 'react';

interface MailIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const MailIcon: React.FC<MailIconProps> = ({ 
  width = 20, 
  height = 20, 
  fill = "#9763FF",
  className = ""
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M2 18.3334C1.45 18.3334 0.979333 18.1296 0.588 17.722C0.196667 17.3143 0.000666667 16.8237 0 16.2501V3.75008C0 3.17716 0.196 2.68689 0.588 2.27925C0.98 1.87161 1.45067 1.66744 2 1.66675H18C18.55 1.66675 19.021 1.87091 19.413 2.27925C19.805 2.68758 20.0007 3.17786 20 3.75008V16.2501C20 16.823 19.8043 17.3136 19.413 17.722C19.0217 18.1303 18.5507 18.3341 18 18.3334H2ZM10 11.0417L18 5.83341V3.75008L10 8.95841L2 3.75008V5.83341L10 11.0417Z" 
        fill={fill}
      />
    </svg>
  );
};

export default MailIcon; 