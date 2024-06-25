import React from 'react'
import { useFetchBagQuery } from '../../services/stock.service'
import { Balance } from './balance-component/Balance'

import './Briefcase.scss'
import { Tabs } from './tabs-component/Tabs'

export const Briefcase: React.FC = () => {

    const { data, isLoading, isError } = useFetchBagQuery()

    return (
        <div className='briefcase-container'>

            <div className='briefcase-name'>
                Портфель
            </div>

            <Balance data={data} isLoading={isLoading} />

            <Tabs myActions={data?.actions} isMyActionsLoading={isLoading} />
        </div>
    )
}

