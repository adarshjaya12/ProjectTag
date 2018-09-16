"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("es6-promise");
var react_dom_1 = require("react-dom");
var React = require("react");
var account_container_1 = require("./account-container");
var app = React.createElement(account_container_1.default);
var appMount = document.getElementById('account');
react_dom_1.render(app, appMount);
//# sourceMappingURL=account.js.map