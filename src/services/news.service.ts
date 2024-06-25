import { INews } from '../models/INews'
import { coreApi } from './core.service'

export const newsApi = coreApi.injectEndpoints({
    endpoints: (build) => ({
        fetchNews: build.query<INews[], void>({
            query: () => ({
                url: 'news'
            })
        }),
        fetchPing: build.query<void, void>({
            query: () => ({
                url: 'news/ping'
            })
        }),
    })
})

export const {
    useFetchNewsQuery,
    useFetchPingQuery
} = newsApi