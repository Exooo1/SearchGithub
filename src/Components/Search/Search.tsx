import React, {ChangeEvent, KeyboardEvent} from 'react'
import {PaginationActive, PaginationStyle, SearchStyle, StyleMain, UsersStyle} from './SearchStyled';
import {observer} from 'mobx-react';
import {User} from '../User/User';
import {store} from '../../Mobx/StateMobx';

type PropsSearch = {}
type StateSearch = {
    value: string
    currentPage: number
}
const storeSearch = store


@observer
export class Search extends React.Component<PropsSearch, StateSearch> {
    constructor(props: PropsSearch) {
        super(props);
        this.state = {value: '', currentPage: 1}
        this.resetValue = this.resetValue.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.addKeyPress = this.addKeyPress.bind(this)
        this.getUsersPag = this.getUsersPag.bind(this)
    }

    changeValue(e: ChangeEvent<HTMLInputElement>) {
        this.setState({value: e.target.value})
    }

    resetValue() {
        this.setState({value: ''})
        storeSearch.resetArray()
    }

    getUsers() {
        storeSearch.addUsers(this.state.value,)
        this.setState({currentPage: 1})
    }

    addKeyPress(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this.getUsers()
            this.setState({currentPage: 1})
        }

    }

    getUsersPag(item: number) {
        storeSearch.addUsers(this.state.value, item)
        this.setState({currentPage: item})
    }

    render() {
        return <>
            <StyleMain>
                <button disabled={!this.state.value} onClick={this.resetValue}>Reset</button>
                <SearchStyle>
                    <h1>You can find the user here</h1>
                    <input onKeyPress={this.addKeyPress} type="text" placeholder="User name GitHub"
                           value={this.state.value}
                           onChange={this.changeValue}/>
                </SearchStyle>
                <button onClick={this.getUsers}>Search</button>
            </StyleMain>
            <UsersStyle>

                {storeSearch.users.map(item => <User key={item.id} html={item.html_url} login={item.login}
                                                     url={item.avatar_url}/>)}

            </UsersStyle>
            <PaginationStyle>
                {storeSearch.page.map(item => <PaginationActive active={item === this.state.currentPage}
                                                                onClick={() => this.getUsersPag(item)}>{item}</PaginationActive>)}
            </PaginationStyle>
        </>
    }
}

