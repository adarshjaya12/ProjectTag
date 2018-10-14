import 'es6-promise/auto';
import * as React from 'react';
import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';
import { isBuffer } from 'util';

interface AccountRegisterState{
    password: IPassword;
    registerMessage:string;
}

interface IPassword{
    oldPassword: string;
    newPassword: string;
}

const ACCOUNT_PASSWORD_UPDATE="/api/Account/UpdatePassword"

class MyAccountPasswordContainer extends React.Component<any, AccountRegisterState>{
    constructor(props: any) {
        super(props)
        this.state={
            password: {} as IPassword,
            registerMessage:'',
        }
        
    }

    updatePassword():void{
        var apiUrl = ACCOUNT_PASSWORD_UPDATE;
        fetch(apiUrl,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(this.state.password)
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
            }
            return response.json();
        }).then(body => {
            this.setState({
                registerMessage: body.message,
            })
        })  
    }


    render() {
        return (
            <div>
                <div><input type="textbox" value={this.state.password.oldPassword} placeholder="Old Password"/></div>
                <div><input type="textbox" value={this.state.password.newPassword} placeholder="New Password" /></div>
                <div><button type="submit" onClick={this.updatePassword.bind(this)} >Register</button></div>
        </div>);
    }

}

export default MyAccountPasswordContainer;