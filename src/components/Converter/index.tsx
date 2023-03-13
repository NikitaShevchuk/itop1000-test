import { ConverterContext } from '@/context/ConverterProvider'
import React from 'react'
import { Input } from '../Input'
import style from './converter.module.scss'
import { useSetAmount } from './hooks/useSetAmount'

export const Converter = () => {
    const state = React.useContext(ConverterContext)
    const setFirstAmount = useSetAmount('firstAmount')
    const setSecondAmount = useSetAmount('secondAmount')
    console.log(state)
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
                />
            </div>
            <div className={style.converter__column}>
                <Input
                    id='second-amount'
                    labelText='Amount'
                    initialValue={state?.secondAmount || ''}
                    setInitialValue={setSecondAmount}
                />
            </div>
        </div>
    )
}
