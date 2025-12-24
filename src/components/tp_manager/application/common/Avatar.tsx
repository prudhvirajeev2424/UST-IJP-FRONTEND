import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md' }) => {
  const sizeStyles = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${sizeStyles[size]} rounded-full object-cover`}
    />
  );
};

export default Avatar;