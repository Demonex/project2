import React from 'react'

import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'

import './BriefcaseInfo.scss'

export const BriefcaseInfo: React.FC = () => {
    return (
        <div className='brief-info-container'>
            <div className='brief-info-header'>
                В портфеле
            </div>

            <div className='brief-info-card'>
                <div className='brief-info-card-tab'>

                    <div className='brief-info-card-tab-header'>
                        Брокерский счет
                    </div>

                    <div className='brief-info-card-tab-amount'>
                        10
                    </div>

                    <div className='brief-info-card-tab-logo'>
                        <Logo />
                    </div>
                </div>

                <div className='brief-info-card-tab'>
                    <div className='brief-info-card-tab-header'>
                        Стоимость бумаг в портфеле
                    </div>

                    <div className='brief-info-card-tab-content'>

                        <div className='brief-info-card-tab-amount'>
                            1 114
                        </div>

                        <div className='brief-info-card-tab-delta'>
                            +16,69 %
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}