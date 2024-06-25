import React from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import './StocksSkeleton.scss'

interface SkeletonProps {
    count: number
}

export const StocksSkeleton: React.FC<SkeletonProps> = ({ count }) => {
    return (
        <>
            {Array(count).fill(0).map((_, i) => {
                return (
                    <div className='stocks-skeleton' key={i}>
                        <div className='skeleton-stocks-info'>

                            <Skeleton circle width={40} height={40} />

                            <div className='skeleton-stocks-name'>

                                <Skeleton count={1} width={80} />
                                <Skeleton count={1} width={20} />

                            </div>
                        </div>

                        <div className='skeleton-stocks-prices'>

                            <Skeleton count={1} width={60} />
                            <Skeleton count={1} width={30} style={{ display: 'flex-revert' }} />

                        </div>
                    </div>
                )
            })
            }
        </>
    )
}