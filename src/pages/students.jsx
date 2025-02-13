import React, { useState } from "react";
import "../assets/students.css";
import students from "../assets/studentData.js";

const Card = ({ name, title, imgSrc, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={imgSrc} alt="Avatar" className="card-image" style={{ width: "100%" }} />
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
    <>
      <div className="Screen">
        <div className="Head">
          <h1> Meet Our Students </h1>
        </div>
        <div className="Area">
          <div className={`Left ${selectedStudent ? 'show' : ''}`}>
            {selectedStudent && (
              <>
                <div className="Bigcard">
                  <img src={selectedStudent.imgSrc} alt="Avatar" className="big-avatar card-image" />
                </div>
                <div className="about-section">
                  <h3>{selectedStudent.name} | {selectedStudent.title}</h3>
                  <p>{selectedStudent.about}</p>
                </div>
                <div className="socials-section">
                  <div className="social-icons">
                    <a href={selectedStudent.socials.facebook} aria-label="Facebook" id="facebook"><i className="fab fa-facebook"></i></a>
                    <a href={selectedStudent.socials.twitter} aria-label="Twitter" id="twitter"><i className="fab fa-twitter"></i></a>
                    <a href={selectedStudent.socials.linkedin} aria-label="LinkedIn" id="linkedin"><i className="fab fa-linkedin"></i></a>
                    <a href={selectedStudent.socials.instagram} aria-label="Instagram" id="instagram"><i className="fab fa-instagram"></i></a>
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
      </div>
    </>
  );
}

export default Students;
