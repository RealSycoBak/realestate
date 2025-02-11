import React, { useState } from "react";
import SubContent from "../components/SubContent.jsx";
import "../assets/students.css";
import students from "../assets/studentData.js";

const Card = ({ name, title, imgSrc, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={imgSrc} alt="Avatar" style={{ width: "100%" }} />
    <div className="container">
      <h4><b>{name}</b></h4>
      <p>{title}</p>
    </div>
  </div>
);

function Students() {

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleCardClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <SubContent number={1} height={"100%"}>
      <div className="Screen">
        <div className={`Left ${selectedStudent ? 'show' : ''}`}>
          {selectedStudent && (
            <>
              <div className="Bigcard">
                <img src={selectedStudent.imgSrc} alt="Avatar" className="big-avatar" />
                <div className="container">
                  <h2><b>{selectedStudent.name}</b></h2>
                  <h4>{selectedStudent.title}</h4>
                </div>
              </div>
              <div className="about-section">
                <h3>About Them</h3>
                <p>{selectedStudent.about}</p>
              </div>
              <div className="socials-section">
                <h3>Socials</h3>
                <div className="social-icons">
                  <a href={selectedStudent.socials.twitter}><img src="twitter.png" alt="Twitter" /></a>
                  <a href={selectedStudent.socials.linkedin}><img src="linkedin.png" alt="LinkedIn" /></a>
                  <a href={selectedStudent.socials.github}><img src="github.png" alt="GitHub" /></a>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="Right">
          {students.map((student, index) => (
            <Card key={index} {...student} onClick={() => handleCardClick(student)} />
          ))}
        </div>
      </div>
    </SubContent>
  );
}

export default Students;
