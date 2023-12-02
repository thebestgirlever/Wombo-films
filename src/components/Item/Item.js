import { ROLL_TYPE } from '../../main/Roll/Roll';
import styles from './Item.module.css';

function Item({ item, type = ROLL_TYPE.VERTICAL }) {

    const src = type === ROLL_TYPE.VERTICAL

    return (
        <div className={styles.item}>
            {type === ROLL_TYPE.VERTICAL 
                ? <img className={styles.roll__image} src={item.poster_vertically} alt="Movie" /> 
                : <img className={styles.roll__image} src={item.poster_horizontally} alt="Movie" />}
            <div className={styles.movie__name}>{item.name}</div>
            <div className={styles.year}>{item.year}</div>
        </div>
    )
}

export default Item