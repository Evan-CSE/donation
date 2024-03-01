"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
const HomeComponent_1 = __importDefault(require("./Components/HomeComponent"));
const About_1 = __importDefault(require("./Components/About"));
const NavBar_1 = __importDefault(require("./Components/NavBar"));
const CampaignDetails_1 = __importDefault(require("./Components/CampaignDetails"));
class App extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(NavBar_1.default, null),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(HomeComponent_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/about", element: react_1.default.createElement(About_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/details/:id", element: react_1.default.createElement(CampaignDetails_1.default, null) }))));
    }
}
exports.default = App;
