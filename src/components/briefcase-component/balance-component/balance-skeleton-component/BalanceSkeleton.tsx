import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import './BalanceSkeleton.scss'

export const BalanceSkeleton: React.FC = () => {
    return (
        <div className='skeleton-balance-card-info'>

            <SkeletonTheme baseColor='#176dea' highlightColor='#5097ff'>

                <div className='skeleton-card-info-overall'>
                    <Skeleton width={180} />

                </div>

                <div className='skeleton-card-info-delta'>
                    <Skeleton width={60} />
                </div>

            </SkeletonTheme>
        </div>
    )
}
