import React from 'react'

import './TimeSwitch.scss'

export const TimeSwitch: React.FC = () => {

    return (
        <div className='time-switch-container'>

            <div className='time-switch-input'>
                <input type='radio' name='timestamp' id='hour' />
                <label htmlFor='hour'>Ч</label>
            </div>

            <div className='time-switch-input'>
                <input type='radio' name='timestamp' id='hour6' />
                <label htmlFor='hour6'>6Ч</label>
            </div>

            <div className='time-switch-input'>
                <input type='radio' name='timestamp' id='hour12' />
                <label htmlFor='hour12'>12Ч</label>
            </div>

            <div className='time-switch-input'>
                <input type='radio' name='timestamp' id='day' defaultChecked />
                <label htmlFor='day'>Д</label>
            </div>

            <div className='time-switch-input'>
                <input type='radio' name='timestamp' id='week' />
                <label htmlFor='week'>Н</label>
            </div>

            <div className='time-switch-input'>
                <input type='radio' name='timestamp' id='all' />
                <label htmlFor='all'>Все</label>
            </div>

        </div>
    )
}