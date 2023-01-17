import './App.css'

import React, { useState, useEffect } from 'react';

function ImageOnScroll() {
  const [size, setSize] = useState({ width: 600, height: 900 });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const scrollY = window.scrollY;
    setSize({ width: 600 - scrollY / 2, height: 900 - scrollY / 2 });
  }

  return (
	  <main>
    <img src="src/overlay.png" style={{ width: size.width, height: size.height }} alt="image" />
	<div style={{ height: 10000 }}> </div>
		  </main>
  );
}

export default ImageOnScroll;