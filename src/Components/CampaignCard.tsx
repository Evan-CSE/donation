import React from "react";
import { Button, Card } from "react-bootstrap";
import { Campaign } from "../Model/Campaign";
import { Link } from "react-router-dom";

interface Props {
    campaign: Campaign
}

export default class CampaignCard extends React.Component<Props> {
    render() {
        const {campaign} = this.props;
        return(
            <Card style={{ width: '18rem', maxHeight: '30rem'}} className = "m-md-3 m-1">
                <Card.Img variant="top" src = {campaign.imgLink} height = {250}/>
                <Card.Body>
                    <Card.Title>{campaign.title}</Card.Title>
                    <Card.Text>
                        {campaign.description}
                    </Card.Text>
                    <Link to = {`/details/${campaign.id}`}>
                    <Button variant="primary">
                        Donate
                    </Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}