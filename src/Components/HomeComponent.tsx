import React from "react";
import { Campaign } from "../Model/Campaign";
import CampaignCard from "./CampaignCard";

export default class HomeComponent extends React.Component {

    state = {
        allCampaign: []
    }

    constructor(props: any) {
        super(props);
        this.state = {
            allCampaign: []
        }
    }

    componentDidMount(): void {
        this.fetchCampaign();
    }

    public async fetchCampaign() {
        try {
            const response = await fetch('data.json');

            if (!response.ok) {
                throw new Error (`Something went wrong ${response.statusText}`);
            }

            const maybeResult = await response.json();

            this.setState({
                allCampaign: maybeResult as Campaign[]
            })

        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className = "row row-cols-md-2 row-cols-1" style = {{height: '100vh'}}>
                {
                    this.state.allCampaign.map((campaign, idx: number) => {
                        return (
                            <CampaignCard key = {idx} campaign = {campaign} />
                        )
                    })
                }
            </div>
        )
    }
}