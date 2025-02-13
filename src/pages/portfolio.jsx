import "../assets/portfolio.css"
import projects from "../assets/portfolioData.js"

const Card = ({ title, imgSrc, about }) => (
  <div 
    className="child" 
    style={{
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="overlay">
      <h3 className="card-title">{title}</h3>
      <p className="card-about">{about}</p>
    </div>
  </div>
);

function Portfolio() {
  return (
    <div className="Layout">
      <div className="LayoutTitle">
        <h1>Our Portfolio</h1>
      </div>
      <div className="parent">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio