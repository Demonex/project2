import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { ReactComponent as Crown } from '../../../assets/icons/crown.svg'
import { IClient } from '../../../models/IClient'

import './Row.scss'

interface RowProps {
    pos: number
    data: IClient
    isLoading: boolean
    style?: true
}

export const Row: React.FC<RowProps> = ({
    pos,
    data: {
        name,
        group,
        coins
    },
    isLoading,
    style = false
}) => {

    return (
        <div className={`row-container ${style ? 'last-child' : ''}`}>

            <div className='row-left'>

                <div className='row-place' style={{textAlign: isLoading ? 'left' : 'center'}}>
                    {isLoading &&
                        <>
                            <Skeleton count={1} width={245} style={{marginBottom: '5px', marginLeft: '15px'}} />
                            <Skeleton count={1} width={120} style={{marginLeft: '15px'}} />
                        </>
                    }

                    {!isLoading && (pos === 1 ? <Crown width={37} /> : pos)}
                </div>

                <div className='row-info'>
                    <div className='row-info-name'>
                        {!isLoading && name}
                    </div>

                    <div className='row-info-group'>
                        {!isLoading && group}
                    </div>

                </div>

            </div>

            <div className='row-price'>
                {isLoading && <Skeleton count={1} width={40}  />}

                {!isLoading && `${coins} $`}
            </div>
        </div>
    )
}