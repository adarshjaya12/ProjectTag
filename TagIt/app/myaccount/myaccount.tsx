import "es6-promise";
import { render } from 'react-dom';
import * as React from 'react';
import * as _ from 'lodash';
import AccountContainer from './myaccount-container';


var app = React.createElement(AccountContainer);
const appMount = document.getElementById('myaccount');
render(app, appMount);