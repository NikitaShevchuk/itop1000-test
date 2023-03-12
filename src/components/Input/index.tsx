import React, { FC } from 'react'
import style from './input.module.scss'

interface Props {
    labelText: string
    inputValue: string
    setInputValue: (value: string) => void
    id: string
}

export const Input: FC<Props> = ({ inputValue, labelText, setInputValue, id }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
    return (
        <div className={style.input}>
            <label className='title' htmlFor={id}>{labelText}</label>
            <input onChange={onChange} value={inputValue} id={id} />
        </div>
    )
}
