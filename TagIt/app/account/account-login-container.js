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
var LOGIN_USER = "/api/account/LoginAccount";
var AccountLoginContainer = /** @class */ (function (_super) {
    __extends(AccountLoginContainer, _super);
    function AccountLoginContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: undefined,
            registerMessage: '',
            success: false
        };
        return _this;
    }
    AccountLoginContainer.prototype.LoginUser = function () {
        var _this = this;
        var apiUrl = LOGIN_USER;
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
                success: body.success
            });
        });
    };
    AccountLoginContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("input", { type: "textbox", value: this.state.user.username, placeholder: "Username" }),
            React.createElement("input", { type: "textbox", value: this.state.user.password, placeholder: "Password" }),
            React.createElement("button", { type: "submit", onClick: this.LoginUser.bind(this), value: "Login" })));
    };
    return AccountLoginContainer;
}(React.Component));
exports.default = AccountLoginContainer;
//# sourceMappingURL=account-login-container.js.map