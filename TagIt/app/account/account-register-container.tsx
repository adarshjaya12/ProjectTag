import 'es6-promise/auto';
import * as React from 'react';
import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';

interface AccountRegisterState{
    user : User;
    registerMessage:string;
    displayForm:boolean;
}

interface User{
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
            user: undefined,
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
            <input type="textbox" value={this.state.user.username} placeholder="Username"/>
            <input type="textbox" value={this.state.user.password} placeholder="Password"/>
            <input type="textbox" value={this.state.user.firstName} placeholder="First Name"/>
            <input type="textbox" value={this.state.user.lastName} placeholder="Last Name"/>
            <input type="textbox" value={this.state.user.userEmail} placeholder="Email"/>
            <button type="submit" onClick={this.registerUser.bind(this)} value="Register" />
        </div>);
    }

}

export default AccountRegisterContainer;