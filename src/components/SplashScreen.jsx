"use client"

import { useState, useEffect } from 'react';

const SplashScreen = ({children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set the loading time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default SplashScreen;