export interface IStock {
    id: string
    name: string
    price: number
    price_change: number
    icon: string
    amount?: number
    date?: string
    type?: string
}


export interface IBag {
    actions: IStock[]
    change: number
    balance: number
}


export interface IStockBuyParams {
    amount: number
    action_id: string
}


export interface IStockSellParams {
    amount: number
    action_id: string
}


export interface IStockParams {
    limit: number
    offset: number
}


interface IPrice {
    price: number
    time: string
}
export interface IPlot {
    icon: string
    name: string
    prices: IPrice[]
}


export interface IPlotParams {
    period: string
    action_id: string
}

