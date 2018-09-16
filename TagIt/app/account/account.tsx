import "es6-promise";
import { render } from 'react-dom';
import * as React from 'react';
import * as _ from 'lodash';
import AccountContainer from './account-container';


var app = React.createElement(AccountContainer);
const appMount = document.getElementById('account');
render(app, appMount);