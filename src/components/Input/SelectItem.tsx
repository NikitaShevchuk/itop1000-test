import { FC } from 'react';
import style from './input.module.scss';

interface Props {
    title: string,
    value: string,
    onSelectItemClick: (inputValue: string) => void
}

export const SelectItem: FC<Props> = ({ title, value, onSelectItemClick }) => {
    const onClick = () => value && onSelectItemClick(`${title} - ${value}`);
    return (
        <div
            onClick={onClick}
            className={style.select__item}
        >
            {title} - <span className={style.select__item__full}>{value}</span>
        </div>
    )
}
