import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [iframeKey, setIframeKey] = useState(0);

  const handleResize = () => {
    setIframeKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.postMessage({
      event: 'applyFilters',
      data: {
        filters: '0362dfd16ad5137755ec98af5c6d2a93.a2788a68785315476deff570b92e0e1eebaee369a9a18b2eacd2c22c3f0b367da02619342b916fc8d28877affa526dd43c30a657419e11af4e44d581680f4d12e73443c0b308e133502519984087e266e6e48fe4cfa8f3c6033f72ef1552b3c1'
      }
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Leader Board</h1>
    <div style={{ width: "100vw", height: "60vh" }}>
      <iframe
        src="https://app.gogrow.com/embed/c2baa6fad27980da6251bc0534f1c5cc?apiToken=b9e7bc472f20d9c009bdb9c9f2c22d3d"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Grow Dashboard"
        allowFullScreen
        key={iframeKey}
      />
    <div style={{ display: "flex", justifyContent: "center" }}>
  <button onClick={() => window.open('https://app.gogrow.com/dashboard/125461', '_blank')}
   className="signup-button">
    Go to Grow
  </button>
</div>

    </div>
    
    </div>
  );
};

export default Dashboard;
