import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Burger } from '../../../assets/icons/burger.svg'
import { BalanceSkeleton } from './balance-skeleton-component/BalanceSkeleton'

import './Balance.scss'

import { ReactComponent as GreenArrow } from '../../../assets/icons/green-arrow.svg'
import { IBag } from '../../../models/IMarket'


interface IBalanceProps {
    data: IBag | undefined
    isLoading: boolean
}

export const Balance: React.FC<IBalanceProps> = ({
    data,
    isLoading
}) => {

    return (
        <div className='balance-container'>

            <div className='balance-card'>

                <div className='balance-card-text'>
                    Ваш баланс
                </div>

                {isLoading && <BalanceSkeleton />}
                {!isLoading &&
                    <div className='balance-card-info'>

                        <div className='card-info-overall'>
                            {/* {data && `$ ${data.balance}`} */}
                            $16,988.31
                        </div>

                        <div className='card-info-delta'>
                            {/* {data &&
                                <>
                                    {`${data.change}%`}
                                    <GreenArrow />
                                </>
                            } */}
                            + 11.48%
                            <GreenArrow />



                        </div>
                    </div>
                }

                <NavLink to={'/history'} className='balance-card-operations noSelect'>
                    <Burger />
                    <div className='balance-card-operations-text'>
                        Операции
                    </div>
                </NavLink>
            </div>

            <div className='balance-shadow' />

        </div>
    )
}