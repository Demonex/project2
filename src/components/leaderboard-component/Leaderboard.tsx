import React from 'react'

import './Leaderboard.scss'

import { ReactComponent as BackBtn } from '../../assets/icons/bitop-back-btn.svg'
import { ReactComponent as Ellipsis } from '../../assets/icons/el.svg'

import { Row } from './row-component/Row'
import { useNavigate } from 'react-router-dom'
import { useFetchLeaderBoardQuery } from '../../services/clicker.service'
import { IClient } from '../../models/IClient'
import { ILeaderboard } from '../../models/ILeaderboard'

export const Leaderboard: React.FC = () => {

    const navigate = useNavigate()

    const { data, isLoading, isError } = useFetchLeaderBoardQuery()

    const mock: ILeaderboard = {
        client_board_number: 47,
        client_info: {
            coins: 1662,
            group: 'ИУ7-82Б',
            name: 'Искандаров Дмитрий'
        },
        top_leaders: [
            {
                coins: 1669,
                group: 'ИУ7-82Б',
                name: 'Искандаров Дмитри'
            },
            {
                coins: 1668,
                group: 'ИУ7-82Б',
                name: 'Искандаров Дмитр'
            },
            {
                coins: 1667,
                group: 'ИУ7-82Б',
                name: 'Искандаров Дмит'
            },
            {
                coins: 1666,
                group: 'ИУ7-82Б',
                name: 'Искандаров Дми'
            },
            {
                coins: 1665,
                group: 'ИУ7-82Б',
                name: 'Искандаров Дм'
            },
            {
                coins: 1664,
                group: 'ИУ7-82Б',
                name: 'Искандаров Д'
            },
            {
                coins: 1663,
                group: 'ИУ7-82Б',
                name: 'Искандаров $$'
            },

        ]
    }

    return (
        <div className={`${isLoading ? 'nope' : ''} leaderboard-container`}>

            <div className='leaderboard-header'>

                <div className='leaderboard-header-back' onClick={() => navigate(-1)}>
                    <BackBtn className='leaderboard-header-back-btn' />
                </div>

                <div className='leaderboard-header-text'>

                    <div className='leaderboard-header-text-main'>
                        Таблица лидеров
                    </div>

                    <div className='leaderboard-header-text-description'>
                        по сумме кликов и стоимости портфеля акций
                    </div>
                </div>

            </div>

            {isLoading &&
                <div className='leaderboard-content'>
                    {Array(7).fill(0).map((_, index) => {
                        return (
                            <Row key={index} pos={index + 1} data={{} as IClient} isLoading={isLoading} />
                        )
                    })}
                </div>
            }

            <div className='leaderboard-content'>
                {!isLoading && mock.top_leaders.map((data, index) => {
                    return (
                        <Row key={index} pos={index + 1} data={data} isLoading={isLoading} />
                    )
                })}

                <div className='leaderboard-ellipsis'>
                    <Ellipsis />
                </div>

                {!isLoading && <Row pos={mock.client_board_number + 1} data={mock.client_info} isLoading={isLoading} style />}
            </div>
            {/* <div className='leaderboard-content'>
                {Array(7).fill(0).map((_, index) => {
                    return (
                        <Row key={index} pos={index + 1} />
                    )
                })}

                <div className='leaderboard-ellipsis'>
                    <Ellipsis />
                </div>

                <Row pos={31} />
            </div> */}

        </div>
    )
}