import React from 'react'
import { Loading } from '..'
import { convertDataUpdate } from '@/app/utils'

export const Header = ({ dataUpdatedAt, isFetching, title }: { dataUpdatedAt: any, isFetching: boolean, title: string }) => {
    return (
        <div className='flex flex-row justify-between border-b py-2'>

            <span className='font-bold '>{title}</span>
            {(isFetching) ? <Loading /> : <span>آخرین به روز رسانی : <strong dir='ltr'>{convertDataUpdate(dataUpdatedAt)}</strong></span>}

        </div>
    )
}
