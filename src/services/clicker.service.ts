import { IClient } from '../models/IClient'
import { ILeaderboard } from '../models/ILeaderboard'
import { coreApi } from './core.service'

export const clickerApi = coreApi.injectEndpoints({
    endpoints: (build) => ({
        fetchClient: build.query<IClient, void>({
            query: () => ({
                url: 'clicker/client'
            })
        }),
        fetchCoins: build.query<void, void>({
            query: () => ({
                url: 'clicker/coin'
            })
        }),
        fetchLeaderBoard: build.query<ILeaderboard, void>({
            query: () => ({
                url: 'clicker/leaderboard'
            })
        }),
        fetchPing: build.query<void, void>({
            query: () => ({
                url: 'clicker/ping'
            })
        }),
    })
})

export const {
    useFetchClientQuery,
    useFetchLeaderBoardQuery,
    useFetchPingQuery,
} = clickerApi