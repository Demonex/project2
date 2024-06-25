import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { ReactComponent as BackBtn } from '../../assets/icons/bitop-back-btn.svg'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import './StockSell.scss'

export const StockSell: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='sell-container'>


            <div className='sell-header'>

                <div className='sell-back noSelect' onClick={() => { navigate(-1) }}>
                    <BackBtn />
                </div>

                <div className='sell-header-text'>
                    Продажа
                </div>
            </div>

            <div className='sell-stock-info'>

                <div className='sell-stock-info-left'>

                    <div className='sell-stock-logo'>
                        <Logo />
                    </div>

                    <div className='sell-stock-name'>
                        Apple Inc
                    </div>

                </div>

                <div className='sell-stock-price'>
                    1 882
                </div>
            </div>

            <div className='sell-separator' />

            <div className='sell-buy'>
                <div className='sell-buy-header'>
                    Продажа
                </div>

                <div className='sell-buy-price'>
                    5 291 $
                </div>
            </div>

            <div className='sell-separator' />

            <div className='sell-amount'>
                <div className='sell-amount-header'>
                    Количество
                </div>

                <input className='sell-amount-input' placeholder='...' >

                </input>
            </div>

            <div className='sell-separator' />

            <div className='sell-overall'>
                <div className='sell-overall-text'>
                    Итого
                </div>

                <div className='sell-overall-price'>
                    1 882
                </div>
            </div>

            {/* <div className='sell-buy-btn-container'>
                <div className='sell-buy-btn'>
                    Продать
                </div>
            </div> */}

            <NavLink to={'/bag'} className='sell-buy-btn-container noSelect '>
                <div className='sell-buy-btn'>
                    Продать
                </div>
            </NavLink>

        </div>
    )
}