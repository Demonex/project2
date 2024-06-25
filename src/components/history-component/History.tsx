import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as BackBtn } from '../../assets/icons/bitop-back-btn.svg'

import './History.scss'
import { Stocks } from './stocks-component/Stocks'

export const History: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='history-container'>

            <div className='history-header'>

                <div className='history-back-btn noSelect' onClick={() => navigate(-1)}>
                    <BackBtn />
                </div>

                <div className='history-header-text'>
                    Операции
                </div>
            </div>

            <div className='history-day'>
                <div className='history-day-header'>
                    14 марта
                </div>

                <div className='history-day-content'>
                    {Array(3).fill(0).map((_, id) => {
                        return <Stocks key={id} />
                    })}
                </div>
            </div>


            <div className='history-day'>
                <div className='history-day-header'>
                    12 марта
                </div>

                <div className='history-day-content'>
                    {Array(5).fill(0).map((_, id) => {
                        return <Stocks key={id} />
                    })}
                </div>
            </div>

        </div>
    )
}