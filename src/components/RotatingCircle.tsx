import { useState } from 'react';
import './RotatingCircle.css';

interface RotatingCircleProps {
  data: any[];
  onIconClick: (id: string) => void;
  activeId: string | null;
}

const RotatingCircle: React.FC<RotatingCircleProps> = ({ data, onIconClick, activeId }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="orbit-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="center-orb">
        <div className="center-dot"></div>
      </div>
      
      <div className={`orbit-path ${isPaused ? 'paused' : ''}`}>
        {data.map((item, index) => {
          const angle = (index / data.length) * 360;
          const Icon = item.icon;
          const isActive = activeId === item.id;
          
          return (
            <div
              key={item.id}
              className="orbit-positioner"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div 
                className={`orbit-item ${isActive ? 'active' : ''}`}
                onClick={() => onIconClick(item.id)}
              >
                 <div className="icon-container" style={{ transform: `rotate(-${angle}deg)` }}>
                    <div className="icon-wrapper">
                      <Icon size={28} />
                    </div>
                    <div className="icon-label">{item.title}</div>
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RotatingCircle;
