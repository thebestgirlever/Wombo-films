import { useState } from 'react';
import styles from './Preview.module.css';
import Film from './Film';

import Slider from 'react-slick';
import "./slick.css";
import "./slick-theme.css";

function Preview({ items }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className={styles.block}>
            <Slider className={styles.bottom} {...settings}>
                {items?.map(item => <Film item={item} key={item.id} />)}
            </Slider>
        </div>
    );
}

export default Preview