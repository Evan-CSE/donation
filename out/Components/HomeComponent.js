"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CampaignCard_1 = __importDefault(require("./CampaignCard"));
class HomeComponent extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCampaign: []
        };
        this.state = {
            allCampaign: []
        };
    }
    componentDidMount() {
        this.fetchCampaign();
    }
    fetchCampaign() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('data.json');
                if (!response.ok) {
                    throw new Error(`Something went wrong ${response.statusText}`);
                }
                const maybeResult = yield response.json();
                this.setState({
                    allCampaign: maybeResult
                });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    render() {
        return (react_1.default.createElement("div", { className: "row row-cols-md-2 row-cols-1 bg-secondary", style: { height: '100vh' } }, this.state.allCampaign.map((campaign, idx) => {
            return (react_1.default.createElement(CampaignCard_1.default, { key: idx, campaign: campaign }));
        })));
    }
}
exports.default = HomeComponent;
