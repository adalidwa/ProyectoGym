import React, { useState } from 'react';
import myIcon from '../../assets/icons/Group.svg'; // Importar el archivo SVG

const MyComponent = () => {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div onClick={handleClick}>
      <img 
        src={myIcon} 
        alt="My Icon" 
        style={{ 
          filter: isRed ? 'invert(10%) sepia(50%) saturate(50%) hue-rotate(10deg) brightness(10%) contrast(1%)' : 'none', 
          cursor: 'pointer' ,
        
        }} 
      />
    </div>
  );
};

export default MyComponent;