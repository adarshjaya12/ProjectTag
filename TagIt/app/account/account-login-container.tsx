import 'es6-promise/auto';
import * as React from 'react';
import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';

interface AccountLoginState{
    user : User;
    registerMessage:string;
    success:boolean;
}

interface User{
    id: string;
    username: string;
    password: string;
    userEmail: string;
    firstName: string;
    lastName: string;
}

const LOGIN_USER="/api/account/LoginAccount";

class AccountLoginContainer extends React.Component<any, AccountLoginState>{
    constructor(props: any) {
        super(props)
        this.state={
            user: undefined,
            registerMessage:'',
            success: false
        }
    }

    LoginUser():void{
        var apiUrl = LOGIN_USER;
        fetch(apiUrl,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body:JSON.stringify(this.state.user)
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
            }
            return response.json();
        }).then(body => {
            this.setState({
                registerMessage: body.message,
                success: body.success
            })
        })  
    }


    render() {
        return (
        <div>
            <input type="textbox" value={this.state.user.username} placeholder="Username"/>
            <input type="textbox" value={this.state.user.password} placeholder="Password"/>
            <button type="submit" onClick={this.LoginUser.bind(this)} value="Login" />
        </div>);
    }
}

export default AccountLoginContainer;