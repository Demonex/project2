import { IBag, IPlot, IPlotParams, IStock, IStockBuyParams, IStockParams, IStockSellParams } from '../models/IMarket'
import { coreApi } from './core.service'

export const stockApi = coreApi.injectEndpoints({
    endpoints: (build) => ({
        fetchBag: build.query<IBag, void>({
            query: () => ({
                url: 'stock/bag',
            })
        }),
        fetchOperations: build.query<IStock[], IStockParams>({
            query: ({ limit = 10, offset = 0 }) => ({
                url: 'stock/operations',
            })
        }),
        fetchMarket: build.query<IStock[], void>({
            query: () => ({
                url: 'stock/market'
            }),
        }),
        fetchActionPlot: build.query<IPlot[], IPlotParams>({
            query: ({ period = '6h', action_id }) => ({
                url: `stock/market/action/${action_id}/plot`,
                params: { period }
            })
        }),
        buyAction: build.mutation<void, IStockBuyParams>({
            query: ({ amount, action_id }) => ({
                url: `stock/market/action/${action_id}/buy`,
                method: 'POST',
                params: { amount }
            })
        }),
        sellAction: build.mutation<void, IStockSellParams>({
            query: ({ amount, action_id }) => ({
                url: `stock/market/action/${action_id}/sell`,
                method: 'POST',
                params: { amount }
            })
        }),
        fetchPing: build.query<void, void>({
            query: () => ({
                url: 'stock/ping'
            })
        }),
    })
})

export const {
    useFetchBagQuery,
    useFetchOperationsQuery,
    useFetchMarketQuery,
    useFetchActionPlotQuery,
    useBuyActionMutation,
    useSellActionMutation,
    useFetchPingQuery
} = stockApi