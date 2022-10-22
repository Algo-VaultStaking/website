import * as React from "react";

const chains = [
  {
    logo: "/aura.svg",
    logoAlt: "aura network logo",
    url: "https://aura.network/",
    title: "Aura Network",
    text: "",
    badge: false,
  },
  {
    logo: "/comdex.svg",
    logoAlt: "comdex logo",
    url: "https://comdex.one/",
    title: "Comdex",
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
