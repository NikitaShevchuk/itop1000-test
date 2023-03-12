import style from './title.module.scss'

export const Title = () => {
    return (
        <div className={style.title}>
            <h1 className={style.title__main}>123123 USD</h1>
            <h2 className={style.title__secondary}>Data from: </h2>
        </div>
    )
}
