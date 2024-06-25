import React from 'react'

import BaumanLogo from '../../../assets/icons/bauLogo.png'
import NewsPic from '../../../assets/icons/news.png'
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'
import { INews } from '../../../models/INews'

import './PostItem.scss'
import { useNavigate } from 'react-router-dom'


interface IPostItemProps {
    post: INews
    isLoading: boolean
}

export const PostItem: React.FC<IPostItemProps> = ({ post : {
    title,
    post_time,
    body,
    actions,
    photo
}, isLoading }) => {

    const navigate = useNavigate()

    return (
        <div className='post-container'>

            <div className='post-header'>

                <div className='header-logo'>
                    <img src={BaumanLogo} alt='' />
                </div>

                <div className='header-content'>

                    <div className='header-name'>
                        Bauman Investments
                    </div>

                    <div className='header-time'>
                        {post_time}
                    </div>
                </div>

            </div>

            <div className='post-content'>

                <div className='post-content-title'>
                    {title}
                </div>

                <div className='post-content-extended'>
                    {body && body}
                </div>

                <div className='post-pic'>
                    <img src={NewsPic} alt='' width='100%' />
                    <img src={photo} alt='' width='100%' />
                </div>


                    {actions.map(({
                        id,
                        name,
                        icon,
                        price,
                        price_change
                    }, index) => {
                        return (
                            <div className='post-stocks-update'>
                            <div key={index} className="post-stock" onClick={() => navigate(`/stocks/${id}`)}>

                                <div className='stocks-left'>
                                    <div className='post-stocks-logo'>
                                        <img src={icon} />
                                        {/* <Logo width={52} height={52} /> */}
                                    </div>

                                    <div className='post-stocks-content'>
                                        <div className='post-stocks-name'>
                                            {name}
                                        </div>

                                        <div className='post-stocks-pointer'>
                                            Акции
                                        </div>
                                    </div>
                                </div>

                                <div className='post-stocks-prices'>
                                    <div className='post-stocks-prices-text'>
                                        {price}
                                    </div>

                                    <div className={`post-stocks-prices-delta ${price_change > 0 ? 'green' : 'red'}`}>
                                        {price_change}
                                    </div>
                                </div>

                            </div>
                            </div>
                        )
                    })}

                </div>
            </div>
    )
}