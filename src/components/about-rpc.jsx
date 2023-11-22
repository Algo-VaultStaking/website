import * as React from "react";

const chains = [
  {
    logo: "/blast.svg",
    logoAlt: "blast logo",
    url: "https://blastapi.io/explorer/0xb000f8fa5fc06249c718e9db793d9618400618c3",
    title: "Blast",
    text: "",
    badge: false,
  },
  {
    logo: "/canto.svg",
    logoAlt: "canto logo",
    url: "http://canto-rpc.vaultstaking.com",
    title: "Canto",
    text: "",
    badge: false,
  },
  {
    logo: "/ethereum.svg",
    logoAlt: "ethereum logo",
    url: "http://ethereum-rpc.vaultstaking.com",
    title: "Ethereum",
    text: "",
    badge: false,
  },
  {
    logo: "/gnosis.svg",
    logoAlt: "gnosis logo",
    url: "http://gnosis-rpc.vaultstaking.com",
    title: "Gnosis",
    text: "",
    badge: false,
  },
  {
    logo: "/polygon.svg",
    logoAlt: "polygon logo",
    url: "http://polygon-rpc.vaultstaking.com",
    title: "Polygon",
    text: "",
    badge: false,
  },
];

const AboutRPC = () => {
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

export default AboutRPC;
