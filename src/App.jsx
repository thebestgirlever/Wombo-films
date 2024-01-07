
import { Routes, Route } from "react-router-dom";

import Layout from 'main/Layout/Layout';
import Home from './page/Home';
import PageProduct from './page/PageProduct';
import Catalog from './main/Catalog/Catalog';
import Roll, { ROLL_TYPE } from './main/Roll/Roll';
import data from './data.json'

import styles from './App.module.css';
import { useEffect, useState } from 'react';
import PageSearch from "page/PageSearch";

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

function Movies() {
  const [filmList, setFilmList] = useState(() => data.filmList.filter(item => item.categoryName === 'movie'))

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

  const [filmList, setFilmList] = useState(() => data.filmList.filter(item => item.categoryName === 'Cartoon'))

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

  const [filmList, setFilmList] = useState(() => data.filmList.filter(item => item.categoryName === 'series'))

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

function Collections() {

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
        <Route path="/colections" element={<Collections />} />
        <Route path="/new" element={<NewFilms />} />
        <Route path="/product/:id" element={<PageProduct />} />
        <Route path="/search/" element={<PageSearch />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>);
}

export default App;
