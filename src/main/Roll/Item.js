import { ROLL_TYPE } from './Roll';
import styles from './Item.module.css';

function Item({ item, type = ROLL_TYPE.VERTICAL }) {

    const src = type === ROLL_TYPE.VERTICAL ? '/img/item-bg-1.png' : '/img/item-bg-2.png'
    
    return (
        <div className={styles.item}>
            <img className={styles.roll__image} src={src} alt="Movie" />
            <div className={styles.movie__name}>{item.name}</div>
            <div className={styles.year}>{item.year}</div>
        </div>
    )
}

export default Item