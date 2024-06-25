import React from 'react'

import './Intro.scss'

import { ReactComponent as LineStars } from '../../assets/icons/line-stars.svg'
import { ReactComponent as Arrow } from '../../assets/icons/stratched-arrow.svg'
import { NavLink } from 'react-router-dom'

export const Intro: React.FC = () => {
    return (
        <div className='intro-container'>

            <div className='intro-header'>
                Bauman Finan
                <span className='intro-header-last'>
                    ces
                </span>
            </div>

            <div className='intro-content'>
                <LineStars />
            </div>

            <div className='intro-bottom'>

                <div className='intro-bottom-text'>
                    Стань успешным инвестором в Бауманке
                </div>

                <NavLink className='intro-bottom-btn noSelect' to={'./guide'} >
                    Начать инвестировать

                    <Arrow />
                </NavLink>
            </div>
        </div>
    )
}