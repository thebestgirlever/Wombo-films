import { useState } from 'react';
import Item from "./Item";
import styles from './Roll.module.css';

import Slider from 'react-slick';
import "./slick.css";
import "./slick-theme.css";

function Roll({ items }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    }
    return (
        <div className={styles.roll__block}>
            <div className={styles.top}>
                <div className={styles.title}>Новинки 2023</div>
                <a className={styles.more} href="/new">Все новинки</a>
            </div>
            <Slider className={styles.bottom} {...settings}>
                {items?.map(item => <Item item={item} key={item.id} />)}
            </Slider>
        </div>

    );
}

export default Roll