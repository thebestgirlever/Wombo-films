import qs from 'query-string'

import Header from './main/Header/Header';
import Preview from './main/Preview/Preview';
import Roll from './main/Roll/Roll';
import Description from './main/Description/Description';
import Footer from './main/Footer/Footer';

import data from './data.json'

import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const query = qs.parse(window.location.search)


  const [isFantastic, setIsFantastic] = useState(() => Boolean(query?.isFantastic === 'true'))
  const [isAction, setIsAction] = useState(() => Boolean(query?.isAction === 'true'))
  const [isComedy, setIsComedy] = useState(() => Boolean(query?.isComedy === 'true'))
  const [isDrama, setIsDrama] = useState(() => Boolean(query?.isDrama === 'true'))
  const [isHorror, setIsHorror] = useState(() => Boolean(query?.isHorror === 'true'))
  const [isRomance, setIsRomance] = useState(() => Boolean(query?.isRomance === 'true'))
  const [filmList, setFilmList] = useState(data.filmList)
  const [filmListNew, setFilmListNew] = useState(data.filmListNew)

  return (
    <div className="app">
      <Header />  
      <Preview items={filmList}/>
      <Roll items={filmListNew}/>
      <Description />
      <Roll  items={filmList}/>
      <Roll />
      <Footer />
    </div>
  );
}

export default App;
