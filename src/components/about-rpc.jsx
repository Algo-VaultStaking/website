import * as React from "react";

const chains = [
  {
    logo: "/arable.svg",
    logoAlt: "arable finance logo",
    url: "http://arable-rpc.vaultstaking.com",
    title: "Arable Finance",
    text: "",
    badge: true,
  },
//  {
//    logo: "/arbitrum.svg",
//    logoAlt: "arbitrum logo",
//    url: "http://arbitrum-rpc.vaultstaking.com",
//    title: "Arbitrum",
//    text: "",
//    badge: false,
//  },
  {
    logo: "/avalanche.svg",
    logoAlt: "avalanche logo",
    url: "http://avalanche-rpc.vaultstaking.com",
    title: "Avalanche",
    text: "",
    badge: false,
  },
//  {
//    logo: "/blast.svg",
//    logoAlt: "blast logo",
//    url: "",
//    title: "Blast",
//    text: "",
//    badge: true,
//  },
  {
    logo: "/canto.svg",
    logoAlt: "canto logo",
    url: "http://canto-rpc.vaultstaking.com",
    title: "Canto",
    text: "",
    badge: false,
  },
//  {
//    logo: "/celo.svg",
//    logoAlt: "celo logo",
//    url: "http://celo-rpc.vaultstaking.com",
//    title: "Celo",
//    text: "",
//    badge: false,
//  },
  {
    logo: "/ethereum.svg",
    logoAlt: "ethereum logo",
    url: "http://ethereum-rpc.vaultstaking.com",
    title: "Ethereum",
    text: "",
    badge: false,
  },
  {
    logo: "/fantom.svg",
    logoAlt: "fantom logo",
    url: "http://fantom-rpc.vaultstaking.com",
    title: "Fantom",
    text: "",
    badge: true,
  },
  {
    logo: "/gnosis.svg",
    logoAlt: "gnosis logo",
    url: "http://gnosis-rpc.vaultstaking.com",
    title: "Gnosis",
    text: "",
    badge: false,
  },
];

const AboutTestnet = () => {
  return (
    <>
      {chains.map((chain) => (
        <a className="" href={chain.url} key={chain.url}>
          {chain.badge === true ? <span className="badge">soon!</span> : ""}
          <img src={chain.logo} alt={chain.logoAlt} />
          <div className="title">{chain.title}</div>
          <div className="text">{chain.text}</div>
        </a>
      ))}
    </>
  );
};

export default AboutTestnet;
