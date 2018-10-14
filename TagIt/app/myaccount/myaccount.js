"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("es6-promise");
var react_dom_1 = require("react-dom");
var React = require("react");
var myaccount_container_1 = require("./myaccount-container");
var app = React.createElement(myaccount_container_1.default);
var appMount = document.getElementById('myaccount');
react_dom_1.render(app, appMount);
//# sourceMappingURL=myaccount.js.map