import { useQuery } from 'react-query'
import { saApi, saGetRequest } from '../config/api'
import { SASymbolListItemType } from '../types'

export const useAllSymbols = () => useQuery<Array<SASymbolListItemType>>('getAllSymbols', () => saGetRequest<{ all: any, type: number }>()({ all: '', type: 0 }))