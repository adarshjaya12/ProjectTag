"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("es6-promise");
var react_dom_1 = require("react-dom");
var React = require("react");
var tag_container_1 = require("./tag-container");
var app = React.createElement(tag_container_1.default);
var appMount = document.getElementById('tag');
react_dom_1.render(app, appMount);
//# sourceMappingURL=tag.js.map