import qs from 'query-string'

import Header from './main/Header/Header';
import Preview from './main/Preview/Preview';
import Roll, { ROLL_TYPE } from './main/Roll/Roll';
import Description from './main/Description/Description';
import Footer from './main/Footer/Footer';

import data from './data.json'

import styles from './App.module.css';
import { useEffect, useState } from 'react';

const filter = (list = [], categoryName = false, isTrill = false, isFantastic = false, isAction = false, isComedy = false, isDrama = false, isHorror = false, isRomance = false) => {
  const next = list
    .filter(item => categoryName ? item.categoryName : true)
    .filter(item => isTrill ? item.isTrill : true)
    .filter(item => isFantastic ? item.isFantastic : true)
    .filter(item => isAction ? item.isAction : true)
    .filter(item => isComedy ? item.isComedy : true)
    .filter(item => isDrama ? item.isDrama : true)
    .filter(item => isHorror ? item.isHorror : true)
    .filter(item => isRomance ? item.isRomance : true)

  return next
}


function App() {

  const query = qs.parse(window.location.search)

  const [categoryName, setCategoryName] = useState(() => Boolean(query?.categoryName === 'true'))
  const [isTrill, setIsTrill] = useState(() => Boolean(query?.isTrill === 'true'))
  const [isFantastic, setIsFantastic] = useState(() => Boolean(query?.isFantastic === 'true'))
  const [isAction, setIsAction] = useState(() => Boolean(query?.isAction === 'true'))
  const [isComedy, setIsComedy] = useState(() => Boolean(query?.isComedy === 'true'))
  const [isDrama, setIsDrama] = useState(() => Boolean(query?.isDrama === 'true'))
  const [isHorror, setIsHorror] = useState(() => Boolean(query?.isHorror === 'true'))
  const [isRomance, setIsRomance] = useState(() => Boolean(query?.isRomance === 'true'))
  const [filmList, setFilmList] = useState(data.filmList)

  const onIsTrill = () => {
    const nextIsTrill = !isTrill
    const nextFilmList = filter(categoryName, nextIsTrill, isFantastic, 
      isAction, isComedy, isDrama, isHorror, isRomance)

    setIsTrill(nextIsTrill)
    setFilmList(nextFilmList)
  }

  return (
    <div className={styles.application}>
      <Header />
      <Preview items={filmList} />
      <Roll items={filmList} type={ROLL_TYPE.HORIZONTAL} title='Новинки' moreLinkText='Все новинки' />
      <Description />
      <Roll items={filmList} type={ROLL_TYPE.HORIZONTAL} title='Комедии' moreLinkText='Смотреть' />
      <Roll 
        items={filmList} 
        type={ROLL_TYPE.VERTICAL} 
        title='Детективы' 
        moreLinkText='Смотреть' 
        onIsTrill={onIsTrill}
        isTrill={isTrill}
      />
      <Roll items={filmList} type={ROLL_TYPE.HORIZONTAL} title='Мелодрамы' moreLinkText='Смотреть' />
      <Footer />
    </div>
  );
}

export default App;
