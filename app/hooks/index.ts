import { useQuery } from 'react-query'
import { saGetRequest } from '../config/api'
import { FutureItemType, SACurrencyItemType, SASymbolListItemType } from '../types'

export const useAllSymbols = () => useQuery<Array<SASymbolListItemType>>('getAllSymbols', () => saGetRequest<{ all: any, type: number }>()({ all: '', type: 2 }),
    {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 10,
        refetchInterval: false
    })

export const useAllCurrencies = () => useQuery<{ data: Array<SACurrencyItemType> }>('getAllCurrencies', () => saGetRequest<{ currency: string }>()({ currency: '' }),
    {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 10,
        refetchInterval: false
    })


export const useFutureSymbols = () => useQuery<Array<FutureItemType>>('getFuture', async () => {
    try {
        
        const res = await fetch('/api/ati')
        return res?.json()
    } catch (error) {
        throw new Error('خطا در دریافت اطاعات لطفا دقایقی بعد تلاش کنید')
    }
},
    {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 10,
        refetchInterval: false
    })
