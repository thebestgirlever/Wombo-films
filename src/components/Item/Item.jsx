import { Link } from 'react-router-dom';
import { ROLL_TYPE } from '../../main/Roll/Roll';
import styles from './Item.module.css';

function Item({ item, type = ROLL_TYPE.VERTICAL }) {
    const src = type === ROLL_TYPE.VERTICAL ? item.poster_vertically : item.poster_horizontally

    console.log('item >>', item)

    return (
        <Link to={`/product/${item.id}`}>
            <div className={styles.item}>
                <img className={styles.roll__image} src={src} alt="Movie" />
                <div className={styles.movie__name}>{item.name}</div>
                <div className={styles.year}>{item.year}</div>
            </div>
        </Link>
    )
}

export default Item