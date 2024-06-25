import React from 'react'

import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'

import './Stocks.scss'


export const Stocks: React.FC = () => {
    return (
        <div className='history-stocks'>

            <div className='history-stocks-info'>

                <div className='history-stocks-logo'>
                    <Logo width={40} height={40}/>
                </div>

                <div className='history-stocks-name'>

                    <div className='history-stocks-name-text'>
                        Покупка 396 Apple Inc
                    </div>

                </div>
            </div>

            <div className='history-stocks-prices'>
                <div className='history-stocks-prices-text'>
                    -1,882
                </div>

            </div>

        </div>

    )
}