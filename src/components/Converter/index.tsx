import React from 'react'
import { Input } from '../Input'
import style from './converter.module.scss'

export const Converter = () => {
    const [inputValue, setInputValue] = React.useState<string>('')
    return (
        <div className={style.converter}>
            <Input
                id='first-input'
                inputValue={inputValue}
                setInputValue={setInputValue}
                labelText='Amount'
            />
        </div>
    )
}
