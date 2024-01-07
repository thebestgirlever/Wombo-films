import styles from './Preview.module.css';
import Film from './Film';

import Slider from 'react-slick';

function Preview({ items }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <ul style={{ margin: "0px" }}> {dots} </ul>
        ),
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