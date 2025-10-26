import React from 'react';
import SendEnquiry from './SendEnquiry';

const Contact = () => {
  return (
    <section className="py-5 bg-light text-dark" id="contact" style={{height:'auto'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="text-muted">We’d love to hear from you. Whether you have a question about classes, schedules, or anything else — our team is ready to help.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">Contact Details</h5>
            <p><i className="bi bi-geo-alt-fill me-2 text-primary"></i> 123 Zen Street, Bliss City, Wellness State</p>
            <p><i className="bi bi-envelope-fill me-2 text-primary"></i> contact@fitversestudio.com</p>
            <p><i className="bi bi-telephone-fill me-2 text-primary"></i> +91 1234567890</p>
            <p><i className="bi bi-clock-fill me-2 text-primary"></i> Mon – Sat: 6:00 AM – 9:00 PM</p>
          </div>

          <div className="col-md-6">
            <SendEnquiry />
           
           
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
