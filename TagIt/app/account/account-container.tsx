import 'es6-promise/auto';
import * as React from 'react';
import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';
import AccountLoginContainer from './account-login-container';
import AccountRegisterContainer from './account-register-container';


interface User{
    id: string;
    username: string;
    password: string;
    userEmail: string;
    firstName: string;
    lastName: string;
}

class AccountContainer extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        
    }


    render() {
        return (
        <div>
            <div>
                <AccountLoginContainer/>
            </div>
            <div>
                <AccountRegisterContainer/>
            </div>
        </div>
        );
    }

}

export default AccountContainer;