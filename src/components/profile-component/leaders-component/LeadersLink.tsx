import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as LeadersLogo } from '../../../assets/icons/leaders.svg'

import './LeadersLink.scss'

export const LeadersLink: React.FC = () => {
    return (
        <NavLink className='portfolio-leaders-btn noSelect' to={'/leaderboard'}>

            <div className='leaders-btn-layout'>

                <div className='leaders-btn-text'>
                    ТАБЛИЦА ЛИДЕРОВ
                </div>

                <LeadersLogo />

            </div>

            <div className='leaders-btn-shadow' />

        </NavLink>
    )
}