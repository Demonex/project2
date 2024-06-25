import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Transition } from 'react-transition-group'

import { ReactComponent as ClickerBorder } from '../../../assets/icons/circle-border.svg'
import LightningPath from '../../../assets/icons/lightning.png'
import { IClient } from '../../../models/IClient'

import './Clicker.scss'
import { useTypedSelector } from '../../../hooks/useTypedHooks'
import { useActions } from '../../../hooks/useActions'


const send = (n: number) => {
    console.log(Date(), n)
}


interface IClickerProps {
    data: IClient
    isLoading: boolean
}

export const Clicker: React.FC<IClickerProps> = ({
    data: {
        coins
    },
    isLoading
}) => {
    const initialRender = useRef(true)
    const buffCounter = useRef(0)
    const timerOn = useRef(false)

    const [clickerCounter, setClickerCounter] = useState<number>(0)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        buffCounter.current++

        if (!timerOn.current) {
            timerOn.current = true
            setTimeout(() => {
                send(buffCounter.current)
                buffCounter.current = 0
                timerOn.current = false
            }, 1000)
        }

    }, [clickerCounter])

    const [isAnimation, setIsAnimation] = useState(false)

    const { collectedCoins } = useTypedSelector(state => state.clickerReducer)
    const { addCoin } = useActions()


    return (
        <div className={`clicker-container ${isAnimation ? 'animation' : ''}`}>

            <div className='clicker-counter'>

                <div className='counter-text'>
                    ВАШИ КЛИКИ
                </div>

                <div className='counter-number'>
                    {isLoading && <Skeleton count={1} width={100} />}

                    {/* {!isLoading && `${coins || 0} $`} */}
                    {!isLoading && `${collectedCoins || 0} $`}

                </div>
            </div>

            <Transition
                in={!isLoading}
                timeout={500}
                onEntering={() => setIsAnimation(true)}
                onEntered={() => setIsAnimation(false)}
            >
                {state => (
                    <div className={`fade fade-${state}`}>
                        {/* <div className='clicker-btn' onClick={() => setClickerCounter(prev => prev + 1)}> */}
                        <div className='clicker-btn' onClick={() => addCoin()}>


                            <div className='btn-circle'>

                                <div className='circle-border rotate'>
                                    <ClickerBorder width='100%' height='100%' />
                                </div>

                                <div className='lightning-color'>
                                    <img src={LightningPath} alt='' width='100%' />
                                </div>

                                <div className='lightning-shadow'>
                                    <img src={LightningPath} alt='' width='100%' />
                                </div>
                            </div>

                        </div>

                        <div className='clicker-description'>
                            <div className='description-text'>
                                Копи клики и покупай на них акции
                            </div>
                        </div>
                    </div>
                )}
            </Transition>

        </div>
    )
}