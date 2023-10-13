import { useQuery } from 'react-query'
import { saGetRequest } from '../config/api'
import { SASymbolListItemType } from '../types'

export const useAllSymbols = () => useQuery<Array<SASymbolListItemType>>('getAllSymbols', () => saGetRequest<{ all: any, type: number }>()({ all: '', type: 0 }),
    {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 10,
        refetchInterval:false
    })