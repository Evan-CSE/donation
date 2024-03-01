"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
class CampaignCard extends react_1.default.Component {
    render() {
        const { campaign } = this.props;
        return (react_1.default.createElement(react_bootstrap_1.Card, { style: { width: '18rem', maxHeight: '30rem' }, className: "m-md-3 m-1" },
            react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: campaign.imgLink, height: 250 }),
            react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                react_1.default.createElement(react_bootstrap_1.Card.Title, null, campaign.title),
                react_1.default.createElement(react_bootstrap_1.Card.Text, null, campaign.description),
                react_1.default.createElement(react_router_dom_1.Link, { to: `/details/${campaign.id}` },
                    react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary" }, "Donate")))));
    }
}
exports.default = CampaignCard;
