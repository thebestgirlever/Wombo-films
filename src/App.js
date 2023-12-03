
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Header from './main/Header/Header';
import Footer from './main/Footer/Footer';
import Home from './page/Home';
import Catalog from './main/Catalog/Catalog';
import Roll, { ROLL_TYPE } from './main/Roll/Roll';
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




function Layout() {
  return (
    <div className={styles.application}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}


function Movies() {
  const [filmList, setFilmList] = useState(() => data.filmList.filter(item => item.categoryName === 'movie'))


  
  // debugger

  return (
    <>
      <Catalog
        items={filmList}
        type={ROLL_TYPE.HORIZONTAL}
        title='Фильмы'
      />
    </>
  )
}

function Cartoons() {

  const [filmList, setFilmList] = useState(data.filmList)

  return (
    <>
      <Catalog
        items={filmList}
        type={ROLL_TYPE.HORIZONTAL}
        title='Мультфильмы'
      />
    </>
  )
}

function Series() {

  const [filmList, setFilmList] = useState(data.filmList)

  return (
    <>
      <Catalog
        items={filmList}
        type={ROLL_TYPE.HORIZONTAL}
        title='Сериалы'
      />
    </>
  )
}

function Сolections() {

  const [filmList, setFilmList] = useState(data.filmList)

  return (
    <>
      <Catalog
        items={filmList}
        type={ROLL_TYPE.HORIZONTAL}
        title='Подборки'
      />
    </>
  )
}

const getNewFilms = (item) => item.isNew

function NewFilms() {

  const [filmList, setFilmList] = useState(data.filmList)

  return (
    <>
      <Catalog
        items={filmList.filter(getNewFilms)}
        type={ROLL_TYPE.HORIZONTAL}
        title='Новинки'
      />
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

function NoMatch() {
  return (
    <div>404</div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cartoons" element={<Cartoons />} />
        <Route path="/series" element={<Series />} />
        <Route path="/colections" element={<Сolections />} />
        <Route path="/new" element={<NewFilms />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>);
}

export default App;
