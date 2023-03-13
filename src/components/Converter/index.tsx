import { ConverterContext } from '@/context/ConverterProvider'
import React from 'react'
import { Input } from '../Input'
import { useGetCurrencies } from '../Input/hooks/useGetCurrencies'
import style from './converter.module.scss'
import { useSetAmount } from './hooks/useSetAmount'
import { useSetCurrency } from './hooks/useSetCurrency'

export const Converter = () => {
    const state = React.useContext(ConverterContext)
    const setFirstAmount = useSetAmount('firstAmount')
    const setSecondAmount = useSetAmount('secondAmount')
    const setFirstCurrency = useSetCurrency('first')
    const setSecondCurrency = useSetCurrency('second')
    useGetCurrencies()
    return (
        <div className={style.converter}>
            <div className={style.converter__column}>
                <Input
                    id='first-amount'
                    labelText='Amount'
                    setInitialValue={setFirstAmount}
                    initialValue={state?.firstAmount || ''}
                />
                <div className="devider"></div>
                <Input
                    id='first-currency'
                    initialValue={state?.firstCurrency || ''}
                    labelText='Currency'
                    withSelect
                    setInitialValue={setFirstCurrency}
                />
            </div>
            <div className={style.converter__column}>
                <Input
                    id='second-amount'
                    labelText='Amount'
                    initialValue={state?.secondAmount || ''}
                    setInitialValue={setSecondAmount}
                />
                <div className="devider"></div>
                <Input
                    id='second-currency'
                    initialValue={state?.secondCurrency || ''}
                    labelText='Currency'
                    withSelect
                    setInitialValue={setSecondCurrency}
                />
            </div>
        </div>
    )
}
