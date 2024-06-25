import React, { useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import './Navbar.scss'

import { ReactComponent as Account } from '../../assets/icons/account.svg'
import { ReactComponent as Bag } from '../../assets/icons/bag.svg'
import { ReactComponent as News } from '../../assets/icons/news.svg'
import { CustomLink } from './CustomLink'
import { useTypedSelector } from '../../hooks/useTypedHooks'


export const NavBar: React.FC = () => {

    const location = useLocation()

    const setActive = useCallback(
        ({isActive}: {isActive: boolean}) => isActive ? 'active-link' : 'link', [])

    if (location.pathname.includes('stock')) {
        return null
    }

    if (location.pathname.includes('history')) {
        return null
    }

    if (location.pathname.includes('purchase')) {
        return null
    }

    if (location.pathname.includes('sell')) {
        return null
    }

    if (location.pathname.includes('leaderboard')) {
        return null
    }

    if (location.pathname.includes('intro')) {
        return null
    }

    if (location.pathname === '/') {
        return null
    }

    return (
        <div className='navbar noSelect'>
            <div className='navbar-container'>
                <NavLink className={setActive} to='bag'>
                    <Bag />
                </NavLink>

                <NavLink className={setActive} to='news'>
                    <News />
                </NavLink>

                <NavLink className={setActive} to='profile'>
                    <Account />
                </NavLink>
            </div>
        </div>
    )
}