
import Preview from '../main/Preview/Preview';
import Roll, { ROLL_TYPE } from '../main/Roll/Roll';
import Description from '../main/Description/Description';


import data from '../data.json'

import { useEffect, useState } from 'react';

const getTrillFilms = (item) => item.isTrill
const getNewFilms = (item) => item.isNew
const getPopularFilms = (item) => item.Popular
const getComedyFilms = (item) => item.isComedy
const getFantasticFilms = (item) => item.isFantastic


function Home() {
    const [filmList, setFilmList] = useState(data.filmList)

    return (
        <>
            <Preview items={filmList.filter(getPopularFilms)} />
            <Roll
                items={filmList.filter(getNewFilms)}
                type={ROLL_TYPE.VERTICAL}
                title='Новинки'
                moreLinkText='Все новинки'
            />
            <Description />
            <Roll
                items={filmList.filter(getComedyFilms)}
                type={ROLL_TYPE.VERTICAL}
                title='Комедии'
                moreLinkText='Смотреть' />
            <Roll
                items={filmList.filter(getTrillFilms)}
                type={ROLL_TYPE.HORIZONTAL}
                title='Детективы'
                moreLinkText='Смотреть'
            />
            <Roll
                items={filmList.filter(getFantasticFilms)}
                type={ROLL_TYPE.VERTICAL}
                title='Фантистика'
                moreLinkText='Смотреть'
            />

        </>
    )
}


export default Home