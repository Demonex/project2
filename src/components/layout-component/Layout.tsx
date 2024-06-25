import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../navbar-component/Navbar'

import './Layout.scss'

export const Layout: React.FC = () => {
    return (
        <div className='layout-container'>

            <div className='layout-outlet'>
                <Outlet />
            </div>

            <NavBar />
        </div>
    )
}
