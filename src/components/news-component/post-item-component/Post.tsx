import React from 'react'

import BaumanLogo from '../../../assets/icons/bauLogo.png'
import NewsPic from '../../../assets/icons/news.png'
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'

import './PostItem.scss'



export const Post: React.FC = () => {

    const handler = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget.id)
    }

    return (
        <div className="post-container">

            <div className="post-header">

                <div className="header-logo">
                    <img src={BaumanLogo} alt="" />
                </div>

                <div className="header-content">

                    <div className="header-name">
                        Bauman Investments
                    </div>

                    <div className="header-time">
                        сегодня в 18:54
                    </div>
                </div>
                {/*
                <div className="header-checked">
                    <Checked />
                </div> */}

            </div>

            <div className="post-content">

                <div className="post-content-title">
                    W. R. Berkley Corporation проведет сплит, ее акции подешевеют.
                </div>

                <div className="post-content-extended">
                    W. R. Berkley Corporation проведет сплит,  ее акции подешевеют W. R. Berkley Corporation проведет сплит,  ее акции подешевеют W. R. Berkley Corporation проведет сплит,  ее акции подешевеют
                </div>

                <div className="post-pic">
                    <img src={NewsPic} alt="" width="100%"/>
                </div>

                <div className="post-stocks-update" id='12jkl' onClick={(e) => handler(e)}>
                    <div className="stocks-left">

                        <div className="post-stocks-logo">
                            <Logo width={52} height={52} />
                        </div>

                        <div className="post-stocks-content">

                            <div className="post-stocks-name">
                                WR Berkley
                            </div>

                            <div className="post-stocks-pointer">
                                Акции
                            </div>

                        </div>

                    </div>

                    <div className="post-stocks-prices">

                        <div className="post-stocks-prices-text">
                            94,23 $
                        </div>

                        <div className="post-stocks-prices-delta">
                            -0,9 %
                        </div>
                    </div>
                </div>

                <div className="post-separator"></div>
            </div>
        </div>
    )
}