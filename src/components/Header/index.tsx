import backgroundImage from '@assets/icons/logo.svg'
import style from './header.module.scss'

export const Header = () => {
    return (
        <header className={style.header}>
            <img src={backgroundImage} className={style.header__logo} />
            <span className={style.header__text}>
                Currency converter
            </span>
        </header>
    )
}
