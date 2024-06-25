import React from 'react'
import { useFetchNewsQuery } from '../../../services/news.service'
import { PostItem } from '../post-item-component/PostItem'

import './PostsList.scss'
import { Post } from '../post-item-component/Post'

export const PostsList: React.FC = () => {

    const { data, isLoading, isError } = useFetchNewsQuery()

    return (
        <div className='posts-list-container'>
            {/* {data && data.map((post, index) => {
                return <PostItem key={index} post={post} isLoading={isLoading}></PostItem>
            })} */}

            <Post />
            <Post />

        </div>
    )
}