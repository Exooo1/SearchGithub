import axios from 'axios'
import {UserType} from '../Mobx/StateMobx';

const instance = axios.create({
    baseURL: 'https://api.github.com/',
})

type getUsers = {
    incomplete_results: boolean
    items: Array<UserType>
    total_count: number
}

export const api = {
    getUser(user: string, page?: number) {
        return instance.get<getUsers>(`search/users?q=${user}&per_page=15&page=${page}`)
    }
}