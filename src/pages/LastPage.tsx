import React from 'react';
import testSvg from '../assets/reg.svg';

const LastPage = () => {
  const handleDownload = () => {
  };

  return (
    <div className='parent'>
      <img src={testSvg} alt="Resistration Successful" />
      <h2>Registration Successful!</h2>
      <button onClick={handleDownload}>Download App</button>
      <br />
      <a href="/">Back to homepage</a>
    </div>
  );
};

export default LastPage;

