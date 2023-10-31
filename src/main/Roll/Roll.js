import { useState } from 'react';
import Item from "./Item";
import styles from './Roll.module.css';




function Roll( {items} ) {
    return (
        <div className={styles.roll__block}>
            <div className={styles.top}>
                <div className={styles.title}>Новинки 2023</div>
                <a className={styles.more} href="/new">Все новинки</a>
            </div>
            <div className={styles.bottom}>
            {items.map(item => <Item item={item} key={item.id} />)}
            </div>
        </div>
        
    );
}

export default Roll