"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("es6-promise/auto");
var React = require("react");
var fetch = require("isomorphic-fetch");
var UPDATE_USER = "/api/Account/UpdateAccount";
var TAG_REDIRECT = "";
var MyAccountFormContainer = /** @class */ (function (_super) {
    __extends(MyAccountFormContainer, _super);
    function MyAccountFormContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: {},
            registerMessage: '',
            displayForm: false
        };
        return _this;
    }
    MyAccountFormContainer.prototype.updateUser = function () {
        var _this = this;
        var apiUrl = UPDATE_USER;
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(this.state.user)
        }).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
            }
            return response.json();
        }).then(function (body) {
            _this.setState({
                registerMessage: body.message,
                displayForm: body.display
            });
        });
    };
    MyAccountFormContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("input", { type: "textbox", value: this.state.user.username, placeholder: "Username", disabled: true })),
            React.createElement("div", null,
                React.createElement("input", { type: "textbox", value: this.state.user.firstName, placeholder: "First Name" })),
            React.createElement("div", null,
                React.createElement("input", { type: "textbox", value: this.state.user.lastName, placeholder: "Last Name" })),
            React.createElement("div", null,
                React.createElement("input", { type: "textbox", value: this.state.user.userEmail, placeholder: "Email" })),
            React.createElement("div", null,
                React.createElement("button", { type: "submit", onClick: this.updateUser.bind(this) }, "Register"))));
    };
    return MyAccountFormContainer;
}(React.Component));
exports.default = MyAccountFormContainer;
//# sourceMappingURL=myaccount-form-container.js.map