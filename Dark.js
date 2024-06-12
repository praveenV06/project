import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    localStorage.setItem('darkMode', newMode);
    setDarkMode(newMode);
   
    

    // Send a request to the server to update the user's preference
    // fetch('/api/dark-mode', {
    //   method: 'POST',
    //   body: JSON.stringify({ darkMode: newMode }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
    // <button
    //   onClick={toggleDarkMode}
    //   style={{ backgroundColor: darkMode ? '#fff' : '#333', color: darkMode ? '#333' : '#fff' }}
    // >
    //   {darkMode ? 'new Mode' : 'Dark Mode'}
    // </button>

  );
};

export default DarkModeToggle;
