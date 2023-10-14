'use client'
import React from 'react'
import { useAllCurrencies } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'

export const ClientPage = () => {

    const { data } = useAllCurrencies()

    console.log(data)
    if (!data) return <></>


    const dollar = data?.data.find(item => item.name == 'دلار')
    const tether = data?.data.find(item => item.name == 'تتر')

    const dollarUp = dollar && dollar?.change > 0
    const tetherUp = tether && tether?.change > 0

    return (
        <div className='flex flex-col gap-4' dir='rtl'>
            <span className='font-lg font-bold'>آربیتراژ دلار و تتر</span>
            {dollar && <div className={'flex flex-row gap-4 ltr '.concat(dollarUp ? 'text-green-600' : 'text-red-600')} >
                <span className='text-gray-700 font-bold'>دلار</span>
                <span>{convertToNumber(dollar.price)}</span>
                <span dir='ltr'>{convertToNumber(dollar.change)}</span>
                <span dir='ltr'>{convertToNumber(dollar.change_percent, false, false)}</span>
            </div>}


            {tether && <div className={'flex flex-row gap-4 ltr '.concat(tetherUp ? 'text-green-600' : 'text-red-600')} >
                <span className='text-gray-700 font-bold'>تتر</span>
                <span>{convertToNumber(tether.price)}</span>
                <span dir='ltr'>{convertToNumber(tether.change)}</span>
                <span dir='ltr' >{convertToNumber(tether.change_percent, false, false)}</span>
            </div>}

        </div>
    )
}
