import { X } from 'lucide-react';
import './DetailCard.css';

interface DetailCardProps {
  data: any;
  onClose: () => void;
}

const DetailCard: React.FC<DetailCardProps> = ({ data, onClose }) => {
  const Icon = data.icon;

  return (
    <div className="detail-card">
      <div className="card-header">
        <div className="header-title">
          <Icon size={24} className="header-icon" />
          <h2>{data.title}</h2>
        </div>
        <button onClick={onClose} className="close-btn" aria-label="Close details">
          <X size={20} />
        </button>
      </div>
      
      <div className="card-content">
        <p className="description">{data.description}</p>
        
        <div className="details-list">
          {data.details.map((detail: any, index: number) => (
            <div key={index} className="detail-item">
              <h3>{detail.subtitle}</h3>
              <p>{detail.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
