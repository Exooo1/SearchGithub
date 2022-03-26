import React from 'react'
import {ImgAvatar} from './userStyled';

type PropsUser = {
    login: string
    url: string
    html: string
}
type StateUser = {}

export class User extends React.Component<PropsUser, StateUser> {
    render() {
        return <div>
            <h2>{this.props.login}</h2>
            <a href={this.props.html} target={'_blank'} rel='noreferrer'>
                <ImgAvatar src={this.props.url} alt={'avatar'}/>
            </a>
        </div>;
    }

}