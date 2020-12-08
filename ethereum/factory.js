import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1a932258B9D4ce47BE206b42060f075D9a2E68C2"
);

export default instance;
