import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import No1 from './pages/No1';
import No2 from './pages/No2';
import No3 from './pages/No3';
import No4 from './pages/No4';
import No5 from './pages/No5';
import No6 from './pages/No6';
import No7 from './pages/No7';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">no1</Link></li>
          <li><Link to="/no2">no2</Link></li>
          <li><Link to="/no3">no3</Link></li>
          <li><Link to="/no4">no4</Link></li>
          <li><Link to="/no5">no5</Link></li>
          <li><Link to="/no6">no6</Link></li>
          <li><Link to="/no7">no7</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<No1 />} />
        <Route path="/no2" element={<No2 />} />
        <Route path="/no3" element={<No3 />} />
        <Route path="/no4" element={<No4 />} />
        <Route path="/no5" element={<No5 />} />
        <Route path="/no6" element={<No6 />} />
        <Route path="/no7" element={<No7 />} />
      </Routes>
    </div>
  );
}

export default App;
