import selectClose from '@assets/icons/select-close.svg'
import selectOpen from '@assets/icons/select.svg'
import debounce from 'lodash.debounce'
import React, { FC } from 'react'
import { Select } from './Select'
import { useInitializeValue } from './hooks/useInitializeVules'
import style from './input.module.scss'

interface Props {
    labelText: string
    initialValue?: string
    id: string
    withSelect?: boolean
    setInitialValue?: (value: string) => void
    children?: React.ReactNode
}

export const Input: FC<Props> = ({
    id,
    initialValue,
    setInitialValue,
    labelText,
    withSelect
}) => {
    const [inputValue, setInputValue] = React.useState<string>(initialValue || '')
    const [selectIsShown, setIsSelectShown] = React.useState<boolean>(false)

    const updateInitialValue = useInitializeValue(initialValue, setInputValue, setInitialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if (!withSelect) updateInitialValue(e.target.value)
    }
    const closeSelect = () => setTimeout(() => setIsSelectShown(false), 100)
    const openSelect = () => setIsSelectShown(true)

    return (
        <div className={style.input}>
            <label className='title' htmlFor={id}>{labelText}</label>
            <div className={style.input__wrapper}>
                <input
                    onFocus={openSelect}
                    onBlur={closeSelect}
                    onChange={onChange}
                    value={inputValue}
                    id={id}
                />
                {withSelect &&
                    <img
                        src={selectIsShown ? selectClose : selectOpen}
                        className={style.input__wrapper__icon}
                    />
                }
            </div>
            {withSelect &&
                <Select
                    selectIsShown={selectIsShown}
                    setIsSelectShown={setIsSelectShown}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                />
            }
        </div>
    )
}
