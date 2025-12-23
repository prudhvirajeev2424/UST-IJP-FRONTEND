import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function CoverLetterPopup() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      fontFamily: 'Rubik, sans-serif'
    }}>
      <div style={{
        width: '700px',
        height: '400px',
        background: '#FFFFFF',
        borderRadius: '10px',
        opacity: 1,
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          width: '700px',
          height: '70px',
          background: '#F2F7F8',
          borderRadius: '10px 10px 0px 0px',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '24px',
          paddingRight: '24px',
          boxSizing: 'border-box'
        }}>
          <h2 style={{ 
            width: '103px',
            height: '22px',
            font: 'normal normal bold 18px/22px Rubik',
            letterSpacing: '0px',
            color: '#231F20',
            textAlign: 'left',
            opacity: 1,
            margin: 0
          }}>
            Cover letter
          </h2>
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: '28px',
              height: '28px',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              background: isHovered ? '#D7E0E3' : 'transparent',
              borderRadius: '50%',
              cursor: 'pointer',
              padding: 0,
              transition: 'background 0.2s ease',
              outline: 'none'
            }}>
            <X size={28} color="#231F20" strokeWidth={1} />
          </button>
        </div>
        
        {/* Body */}
        <div style={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '32px' }}>
          <p style={{ 
            width: '620px',
            height: '80px',
            font: 'normal normal normal 14px/21px Rubik',
            letterSpacing: '0px',
            color: '#231F20',
            textAlign: 'left',
            opacity: 1,
            margin: 0
          }}>
            I am interested in joining the [Project Name] team at [Company Name]. With experience in [Key Skills], I have contributed to [mention relevant achievement]. I believe my expertise aligns well with the project's goals and would love the opportunity to contribute. Looking forward to discussing this further.
          </p>
        </div>
      </div>
    </div>
  );
}