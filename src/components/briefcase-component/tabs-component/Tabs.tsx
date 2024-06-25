import React, { useMemo, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useActions } from '../../../hooks/useActions'
import { IStock } from '../../../models/IMarket'
import { useFetchMarketQuery } from '../../../services/stock.service'
import { StocksList } from '../stocks-list-component/StocksList'

import './Tabs.scss'


interface ITabsProps {
    myActions: IStock[] | undefined,
    isMyActionsLoading: boolean
}

export const Tabs: React.FC<ITabsProps> = ({
    myActions,
    isMyActionsLoading
}) => {

    const { data: allActions, isLoading: isAllActionsLoading, isError: isAllActionsError } = useFetchMarketQuery()

    const location = useLocation()
    const [ style, setStyle ] = useState(location.pathname.includes('myActions') ? 'fade-left' : 'fade-right')
    const { saveLastRoute } = useActions()

    const mock1 = useMemo((): IStock[] => [
        { id: '1', amount: 5, icon: '', name: 'Apple Inc', price: 1234, price_change: 3 },
        { id: '2', amount: 25, icon: '', name: 'Test1', price: 12354, price_change: -50 },
        { id: '3', amount: 15, icon: '', name: 'Test2', price: 122434, price_change: 10 },
    ], [])

    const mock2 = useMemo((): IStock[] => [
        { id: '1', amount: 5, icon: '', name: 'Appl Inc', price: 1234, price_change: 3 },
        { id: '2', amount: 25, icon: '', name: 'Tes1', price: 12354, price_change: -50 },
        { id: '3', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '4', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '5', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '6', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '7', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '7', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '7', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '7', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '7', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '7', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '7', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
        { id: '7', amount: 15, icon: '', name: 'Tet2', price: 122434, price_change: 10 },
    ], [])

    return (
        <div className='tabs-container'>

            <div className='tabs-header'>

                <NavLink
                    className='tabs noSelect'
                    to={'myActions'}
                >
                    Ваши акции
                </NavLink>

                <NavLink
                    className='tabs noSelect'
                    to={'allActions'}
                >
                    Все акции
                </NavLink>

            </div>

            <div className='tabs-content'>

                <TransitionGroup className='tabs-slider'>
                    <CSSTransition key={location.key} classNames={style} timeout={300} onEntered={() => {
                        setStyle(prev => prev === 'fade-right' ? 'fade-left' : 'fade-right')
                        saveLastRoute(location.pathname)
                    }}>

                        <Routes location={location}>
                            <Route
                                path='myActions'
                                element={<StocksList data={mock1} isLoading={isMyActionsLoading} />}
                                />
                            <Route
                                path='allActions'
                                element={<StocksList data={mock2} isLoading={isAllActionsLoading} />}
                                />
                            {/* <Route path='*' element={<Navigate to='/myActions' />} /> */}
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>

            </div>

        </div>
    )
}