import styles from './Item.module.css';

import Pic from './Pic1.png'

function Item ( {item} ) {
    return (
    <div className={styles.item}>
        <img className={styles.roll__image} src={Pic} alt="Movie #1"/>
        <div className={styles.movie__name}>{item.name}</div>
        <div className={styles.year}>{item.year}</div>
    </div>
    )
}

export default Item