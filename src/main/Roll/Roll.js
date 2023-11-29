import Item from "./Item";
import cn from 'classnames';
import styles from './Roll.module.css';

import Slider from 'react-slick';

const ArrowNext = ({ className, style, onClick }) => (
    <div className={cn(styles.arrow, styles.next)} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="32" fill="none" viewBox="0 0 17 32">
            <path fill="#fff" d="M14.586 16 .293 1.707A1 1 0 0 1 1.707.293l15 15a1 1 0 0 1 0 1.414l-15 15a1 1 0 0 1-1.414-1.414L14.586 16Z" />
        </svg>
    </div>
)
const ArrowPrev = ({ className, style, onClick }) => (
    <div className={cn(styles.arrow, styles.prev)} onClick={onClick} >
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="32" fill="none" viewBox="0 0 17 32">
            <path fill="#fff" d="M14.586 16 .293 1.707A1 1 0 0 1 1.707.293l15 15a1 1 0 0 1 0 1.414l-15 15a1 1 0 0 1-1.414-1.414L14.586 16Z" />
        </svg>
    </div>
)

export const ROLL_TYPE = {
    VERTICAL: 'VERTICAL',
    HORIZONTAL: 'HORIZONTAL'
}

const ROLL_SETTINGS = {
    [ROLL_TYPE.VERTICAL]: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]

    },
    [ROLL_TYPE.HORIZONTAL]: {
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]

    },
}


function Roll({ items, type = ROLL_TYPE.VERTICAL, title = 'Новинки 2023', moreLinkText = 'Все новинки' }) {
    const settings = ROLL_SETTINGS[type]

    return (
        <div className={styles.roll__block}>
            <div className={styles.top}>
                <div className={styles.title}>{title}</div>
                <a className={styles.more} href="/new">{moreLinkText}</a>
            </div>
            <Slider className={styles.bottom} {...settings}>
                {items?.map(item => <Item item={item} key={`item-${111}`} type={type} />)}
            </Slider>
        </div>

    );
}

export default Roll