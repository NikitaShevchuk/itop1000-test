import classNames from 'classnames'
import { FC } from 'react'
import { SelectItem } from './SelectItem'
import { useGetCurrencies } from './hooks/useGetCurrencies'
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
    setIsSelectShown: (isShown: boolean) => void
    setInputValue: (inputValue: string) => void
}

export const Select: FC<Props> = ({
    selectIsShown,
    setIsSelectShown,
    setInputValue,
    inputValue
}) => {
    const currencies = useGetCurrencies(inputValue)
    const onSelectItemClick = (newInputValue: string) => {
        setInputValue(newInputValue)
        setIsSelectShown(false)
    };
    return (
        <div className={getWrapperClassName(selectIsShown)}>
            {currencies.map(([title, value]) => (
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
