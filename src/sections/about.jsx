import * as React from "react";
import dedicatedImg from "../images/dedicated.svg";
import reliableImg from "../images/reliable.svg";
import rewardingImg from "../images/rewarding.svg";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about--wrapper">
          <div className="about--box about--box--reverse">
            <div className="about-ill">
              <img src={dedicatedImg} alt="" />
            </div>
            <div className="about-content">
              <div className="subtitle">WE CAN HELP</div>
              <h2 className="title">Dedicated</h2>
              <p className="text">
                We are a progressive staking, infrastructure, and software
                provider for blockchain projects. Our professional-grade servers
                help secure networks and ecosystems. Join our community to earn
                rewards.
              </p>
            </div>
          </div>

          <div className="about--box">
            <div className="about-ill">
              <img src={reliableImg} alt="" />
            </div>
            <div className="about-content">
              <div className="subtitle">WE ARE PROUD</div>
              <h2 className="title">Reliable</h2>
              <p className="text">
                Our infrastructure is deployed around the world and hosted by
                multiple providers to increase decentralization and
                fault-tolerance. We are proud to host applications on, and
                overall support, the Akash Network; a decentralized cloud
                platform and blockchain.
              </p>
            </div>
          </div>

          <div className="about--box about--box--reverse">
            <div className="about-ill">
              <img src={rewardingImg} alt="" />
            </div>
            <div className="about-content">
              <div className="subtitle">WE CAN STAKE</div>
              <h2 className="title">Rewarding</h2>
              <p className="text">
                Our delegators can maximize profit and minimize risk on their
                favorite chains. Stake to us through{" "}
                <a href="www.restake.app">restake.app</a> and enjoy staking
                rewards compounded daily. And while staking incurs a risk of
                slashing, we will reimburse our delegators for any lost funds
                due to a slash.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
