import clsx from 'clsx'

import { ReactComponent as Logo } from './logo.svg';
import styles from './Header.module.css';

import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const onBurgerClick = () => {
        setIsOpen(value => !value)
    }

    return (
        <div className={styles.Header}>
            <div className={styles.left}>
                <div className={styles.burger}>
                    <div className={styles.menu__icon} onClick={onBurgerClick}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.99719 5C2.44646 5 2 4.55228 2 4C2 3.44772 2.44646 3 2.99719 3H17.0028C17.5535 3 18 3.44772 18 4C18 4.55228 17.5535 5 17.0028 5H2.99719Z" fill="white" />
                            <path d="M2.99719 11C2.44646 11 2 10.5523 2 10C2 9.44772 2.44646 9 2.99719 9H17.0028C17.5535 9 18 9.44772 18 10C18 10.5523 17.5535 11 17.0028 11H2.99719Z" fill="white" />
                            <path d="M2.99719 17C2.44646 17 2 16.5523 2 16C2 15.4477 2.44646 15 2.99719 15H17.0028C17.5535 15 18 15.4477 18 16C18 16.5523 17.5535 17 17.0028 17H2.99719Z" fill="white" />
                        </svg>
                    </div>
                    <div className={clsx(styles.mini__menu__overlay, {
                        [styles.mini__menu__overlay_opend]: isOpen
                    })} onClick={onBurgerClick} />
                    <div className={clsx(styles.mini__menu, {
                        [styles.mini__menu_opend]: isOpen
                    })} >
                        <Link className={styles.mini__menu__item} to="/movies">Фильмы</Link>
                        <Link className={styles.mini__menu__item} to="/cartoons">Мультфильмы</Link>
                        <Link className={styles.mini__menu__item} to="/series">Сериалы</Link>
                        <Link className={styles.mini__menu__item} to="/collections">
                            Подборки
                        </Link>
                        <Link className={styles.mini__menu__item} to="/new">
                            Новинки
                        </Link>
                    </div>
                </div>

                <div className={styles.logo}>
                    <Link to='/'>
                        <Logo className={styles.img__logo} />
                    </Link>
                </div>

                <div className={styles.main__menu}>
                    <ul className={styles.menu}>
                        <Link className={styles.text} to='/movies'><li>Фильмы</li></Link>
                        <Link className={styles.text} to='/cartoons'><li>Мультфильмы</li></Link>
                        <Link className={styles.text} to='/series'><li>Сериалы</li></Link>
                        <Link className={styles.text} to='/colections'><li>Подборки</li></Link>
                        <Link className={styles.text} to='/new'><li>Новинки</li></Link>
                    </ul>
                </div>
            </div>
            <div className={styles.search}>
                <input className={styles.input__search}
                    type="text"
                    placeholder="ПОИСК"
                // onChange={e => {
                //     searchChange(e.target.value)
                // }}
                />
                <Link to='/search'>
                    <svg className={styles.img__search} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
                        <path fill="#DC773D" fillRule="evenodd" d="m21 19.3 6.7 6.7c.4.5.4 1.2 0 1.7-.5.4-1.2.4-1.7 0l-6.7-6.8a11.8 11.8 0 1 1 1.7-1.7ZM2.2 11.8a9.5 9.5 0 1 0 19 0 9.5 9.5 0 0 0-19 0Z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div >
    )
}

export default Header