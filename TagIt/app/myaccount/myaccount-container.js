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
var myaccount_form_container_1 = require("./myaccount-form-container");
var AccountContainer = /** @class */ (function (_super) {
    __extends(AccountContainer, _super);
    function AccountContainer(props) {
        return _super.call(this, props) || this;
    }
    AccountContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(myaccount_form_container_1.default, null))));
    };
    return AccountContainer;
}(React.Component));
exports.default = AccountContainer;
//# sourceMappingURL=myaccount-container.js.map