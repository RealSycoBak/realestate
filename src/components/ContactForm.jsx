import React, { useState } from 'react';
import './Header.css';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent('SUBMIT A LEAD - ' + firstName + ' ' + lastName);
        const body = encodeURIComponent('Here is my lead: ' + message + '\n' + 'Thanks, ' + email);

        const mailtoLink = `mailto:burealestatefund@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <form className="lead-form" onSubmit={handleSubmit}>
            <h2>SUBMIT A LEAD</h2>

            <p className="form-description">
                We are actively seeking existing value-add or development projects that may be a potential fit for an investment by our Fund. Please keep the Fund in mind and contact us for any current or future projects that allow us to consider a co-investment.
            </p>

            <div className="form-group">
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <label htmlFor="firstName">First Name</label>
            </div>

            <div className="form-group">
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <label htmlFor="lastName">Last Name</label>
            </div>

            <div className="form-group">
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="email">Email</label>
            </div>

            <div className="form-group">
                <textarea
                    id="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <label htmlFor="message">Message</label>
            </div>

            <button type="submit">Contact Our Students Now!</button>

            <div className="social-links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
        </form>
    );
};

export default ContactForm;
