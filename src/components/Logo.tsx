import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="ToolsMama Logo" 
      className={`${className} transition-transform duration-300 object-contain`}
      referrerPolicy="no-referrer"
    />
  );
};

export default Logo;
