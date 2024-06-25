import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ReactComponent as BackBtn } from '../../assets/icons/bitop-back-btn.svg'
import { ReactComponent as StocksLogo } from '../../assets/icons/logo.svg'
import { BriefcaseInfo } from './briefcase-info-component/BriefcaseInfo'
import { StocksGraph } from './stocks-graph-component/StocksGraph'

import './StocksDetails.scss'
import { TimeSwitch } from './time-switch-component/TimeSwitch'

export const StocksDetails: React.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams()

    return (
        <div className='details-container'>

            <div onClick={() => navigate(-1)} className='details-back'>
                <BackBtn />
            </div>

            <div className='details-stocks-name'>
                <StocksLogo className='details-stocks-logo' />

                <div className='details-stocks-text'>
                    Apple Inc
                </div>
            </div>

            <div className='details-stocks-price'>

                <div className='details-stocks-price-text'>
                    596.76
                </div>

                <div className='details-stocks-price-delta green'>
                    + 6,07%
                </div>
            </div>

            <StocksGraph />

            <TimeSwitch />

            <BriefcaseInfo />

            <div className='details-stocks-actions'>

                <div className='details-stocks-actions-btn sell noSelect' onClick={() => navigate(`/sell/${id}`)}>
                    Продать
                </div>

                <div className='details-stocks-actions-btn purchase noSelect' onClick={() => navigate(`/purchase/${id}`)}>
                    Купить
                </div>

            </div>

        </div>
    )
}