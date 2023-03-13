import { currenciesService } from '@/services/currencies'
import { useQuery } from 'react-query'
import style from './title.module.scss'

export const Title = () => {
    // const { data: basicCurrencies, refetch } = useQuery(
    //     'basicCurrencies',
    //     currenciesService.getBasicCurrencies
    // )
    // const date = new Date()
    // date.setTime(Number(basicCurrencies?.timestamp) * 1000)
    // const lastUpdate = date.toLocaleTimeString()
    // const update = () => refetch()
    return (<></>
        // <div className={style.title}>
        //     <h1 className={style.title__main}>
        //         USD - UAH: {basicCurrencies?.USD || '0.00'} |
        //         EUR - UAH: {basicCurrencies?.EUR || '0.00'}
        //     </h1>
        //     <h2 className={style.title__secondary}>
        //         <span className='link' onClick={update}>Update</span>. Last updated: {lastUpdate}.
        //         Data from: <a target='_blank' href='https://exchangeratesapi.io/'>exchangeratesapi.io</a>
        //     </h2>
        // </div>
    )
}
