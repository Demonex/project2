import React from 'react'
import { LeadersLink } from './leaders-component/LeadersLink'
import { Clicker } from './clicker-component/Clicker'

import { useFetchClientQuery } from '../../services/clicker.service'
import Skeleton from 'react-loading-skeleton'

import { ReactComponent as Exit } from '../../assets/icons/exit.svg'

import './Profile.scss'
import { IClient } from '../../models/IClient'
import { useActions } from '../../hooks/useActions'
import { useNavigate } from 'react-router-dom'


export const Profile: React.FC = () => {

    const { switchIntroState } = useActions()
    const navigate = useNavigate()

    const { data, isLoading, isError } = useFetchClientQuery()

    return (
        <div className='profile-container'>
            <div className='profile-header'>
                <div className='profile-name'>
                    {isLoading && <Skeleton count={1} width={150} />}

                    {!isLoading && 'Василий'}
                </div>

                <Exit onClick={() => {
                    switchIntroState()
                    navigate(`/`)
                }} />
            </div>

            <LeadersLink />

            {/* { data && <Clicker data={data} isLoading={isLoading} /> } */}
            <Clicker data={(data || {}) as IClient} isLoading={isLoading} />
        </div>
    )
}
