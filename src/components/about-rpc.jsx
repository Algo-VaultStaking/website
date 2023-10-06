import * as React from "react";

const chains = [
  {
    logo: "/blast.svg",
    logoAlt: "blast logo",
    url: "",
    title: "Blast",
    text: "",
    badge: true,
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
