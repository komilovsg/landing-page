import React from 'react';

interface DocumentIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const DocumentIcon: React.FC<DocumentIconProps> = ({ 
  width = 17, 
  height = 22, 
  fill = "#9763FF",
  className = ""
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 17 22" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_152_731)">
        <path 
          d="M3.07827 21.4902H13.6238C15.6793 21.4902 16.7021 20.4622 16.7021 18.4259V9.53636H9.51288C8.24182 9.53636 7.6361 8.9392 7.6361 7.68602V0.5H3.07827C1.03271 0.5 0 1.53776 0 3.57413V18.4259C0 20.472 1.02278 21.4902 3.07827 21.4902ZM9.54262 8.19511H16.5829C16.5234 7.79371 16.2354 7.4021 15.7588 6.92238L10.2874 1.43007C9.82064 0.96014 9.41357 0.676224 8.99651 0.607692V7.66643C8.99651 8.01889 9.17521 8.19511 9.54262 8.19511Z" 
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_152_731">
          <rect width="17" height="21" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default DocumentIcon; 