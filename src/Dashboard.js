import React, { useEffect, useRef } from 'react';
import './Dashboard.css';
import app from './firebase';
import { getAuth } from 'firebase/auth';

function Dashboard() {
  const iframeRef = useRef(null);

  const applyFilters = () => {
    const currentUser = getAuth(app).currentUser;
    let filters;
  
    if (currentUser && currentUser.email === 'lincolnnemelka@gmail.com') {
      filters = 'cfde347d147ac2838f15d3b44c113020.8f0182eb4f1a9f3d48b6c7ca6bfb9d89374d1990a61e9f5625ad62c9699aad7a60f0a6e996f36abc8c65b0f27cb4fbe399a48b36f3d689a4e5e4ce8787e2c51d871f4ea0f854bf3d4e2f268adf3e2f2b';
    } else if (currentUser && currentUser.email === 'lincolndwasden@gmail.com') {
      filters = '0362dfd16ad5137755ec98af5c6d2a93.a2788a68785315476deff570b92e0e1eebaee369a9a18b2eacd2c22c3f0b367da02619342b916fc8d28877affa526dd43c30a657419e11af4e44d581680f4d12e73443c0b308e133502519984087e266e6e48fe4cfa8f3c6033f72ef1552b3c1';
    }
    else {
      alert('You are not authorized to view this data.');
      console.log('You are not authorized to view this data.')
    }
  
    iframeRef.current.contentWindow.postMessage({
      event: 'applyFilters',
      data: { filters }
    }, '*');
  };
  

  return (
    <div className="dashboard">
      <iframe src="https://app.gogrow.com/embed/c2baa6fad27980da6251bc0534f1c5cc?apiToken=b9e7bc472f20d9c009bdb9c9f2c22d3d"
              title="dashboard"
              ref={iframeRef}
              onLoad={() => {
                iframeRef.current.contentWindow.addEventListener('message', (event) => {
                  if (event.data.event === 'applyFilters') {
                    console.log(event.data.data.filters);
                    // Add your filter applying code here
                  }
                });
              }}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              style={{ width: '100%', height: '800px', border: 'none', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
      />
       <button className="login-button" onClick={applyFilters}>
  View Data
</button>

      <button className="login-button" onClick={() => {window.location.href = 'https://app.gogrow.com/'}}>
        Go Back To Grow
      </button>
    </div>
  );
}

export default Dashboard;
