"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
class NavBar extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_bootstrap_1.Navbar, { expand: "lg", className: "bg-body-tertiary" },
            react_1.default.createElement(react_bootstrap_1.Container, null,
                react_1.default.createElement(react_bootstrap_1.Navbar.Brand, { href: "#home" }, "Donation Website"),
                react_1.default.createElement(react_bootstrap_1.Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
                react_1.default.createElement(react_bootstrap_1.Navbar.Collapse, { id: "basic-navbar-nav" },
                    react_1.default.createElement(react_bootstrap_1.Nav, { className: "d-flex" },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/", style: { textDecoration: 'none', marginRight: 10 } }, "Home"),
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/about", style: { textDecoration: 'none' } }, "About"))))));
    }
}
exports.default = NavBar;
