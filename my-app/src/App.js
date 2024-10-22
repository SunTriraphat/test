import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import No1 from './pages/No1';
import No2 from './pages/No2';
import No3 from './pages/No3';
import No4 from './pages/No4';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">no1</Link></li>
          <li><Link to="/no2">no2</Link></li>
          <li><Link to="/no3">no3</Link></li>
          <li><Link to="/no4">no4</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<No1 />} />
        <Route path="/no2" element={<No2 />} />
        <Route path="/no3" element={<No3 />} />
        <Route path="/no4" element={<No4 />} />
      </Routes>
    </div>
  );
}

export default App;
