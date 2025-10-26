import React from 'react';

const Footer = () => {
  return (
    <footer
      className="container-fluid p-4 text-bg-dark text-center"
      style={{
        position: 'sticky',
        bottom: 0,
        left: 0,
        width: '100%',
        marginTop: 'auto',
      }}
    >
      <p className="mb-0">&copy; Designed and Developed by Mohd Atfan</p>
    </footer>
  );
};

export default Footer;
