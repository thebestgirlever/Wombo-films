import Item from "../../components/Item/Item";
import Tag from '../../components/Tag/Tag'

import data from '../../data.json'

import { Link } from "react-router-dom"
import { useState } from 'react';
import styles from './Catalog.module.css';


function Catalog({ items, text, title = "Фильмы" }) {

    const [categoryList, setCategoryList] = useState(data.categoryList)

    // debugger

    return (
        <div className={styles.block}>
            <div className={styles.shadow}></div>
            <div className={styles.bread__crumbs}><a className={styles.home} href="/home">Главная</a>  /  {title}</div>
            <h1 className={styles.title}>{title} онлайн</h1>
            <div className={styles.description}>
                Новинки кино, горячие премьеры и проверенные временем  фильмы — блокбастеры, детективы, драмы и комедии. Смотрите онлайн на ToFilm.ru
            </div>

            <div className={styles.nav}></div>
            <div className={styles.list}>
                {items?.map(item => <Item item={item} key={item.id} />)}
            </div>
        </div>
    );
}

export default Catalog