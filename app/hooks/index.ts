import { useQuery } from 'react-query'
import { saApi, saRequest } from '../config/api'

export const useAllSymbols = () => useQuery('getAllSymbols', () => saApi.get('', { params: { 'all': '', type: 0 } }))