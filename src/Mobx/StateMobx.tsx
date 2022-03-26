import {makeAutoObservable} from 'mobx';
import {api} from '../API/API';


export type UserType = {
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    gravatar_id: string
    html_url: string
    id: number
    login: string
    node_id: string
    organizations_url: string
    received_events_url: string
    repos_url: string
    score: number
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
}

interface StoreType {
    totalCount: number
    users: Array<UserType>
    countPage: number
    page: number[]
}


class Store implements StoreType {
    totalCount = 0;
    users: Array<UserType> = [];
    countPage = 0;
    page: number[] = [];

    constructor() {
        makeAutoObservable(this)
    };

    resetArray() {
        this.users = []
        this.page = []
    }

    async addUsers(value: string, pag?: number) {
        try {
            const {data} = await api.getUser(value, pag)
            this.users = data.items
            console.log(data)
            this.totalCount = data.total_count
            this.countPage = Math.ceil(this.totalCount / 15)
            this.page = []
            for (let i = 1; i < this.countPage; i++) this.page.push(i)
        } catch (e) {
            console.log(e)
        }
    }
}

export const store = new Store()


