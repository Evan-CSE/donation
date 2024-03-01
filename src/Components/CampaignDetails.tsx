import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Campaign } from "../Model/Campaign";

const CampaignDetails: React.FC = () => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const { id: campaignId }          = useParams<{ id: string }>();

  useEffect(() => {
    const fetchCampaigns = async () => {
        try {
          const response = await fetch('../../data.json');
  
          console.log(response);
          if (!response.ok) {
            throw new Error(`Failed to fetch campaign data: ${response.statusText}`);
          }

          const fetchedData = await response.json();
          const allCampaign = (fetchedData as Campaign[]);
  
          const campaign =
            allCampaign.find((campaign: Campaign) => {
                return campaign.id === parseInt(campaignId ?? '-1');
            })

          if (campaign) {
            setCampaign(campaign);
          }
        } catch (error) {
          console.error("Error fetching campaign data:", error);
          // Consider displaying an error message to the user or implementing fallback behavior
        }
      };
  
      fetchCampaigns();
  }, [campaignId]);

  if (!campaign) {
    return <div>Loading campaign details...</div>;
  }

  return (
    <div className = "d-flex justify-content-center align-items-center m-5 p-5">
      <div className = "">
        <img src={campaign.imgLink} height={100} width={150} alt="Campaign" />
        <h3>{campaign.title}</h3>
        <p>{campaign.description}</p>
        <button>Buy Selected Pixels</button>
      </div>
    </div>
  );
};

export default CampaignDetails;
