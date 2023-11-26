import { useState } from 'react';
import Item from "./Item";
import styles from './Roll.module.css';

import Slider from 'react-slick';
import "./slick.css";
import "./slick-theme.css";

function Roll({ items }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            // {
            //     breakpoint: 1920,
            //     settings: {
            //         slidesToShow: 6,
            //         slidesToScroll: 6,
            //         infinite: true,
            //         dots: false
            //     }
            // },
            // {
            //     breakpoint: 1440,
            //     settings: {
            //         slidesToShow: 6,
            //         slidesToScroll: 6,
            //         infinite: true,
            //         dots: false
            //     }
            // },
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 6,
            //         slidesToScroll: 6,
            //         infinite: true,
            //         dots: false
            //     }
            // },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            }
        ]
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