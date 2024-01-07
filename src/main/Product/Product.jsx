import styles from "./Product.module.css";

const Product = ({ item }) => {
    const src = item.poster_vertically;
    const video_trailer = item.video_trailer;

    const $trailer = document.getElementById("trailer");
    const $video = document.getElementById("video");

    $trailer?.addEventListener('click', e => {
        $video.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth', 
        });
    });

    console.log("video_trailer!!!!!!!!!!!!", video_trailer);
    return (
        <>
            <div className={styles.wrapper} style={{ backgroundImage: `url(${item.bg || '/img/Avengers.png'})` }}>
                <div className={styles.shadow} />
                <div className={styles.item}>
                    <div className={styles.bread__crumbs}><a className={styles.link} href="/">Главная</a>  /  <a className={styles.link} href="/movies">Фильмы</a>  /  {item.name}</div>
                    <div className={styles.title}>{item.name}</div>
                    <div className={styles.tags}>
                        <div className={styles.tag}>{item.year}</div>
                        <div className={styles.tag}>{item.country}</div>
                        {item.isFantastic ? <div className={styles.tag}>Фантастика</div> : null}
                        {item.isAction ? <div className={styles.tag}>Боевик</div> : null}
                        {item.isComedy ? <div className={styles.tag}>Комедия</div> : null}
                        {item.isDrama ? <div className={styles.tag}>Драма</div> : null}
                        {item.isHorror ? <div className={styles.tag}>Ужасы</div> : null}
                        {item.isRomance ? <div className={styles.tag}>Романтика</div> : null}
                        <div className={styles.permission}>{item.permission}</div>
                    </div>
                    <div className={styles.bottom}>
                        <button className={styles.watch}>Смотреть</button>
                        <button className={styles.trailer} id="trailer">Трейлер</button>
                        <div className={styles.share__title}>Поделиться</div>
                        <a href="" className={styles.share__icon}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#DC773D" fill-opacity="0.2" />
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" stroke-opacity="0.1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5811 20.1126C27.5811 20.1126 30.687 16.1552 30.9956 14.8546C31.0984 14.3902 30.8722 14.13 30.3373 14.13H27.6429C27.0258 14.13 26.7996 14.3715 26.6145 14.7245C26.6145 14.7245 25.1577 17.5284 23.3852 19.2952C22.8162 19.8663 22.5269 20.0382 22.2128 20.0382C21.9594 20.0382 21.8426 19.8475 21.8426 19.3323V14.8175C21.8426 14.1858 21.7603 14 21.1844 14H16.8651C16.5359 14 16.3302 14.1728 16.3302 14.4087C16.3302 15.0035 17.3381 15.1379 17.3381 16.7497V20.0754C17.3381 20.7443 17.297 21.0044 16.9473 21.0044C16.0217 21.0044 13.8209 18.1246 12.5869 14.8546C12.34 14.1858 12.0726 14 11.3732 14H8.67884C8.28801 14 8 14.2415 8 14.5944C8 15.2447 8.84333 18.2546 12.1549 22.2864C14.3762 24.9989 17.297 26.4667 19.9297 26.4667C21.534 26.4667 21.9249 26.2252 21.9249 25.612V23.5312C21.9249 23.0109 22.1511 22.788 22.4802 22.788C22.8504 22.788 23.5039 22.8954 25.0307 24.2558C26.8407 25.8165 26.9641 26.4667 27.9515 26.4667H30.975C31.2835 26.4667 31.5714 26.3366 31.5714 25.8722C31.5714 25.259 30.687 24.1629 29.3295 22.8623C28.7741 22.1934 27.8691 21.4689 27.5811 21.1345C27.1699 20.7443 27.2932 20.5212 27.5811 20.1126Z" fill="#FFD5BC" />
                        </svg></a>
                        <a href="" className={styles.share__icon}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#DC773D" fill-opacity="0.2" />
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" stroke-opacity="0.1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4215 30.0968V20.9297H24.5655L25.0362 17.3571H21.4215V15.0761C21.4215 14.0417 21.715 13.3368 23.2306 13.3368L25.1636 13.3359V10.1406C24.8292 10.0972 23.6818 10 22.347 10C19.5601 10 17.6521 11.6648 17.6521 14.7224V17.3572H14.5V20.9298H17.652V30.0969L21.4215 30.0968Z" fill="#FFD5BC" />
                        </svg></a>
                        <a href="#" className={styles.share__icon}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#DC773D" fill-opacity="0.2" />
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" stroke-opacity="0.1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.42 14.239C22.42 13.0007 21.3406 11.9934 20.0146 11.9934C18.6889 11.9934 17.6091 13.0007 17.6091 14.239C17.6091 15.4759 18.6889 16.4835 20.0146 16.4835C21.3406 16.4835 22.42 15.4759 22.42 14.239ZM25.6272 14.2396C25.6272 17.1279 23.1099 19.477 20.0147 19.477C16.9195 19.477 14.4019 17.1279 14.4019 14.2396C14.4019 11.3501 16.9195 9 20.0147 9C23.1099 9 25.6272 11.3501 25.6272 14.2396ZM25.6462 23.0851C24.6134 23.6856 23.4906 24.1113 22.327 24.3563L25.5224 27.311C26.1775 27.9149 26.1775 28.8956 25.5224 29.5005C24.8687 30.1051 23.8085 30.1051 23.1558 29.5005L20.0141 26.5969L16.8749 29.5005C16.5479 29.8024 16.1193 29.9535 15.6902 29.9535C15.2619 29.9535 14.8342 29.8024 14.507 29.5005C13.8527 28.8956 13.8527 27.9155 14.5062 27.311L17.7011 24.3563C16.538 24.1113 15.4156 23.6851 14.3828 23.0851C13.6003 22.6295 13.3649 21.6742 13.8578 20.9503C14.3499 20.2257 15.383 20.0077 16.1666 20.4634C18.5067 21.8241 21.5209 21.8248 23.8623 20.4634C24.6454 20.0077 25.6789 20.2257 26.1714 20.9503C26.6643 21.6735 26.4287 22.6295 25.6462 23.0851Z" fill="#FFD5BC" />
                        </svg></a>
                        <a href="" className={styles.share__icon__more}><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="14" fill="#DC773D" fill-opacity="0.2" />
                            <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="white" stroke-opacity="0.1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4486 17.31C16.8386 17.31 16.2926 17.5493 15.8766 17.9266L10.1479 14.5946C10.1893 14.41 10.2213 14.224 10.2213 14.032C10.2213 13.84 10.1886 13.6546 10.1479 13.4693L15.8119 10.1686C16.2439 10.5686 16.8152 10.8186 17.4486 10.8186C18.7839 10.8186 19.8599 9.74462 19.8599 8.40929C19.8599 7.07665 18.7832 6 17.4486 6C16.1159 6 15.0393 7.07665 15.0393 8.40865C15.0393 8.60331 15.0719 8.78599 15.1126 8.97132L9.44858 12.2747C9.01592 11.8727 8.44526 11.6233 7.81124 11.6233C6.47592 11.6233 5.3999 12.6993 5.3999 14.032C5.3999 15.3646 6.47592 16.4413 7.81124 16.4413C8.44456 16.4413 9.01592 16.1913 9.44791 15.7913L15.1666 19.1306C15.1272 19.3007 15.1026 19.478 15.1026 19.6547C15.1026 20.948 16.1565 22 17.4479 22C18.7406 22 19.7952 20.9487 19.7952 19.6547C19.7952 18.3606 18.7413 17.31 17.4486 17.31Z" fill="#FFD5BC" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.grade}>
                    <div className={styles.grade__title}>IMDB: 7.7</div>
                    <div className={styles.grade__title}>Кинопоиск: 7.5</div>
                </div>
                <div className={styles.description__text}>{item.discription}</div>
                <div className={styles.description__title}>Режиссеры:</div>
                <div className={styles.description__text}>Джеймс Ганн</div>
                <div className={styles.description__title}>В главных ролях:</div>
                <div className={styles.description__text}>Крис Пратт, Зои Салдана, Дэйв Батиста, Вин Дизель, Брэдли Купер</div>
            </div>
            <div className={styles.body__trailer}>
                <div className={styles.trailer__video}>
                    <div className={styles.video__title}>Трейлер</div>
                    <iframe className={styles.video} src={video_trailer} 
                        id="video"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className={styles.facts}>
                    <div className={styles.description__title}>Продолжительность:</div>
                    <div className={styles.description__text}>130 мин</div>
                    <div className={styles.description__title}>Возрастное ограничение:</div>
                    <div className={styles.description__text}>{item.permission}</div>
                    <div className={styles.description__title}>Бюджет:</div>
                    <div className={styles.description__text}>$ 200 000 000</div>
                    <div className={styles.description__title}>Страны:</div>
                    <div className={styles.description__text}>{item.country}</div>
                    <div className={styles.description__title}>Оригинальное название:</div>
                    <div className={styles.description__text}>Guardians of the Galaxy Vol. 2</div>
                    <div className={styles.description__title}>Дата выхода:</div>
                    <div className={styles.description__text}>9 сентября 2017</div>
                </div>
            </div>
            <img className={styles.poster} src={src} alt="Movie" />
        </>
    );
};

export default Product;
