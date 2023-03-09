import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [iframeKey, setIframeKey] = useState(0);

  const handleResize = () => {
    setIframeKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src="https://app.gogrow.com/dashboard/share/d338bc61713836154e82fcf0d3948477"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Grow Dashboard"
        allowFullScreen
        key={iframeKey}
      />
    </div>
  );
};

export default Dashboard;
