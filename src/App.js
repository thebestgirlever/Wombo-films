import Header from './main/Header/Header';
import Preview from './main/Preview/Preview';
import Roll from './main/Roll/Roll';
import Description from './main/Description/Description';
import Footer from './main/Footer/Footer';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="app">
      <Header />  
      <Preview />
      <Roll />
      <Description />
      <Roll />
      <Roll />
      <Footer />
    </div>
  );
}

export default App;
