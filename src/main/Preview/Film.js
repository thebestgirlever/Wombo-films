import { useState } from 'react';

import styles from './Film.module.css';


function Film({ item }) {
    return (
        <div className={styles.item}>
            <div className={styles.title}>{item.name}</div>
            <div className={styles.tags}>
                <div className={styles.tag}>{item.year}</div>
                <div className={styles.tag}>{item.country}</div>
                {item.isFantastic ? <div className={styles.tag}>Фантастика</div> : null}
                {item.isAction ? <div className={styles.tag}>Боевик</div> : null}
                {item.isComedy ? <div className={styles.tag}>Комедия</div> : null}
                {item.isDrama ? <div className={styles.tag}>Драма</div> : null}
                {item.isHorror ? <div className={styles.tag}>Ужасы</div> : null}
                {item.isRomance ? <div className={styles.tag}>Романтика</div> : null}

                <div className={styles.permission}>{item.permission}</div>
            </div>
            <div className={styles.discription}>{item.discription}</div>
            <div className={styles.buttons}>
                <button className={styles.watch}>Смотреть</button>
                <button className={styles.trailer}>Трейлер</button>
            </div>
        </div>
    )
}

export default Film