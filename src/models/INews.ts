import { IStock } from './IMarket'

export interface INews {
    actions: IStock[];
    body?: string,
    post_time: string,
    title: string
    photo?: string,
}
