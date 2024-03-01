"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const CampaignDetails = () => {
    const [campaign, setCampaign] = (0, react_1.useState)(null);
    const { id: campaignId } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        const fetchCampaign = () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch('data.json');
            if (!response.ok) {
                throw new Error(`Failed to fetch campaign: ${response.statusText}`);
            }
            const fetchedData = yield response.json();
            const allCampaign = fetchedData;
            const maybeCampaign = allCampaign.find((campaign) => {
                return campaign.id === parseInt(campaignId !== null && campaignId !== void 0 ? campaignId : '-1');
            });
            if (maybeCampaign) {
                setCampaign(maybeCampaign);
            }
        });
        if (campaignId) {
            fetchCampaign();
        }
    }, [campaignId]);
    if (!campaign) {
        return react_1.default.createElement("div", null, "Loading campaign details...");
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("img", { src: campaign.imgLink, height: 100, width: 150, alt: "Campaign" }),
        react_1.default.createElement("h3", null, campaign.title),
        react_1.default.createElement("p", null, campaign.description),
        react_1.default.createElement("button", null, "Buy Selected Pixels")));
};
exports.default = CampaignDetails;
