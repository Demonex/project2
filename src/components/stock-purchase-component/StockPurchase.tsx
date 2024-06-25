import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { ReactComponent as BackBtn } from '../../assets/icons/bitop-back-btn.svg'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import './StockPurchase.scss'

export const StockPurchase: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='purchase-container'>

            <div className='purchase-header'>

                <div className='purchase-back noSelect' onClick={() => navigate(-1)}>
                    <BackBtn />
                </div>

                <div className='purchase-header-text'>
                    Покупка
                </div>
            </div>

            <div className='purchase-stock-info'>

                <div className='purchase-stock-info-left'>

                    <div className='purchase-stock-logo'>
                        <Logo />
                    </div>

                    <div className='purchase-stock-name'>
                        Apple Inc
                    </div>

                </div>

                <div className='purchase-stock-price'>
                    1 882
                </div>
            </div>

            <div className='purchase-separator' />

            <div className='purchase-buy'>
                <div className='purchase-buy-header'>
                    Покупка
                </div>

                <div className='purchase-buy-price'>
                    5 291 $
                </div>
            </div>

            <div className='purchase-separator' />

            <div className='purchase-amount'>
                <div className='purchase-amount-header'>
                    Количество
                </div>

                <input className='purchase-amount-input' placeholder='...' >

                </input>
            </div>

            <div className='purchase-separator' />

            <div className='purchase-overall'>
                <div className='purchase-overall-text'>
                    Итого
                </div>

                <div className='purchase-overall-price'>
                    1 882
                </div>
            </div>

            {/* <div className='purchase-buy-btn-container'>
                <div className='purchase-buy-btn'>
                    Купить
                </div>
            </div> */}

            <NavLink to={'/bag'} className='purchase-buy-btn-container noSelect '>
                <div className='purchase-buy-btn'>
                    Купить
                </div>
            </NavLink>

        </div>
    )
}