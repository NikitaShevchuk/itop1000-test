import { FC } from 'react'
import style from './box.module.scss'

interface Props {
    children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

export const Box: FC<Props> = ({ children }) => {
    return (
        <div className={style.box}>{children}</div>
    )
}
