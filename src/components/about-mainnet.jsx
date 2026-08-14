import * as React from "react";

const chains = [
/*  {
    logo: "/aethir.svg",
    logoAlt: "aethir logo",
    url: "https://app.aethir.com/dashboard",
    title: "Aethir",
    text: "",
    badge: false,
  },*/
  {
    logo: "/avail.svg",
    logoAlt: "avail logo",
    url: "https://explorer.avail.so/#/staking/",
    title: "Avail",
    text: "",
    badge: false,
  },
  {
    logo: "/mantra.svg",
    logoAlt: "mantra chain logo",
    url: "https://www.mintscan.io/mantra/validators/mantravaloper1kz80ms63xdy5n9vr3yvdwqv3zfe6g7s8sueq0z",
    title: "Mantra Chain",
    text: "",
    badge: false,
  },
  /*  {
    logo: "/monad.svg",
    logoAlt: "monad logo",
    url: "",
    title: "Monad",
    text: "",
    badge: false,
  },*/
  {
    logo: "/persistence.svg",
    logoAlt: "persistence logo",
    url: "https://wallet.keplr.app/chains/persistence?modal=validator&chain=core-1&validator_address=persistencevaloper1w0vwc82emz0ufyuvmvwps8s0lcyxl39nsct0w0",
    title: "Persistence",
    text: "",
    badge: false,
  },
  {
    logo: "/polygon.svg",
    logoAlt: "polygon logo",
    url: "https://staking.polygon.technology/validators/37",
    title: "Polygon",
    text: "",
    badge: false,
  },
];

const AboutMainnet = () => {
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

export default AboutMainnet;
