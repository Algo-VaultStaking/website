import * as React from "react";
import AboutMainnet from "../components/about-mainnet";
import AboutTestnet from "../components/about-testnet";
import AboutRPC from "../components/about-rpc";
// import dedicatedImg from "../images/dedicated.svg";
// import reliableImg from "../images/reliable.svg";
// import rewardingImg from "../images/rewarding.svg";

const ChainsSection = () => {
  return (
    <section className="chains" id="chains">
      <div className="container">
        <h2>Chains we validate on</h2>
      </div>
      <div className="container">
        <div className="subtitle">Mainnet</div>
        <div className="chains-wrapper">
          <AboutMainnet />
        </div>
        <div className="subtitle">Testnet</div>
        <div className="chains-wrapper">
          <AboutTestnet />
        </div>
        <div className="subtitle">RPC</div>
        <div className="chains-wrapper">
          <AboutRPC />
        </div>
      </div>
    </section>
  );
};

export default ChainsSection;
