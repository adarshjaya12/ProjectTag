import 'es6-promise/auto';
import * as React from 'react';
import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';
import MyAccountFormContainer from './myaccount-form-container';
//import MyAccountPasswordContainer from 'myaccount-password-container';

interface IUser{
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
                    <MyAccountFormContainer/>
            </div>
        </div>
        );
    }

}

export default AccountContainer;