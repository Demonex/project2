import { IClient } from './IClient'

export interface ILeaderboard {
    client_board_number: number
    client_info: IClient
    top_leaders: IClient[]
}