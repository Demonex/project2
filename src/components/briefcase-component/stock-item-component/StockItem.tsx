import React from 'react'

import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'
import { IStock } from '../../../models/IMarket'

import './StockItem.scss'


interface IStockItemProps {
    stock: IStock
    onClick: (id: string) => void
}

export const StockItem: React.FC<IStockItemProps> = ({
    stock: {
        id,
        name,
        price,
        price_change,
        amount,
        icon
    }, onClick }) => {
    return (
        <div className='stock' onClick={() => onClick(id)}>

            <div className='stock-info'>

                <div className='stock-logo'>
                    {/* <img src={icon} /> */}
                    <Logo width={40} height={40} />
                </div>

                <div className='stock-name'>

                    <div className='stock-name-text'>
                        {name}
                    </div>

                    <div className='stock-amount'>
                        {amount ? `${amount} шт.` : ''}
                    </div>
                </div>
            </div>

            <div className='stock-prices'>
                <div className='stock-prices-text'>
                    ${price}
                </div>

                <div className={`stock-prices-delta ${price_change > 0 ? 'green' : 'red'}`}>
                    {price_change}%
                </div>
            </div>

        </div>

    )
}