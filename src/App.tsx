import { useState } from 'react';
import RotatingCircle from './components/RotatingCircle';
import DetailCard from './components/DetailCard';
import { resumeData } from './data/resumeData';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleIconClick = (id: string) => {
    setActiveCategory(id);
  };

  const closeCard = () => {
    setActiveCategory(null);
  };

  const activeData = resumeData.find(item => item.id === activeCategory);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Vivaan Shahani</h1>
        <p className="subtitle">High-Achieving Student | Innovator | Debater</p>
        <div className="contact-info">
          <a href="mailto:vivaan.shahani@gmail.com">vivaan.shahani@gmail.com</a>
          <span> | </span>
          <span>Scarsdale, NY</span>
        </div>
      </header>

      <main className="main-content">
        <div className={`circle-section ${activeCategory ? 'shifted' : ''}`}>
          <RotatingCircle 
            data={resumeData} 
            onIconClick={handleIconClick} 
            activeId={activeCategory} 
          />
        </div>
        
        {activeData && (
          <div className="details-section">
            <DetailCard data={activeData} onClose={closeCard} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
