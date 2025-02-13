import React, { useState } from 'react';
import { X } from 'lucide-react';
import "../assets/portfolio.css";
import projects from "../assets/portfolioData.js";

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-image" 
          style={{
            backgroundImage: `url(${project.imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="modal-info">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-about">{project.about}</p>
          <div className="modal-details">
            {project.details && (
              <>
                <h3>Project Details</h3>
                <p>{project.details}</p>
              </>
            )}
            {project.technologies && (
              <>
                <h3>Technologies Used</h3>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ project, onClick }) => (
  <div 
    className="child" 
    onClick={() => onClick(project)}
    style={{
      backgroundImage: `url(${project.imgSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="overlay">
      <h3 className="card-title">{project.title}</h3>
      <p className="card-about">{project.about}</p>
    </div>
  </div>
);

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="Layout">
      <div className="LayoutTitle">
        <h1>Our Portfolio</h1>
      </div>
      <div className="parent">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            project={project} 
            onClick={setSelectedProject}
          />
        ))}
      </div>
      {selectedProject && (
        <Modal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default Portfolio;