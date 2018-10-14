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
var ACCOUNT_PASSWORD_UPDATE = "/api/Account/UpdatePassword";
var MyAccountPasswordContainer = /** @class */ (function (_super) {
    __extends(MyAccountPasswordContainer, _super);
    function MyAccountPasswordContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            password: {},
            registerMessage: '',
        };
        return _this;
    }
    MyAccountPasswordContainer.prototype.updatePassword = function () {
        var _this = this;
        var apiUrl = ACCOUNT_PASSWORD_UPDATE;
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(this.state.password)
        }).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
            }
            return response.json();
        }).then(function (body) {
            _this.setState({
                registerMessage: body.message,
            });
        });
    };
    MyAccountPasswordContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("input", { type: "textbox", value: this.state.password.oldPassword, placeholder: "Old Password" })),
            React.createElement("div", null,
                React.createElement("input", { type: "textbox", value: this.state.password.newPassword, placeholder: "New Password" })),
            React.createElement("div", null,
                React.createElement("button", { type: "submit", onClick: this.updatePassword.bind(this) }, "Register"))));
    };
    return MyAccountPasswordContainer;
}(React.Component));
exports.default = MyAccountPasswordContainer;
//# sourceMappingURL=myaccount-password-container.js.map