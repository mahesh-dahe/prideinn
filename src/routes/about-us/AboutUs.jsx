import { useState, useEffect } from 'react';

import './About.css';
function About() {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch user's name and email from the backend
    fetchUserData();
  }, []); // Empty dependency array to run effect only once on mount

  const fetchUserData = async () => {
    try {
      // Make a request to your backend to fetch the user's data
      const response = await fetch('/api/userdata'); // Replace '/api/userdata' with your backend endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <>
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img
            src="/images/IMG-20240425-WA0015.jpg"
            alt="Doctor Group"
            className="about-image1"
          />
        </div>

        <div className="about-text-content">
          <h3 className="about-title">
            <span>About Us</span>
          </h3>
          <p className="about-description">
            Welcome to PrideInn, your trusted brand for hospitality and
            personalized living in shirdi. Our experience in hospitality
            industry and specialized services, prioritizing your well-being.
            Join us on this journey towards a greater and comofrtable live of
            you in shirdi.
          </p>
        </div>
        <div style={{ marginTop: '50px' }}></div>
      </div>
      <div
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row"
        style={{ marginTop: '50px' }}
      >
        <div className="w-full md:w-1/2 pr-0 md:pr-4">
          <div className="contact-map">
            <iframe
              title='unique title'
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7509.436575676944!2d74.4719373!3d19.7671201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc5bbe995b7fdb%3A0x893df9242f1cfa8d!2sHotel%20Pride%20Inn!5e0!3m2!1sen!2sin!4v1714889807379!5m2!1sen!2sin"
              width="100%"
              height="250px"
              className="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-4">
          <div className="contact-form">
            <form
              action="./contactme.php"
              method="POST"
              className="flex flex-col space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={user.name}
                className="contact-form-txt px-4 py-2 rounded border"
                required
              />
              <input
                type="email"
                aname="email"
                placeholder="Email"
                defaultValue={user.email}
                className="contact-form-email px-4 py-2 rounded border"
                required
              />
              <textarea
                placeholder="Your Message"
                name="message"
                className="contact-form-txtarea px-4 py-2 rounded border"
                required
              ></textarea>
              <input
                type="submit"
                value="Submit"
                name="submit"
                className="contact-form-btn px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
