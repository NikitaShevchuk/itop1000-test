import { ConverterContext } from '@/context/ConverterProvider'
import classNames from 'classnames'
import React, { FC } from 'react'
import { SelectItem } from './SelectItem'
import { useFilterCurrencies } from './hooks/useFilterCurrencies'
import style from './input.module.scss'

const getWrapperClassName = (selectIsShown: boolean) => classNames(
    style.input__select,
    style.select,
    selectIsShown
        ? style.select__shown
        : style.select__hidden
)

interface Props {
    selectIsShown: boolean
    inputValue: string
    initialValue: string | undefined
    setIsSelectShown: (isShown: boolean) => void
    setInputValue: (inputValue: string) => void
    setInitialValue: (currencies: Array<[string, string]> | undefined, isInitial?: boolean) => void
}

export const Select: FC<Props> = ({
    selectIsShown,
    setIsSelectShown,
    setInputValue,
    inputValue,
    initialValue,
    setInitialValue,
}) => {
    const state = React.useContext(ConverterContext)
    const isFirstCurrency = state?.firstCurrency === initialValue
    const filteredCurrencies = isFirstCurrency
        ? state?.filteredFirstCurrencies
        : state?.filteredSecondCurrencies

    useFilterCurrencies(inputValue, state?.cachedCurrencies, initialValue)

    React.useEffect(() => {
        if (!initialValue || initialValue === 'Loading...') {
            setInitialValue(state?.cachedCurrencies, true)
        };
    }, [state?.cachedCurrencies]);

    const onSelectItemClick = (newInputValue: string) => {
        setInputValue(newInputValue)
        setIsSelectShown(false)
    };
    return (
        <div className={getWrapperClassName(selectIsShown)}>
            {filteredCurrencies && filteredCurrencies.map(([title, value]) => (
                <SelectItem
                    title={title}
                    value={value}
                    key={title}
                    onSelectItemClick={onSelectItemClick}
                />
            ))}
        </div>
    )
}
