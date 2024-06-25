import React from 'react'
import { PostsList } from './posts-list-component/PostsList'

import './News.scss'

export const News: React.FC = () => {
    
    return (
        <div className='news-container'>

            <div className='news-name'>
                Новости
            </div>

            <PostsList />
        </div>
    )
}
