import React from 'react'

import './Guideline.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import { ReactComponent as Piggy } from '../../assets/icons/piggy.svg'
import { ReactComponent as Market } from '../../assets/icons/market.svg'
import { ReactComponent as Stocks } from '../../assets/icons/stocks.svg'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'


export const Guideline: React.FC = () => {

    const { switchIntroState } = useActions()

    return (
        <div className='guide-container'>
            <div className='guide-header'>
                Bauman Finan
                <span className='guide-header-last'>
                    ces
                </span>
            </div>

            <div className='guide-swiper'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className='guide-swiper-slide'>

                            <div className='guide-swiper-slide-pic'>
                                <Piggy />
                            </div>

                            <div className='guide-swiper-slide-text'>

                                <div className='guide-swiper-slide-main'>
                                    Кликай и накапливай
                                    валюту
                                </div>

                                <div className='guide-swiper-slide-desc'>
                                    Один клик - одна монета
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='guide-swiper-slide'>

                            <div className='guide-swiper-slide-pic'>
                                <Market />
                            </div>

                            <div className='guide-swiper-slide-text'>

                                <div className='guide-swiper-slide-main'>
                                    Следи за тем
                                    что происходит на рынке
                                </div>

                                <div className='guide-swiper-slide-desc'>
                                    Узнавай котировки, следи за
                                    новостями
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='guide-swiper-slide'>

                            <div className='guide-swiper-slide-pic'>
                                <Stocks />
                            </div>

                            <div className='guide-swiper-slide-text'>

                                <div className='guide-swiper-slide-main'>
                                    Инвестируй в надежные
                                    акции
                                </div>

                                <div className='guide-swiper-slide-desc'>
                                    Покупай и продавай акции на рынке.<br />
                                    Стань лучшим инвестором
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='guide-bottom'>

                <NavLink className='guide-bottom-btn noSelect' onClick={() => switchIntroState()} to={'/'}>
                    Начать инвестировать
                </NavLink>

            </div>
        </div>
    )
}