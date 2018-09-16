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
var CREATE_ACCOUNT = "/api/Account/CreateAccount";
var TAG_REDIRECT = "";
var AccountRegisterContainer = /** @class */ (function (_super) {
    __extends(AccountRegisterContainer, _super);
    function AccountRegisterContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: undefined,
            registerMessage: '',
            displayForm: false
        };
        return _this;
    }
    AccountRegisterContainer.prototype.registerUser = function () {
        var _this = this;
        var apiUrl = CREATE_ACCOUNT;
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
    AccountRegisterContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("input", { type: "textbox", value: this.state.user.username, placeholder: "Username" }),
            React.createElement("input", { type: "textbox", value: this.state.user.password, placeholder: "Password" }),
            React.createElement("input", { type: "textbox", value: this.state.user.firstName, placeholder: "First Name" }),
            React.createElement("input", { type: "textbox", value: this.state.user.lastName, placeholder: "Last Name" }),
            React.createElement("input", { type: "textbox", value: this.state.user.userEmail, placeholder: "Email" }),
            React.createElement("button", { type: "submit", onClick: this.registerUser.bind(this), value: "Register" })));
    };
    return AccountRegisterContainer;
}(React.Component));
exports.default = AccountRegisterContainer;
//# sourceMappingURL=account-register-container.js.map