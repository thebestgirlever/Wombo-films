import Header from './main/Header/Header';
import Preview from './main/Preview/Preview';
import Roll from './main/Roll/Roll';
import Description from './main/Description/Description';
import Footer from './main/Footer/Footer';

import data from './data.json'

import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [filmList, setFilmList] = useState(data.filmList)
  const [filmListNew, setFilmListNew] = useState(data.filmListNew)

  return (
    <div className="app">
      <Header />  
      <Preview />
      <Roll items={filmListNew}/>
      <Description />
      <Roll  items={filmList}/>
      <Roll />
      <Footer />
    </div>
  );
}

export default App;
