import qs from 'query-string'

import { Routes, Route, Outlet, Link } from "react-router-dom";

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

const getComedyFilms = (item) => item.isComedy


function Layout() {
  return (
    <div className={styles.application}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function Home() {
  const [filmList, setFilmList] = useState(data.filmList)

  return (
    <>
      <Preview items={filmList} />
      <Roll items={filmList} type={ROLL_TYPE.HORIZONTAL} title='Новинки' moreLinkText='Все новинки' />
      <Description />
      <Roll items={filmList} type={ROLL_TYPE.HORIZONTAL} title='Комедии' moreLinkText='Смотреть' />
      <Roll
        items={filmList.filter(getComedyFilms)}
        type={ROLL_TYPE.VERTICAL}
        title='Детективы'
        moreLinkText='Смотреть'
      />
      <Roll items={filmList} type={ROLL_TYPE.HORIZONTAL} title='Мелодрамы' moreLinkText='Смотреть' />

    </>
  )
}

function Catalog() {
  return (
    <>
      <div>
        <div>
          <Link>Главная</Link>
          <div>|</div>
          <div>Фильмы</div>
        </div>
      </div>
    </>
  )
}

function Product() {
  return (
    <>
      <div>Movies</div>
    </>
  )
}

function NoMatch () {
  return (
    <div>404</div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>);
}

export default App;
