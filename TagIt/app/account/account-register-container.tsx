import 'es6-promise/auto';
import * as React from 'react';
import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';
import { isBuffer } from 'util';

interface AccountRegisterState{
    user : IUser;
    registerMessage:string;
    displayForm:boolean;
}

interface IUser{
    id: string;
    username: string;
    password: string;
    userEmail: string;
    firstName: string;
    lastName: string;
}

const CREATE_ACCOUNT="/api/Account/CreateAccount"
const TAG_REDIRECT="";

class AccountRegisterContainer extends React.Component<any, AccountRegisterState>{
    constructor(props: any) {
        super(props)
        this.state={
            user: {} as IUser,
            registerMessage:'',
            displayForm: false
        }
        
    }

    registerUser():void{
        var apiUrl = CREATE_ACCOUNT;
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
                displayForm: body.display
            })
        })  
    }


    render() {
        return (
        <div>
            <div><input type="textbox" value={this.state.user.username} placeholder="Username"/></div>
            <div><input type="textbox" value={this.state.user.password} placeholder="Password"/></div>
            <div><input type="textbox" value={this.state.user.firstName} placeholder="First Name"/></div>
            <div><input type="textbox" value={this.state.user.lastName} placeholder="Last Name"/></div>
            <div><input type="textbox" value={this.state.user.userEmail} placeholder="Email"/></div>
            <div><button type="submit" onClick={this.registerUser.bind(this)} >Register</button></div>
        </div>
        );
    }

}

export default AccountRegisterContainer;