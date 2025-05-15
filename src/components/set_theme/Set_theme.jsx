import React, { useState, useEffect } from "react";
import "./set_theme.css";

const Set_theme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="set_theme">
      <label className="switch">
        <input
          id="input"
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div className="slider round">
          <div className="sun-moon">
      <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>

      <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
    </div>
    <div className="stars">
      <svg id="star-1" className="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
      <svg id="star-2" className="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
      <svg id="star-3" className="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
      <svg id="star-4" className="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
    </div>
  </div>
</label>

    </div>
  )
}

export default Set_theme
