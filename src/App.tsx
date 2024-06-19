import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import RiderProfile from './RiderProfile';

const App: React.FC = () => {
  const menus = [
    { name: 'Page 1', path: '/page1' },
    { name: 'Page 2', path: '/page2' },
    { name: 'Page 3', path: '/page3' },
  ];

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar menus={menus} />
        <div style={{ marginLeft: 240, padding: 20, width: '100%' }}>
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/rider/:id" element={<RiderProfile />} />
            <Route path="/" element={<div>Select a page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
