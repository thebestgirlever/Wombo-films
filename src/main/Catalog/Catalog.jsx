import Item from "../../components/Item/Item";

import { Link } from "react-router-dom"
import styles from './Catalog.module.css';


function Catalog({ items, text, title = "Фильмы" }) {


    // debugger

    return (
        <div className={styles.block}>
            <div className={styles.shadow}></div>
            <div className={styles.bread__crumbs}><Link className={styles.home} to="/">Главная</Link>  /  {title}</div>
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