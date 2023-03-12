import selectClose from '@assets/icons/select-close.svg'
import selectOpen from '@assets/icons/select.svg'
import React, { FC } from 'react'
import { Select } from './Select'
import style from './input.module.scss'

interface Props {
    labelText: string
    inputValue: string
    setInputValue: (value: string) => void
    id: string
    selectProps?: any
}

export const Input: FC<Props> = ({
    id,
    inputValue,
    labelText,
    setInputValue,
    selectProps
}) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
    const [selectIsShown, setIsSelectShown] = React.useState<boolean>(false)
    const toggleSelect = () => setIsSelectShown(!selectIsShown)
    return (
        <div className={style.input}>
            <label className='title' htmlFor={id}>{labelText}</label>
            <div className={style.input__wrapper}>
                <input onChange={onChange} value={inputValue} id={id} />
                {selectProps ?
                    <img
                        src={selectIsShown ? selectClose : selectOpen}
                        className={style.input__wrapper__icon}
                        onClick={toggleSelect}
                    /> : null
                }
            </div>
            {selectProps ?
                <Select
                    selectIsShown={selectIsShown}
                    setIsSelectShown={setIsSelectShown}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                /> : null
            }
        </div>
    )
}
