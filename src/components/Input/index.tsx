import { ConverterContext } from '@/context/ConverterProvider'
import selectClose from '@assets/icons/select-close.svg'
import selectOpen from '@assets/icons/select.svg'
import React, { FC } from 'react'
import { Select } from './Select'
import { useInitializeValue } from './hooks/useInitializeValues'
import style from './input.module.scss'

interface Props {
    labelText: string
    initialValue?: string
    id: string
    withSelect?: boolean
    setInitialValue?: any
    selectValue?: string
}

export const Input: FC<Props> = ({
    id,
    initialValue,
    setInitialValue,
    labelText,
    withSelect,
}) => {
    const [inputValue, setInputValue] = React.useState<string>(initialValue || '')
    const [selectIsShown, setIsSelectShown] = React.useState<boolean>(false)
    const state = React.useContext(ConverterContext)

    const updateInitialValue = useInitializeValue(
        initialValue, setInputValue, setInitialValue, withSelect
    )

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if (!withSelect) updateInitialValue(e.target.value, state)
    }
    const closeSelect = () => {
        if (withSelect) {
            setTimeout(() => setIsSelectShown(false), 100)
            const isFirst = state && state.firstCurrency === initialValue
            const currencies = isFirst ? state.filteredFirstCurrencies : state?.filteredSecondCurrencies
            setInitialValue(currencies)
        }
    }
    const openSelect = () => {
        if (withSelect) {
            setInputValue('');
            setIsSelectShown(true)
        }
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (withSelect && e.key === 'Enter') closeSelect()
    }

    return (
        <div className={style.input}>
            <label className='title' htmlFor={id}>{labelText}</label>
            <div className={style.input__wrapper}>
                <input
                    onFocus={openSelect}
                    onBlur={closeSelect}
                    onKeyDown={onKeyDown}
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
                    initialValue={initialValue}
                    setInitialValue={setInitialValue}
                />
            }
        </div>
    )
}
