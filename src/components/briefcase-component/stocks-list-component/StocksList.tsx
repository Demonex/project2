import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IStock } from '../../../models/IMarket'
import { StockItem } from '../stock-item-component/StockItem'
import { StocksSkeleton } from './stocks-skeleton-component/StocksSkeleton'

import './StocksList.scss'

interface IStocksListProps {
    data: IStock[] | undefined
    isLoading: boolean
}

export const StocksList: React.FC<IStocksListProps> = ({ data, isLoading }) => {

    const navigate = useNavigate()
    const location = useLocation()

    // const mock = useMemo((): IAction[] => [
    //     { id: '1', amount: 5, icon: '', name: 'Apple Inc', price: 1234, price_change: 3},
    //     { id: '2', amount: 25, icon: '', name: 'Test1', price: 12354, price_change: -50},
    //     { id: '3', amount: 15, icon: '', name: 'Test2', price: 122434, price_change: 10},
    // ], [])


    if (isLoading) {
        return (
            <StocksSkeleton count={5} />
        )
    }

    return (
        <div className={`stocks-list-content`}>
            {data && data.map((stock, index) => {
                return (
                    <StockItem key={index} stock={stock} onClick={(id) => navigate(`/stocks/${id}`)} />
                )
            })}
        </div>
    )

}