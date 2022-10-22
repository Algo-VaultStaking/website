import * as React from "react";

const chains = [
  {
    logo: "/akash.svg",
    logoAlt: "akash logo",
    url: "https://akash.network/",
    title: "Akash",
    text: "18% APR",
    badge: false,
  },
  {
    logo: "/arable.svg",
    logoAlt: "arable finance logo",
    url: "https://arable.finance/",
    title: "Arable Finance",
    text: "73% APR",
    badge: false,
  },
  {
    logo: "/comdex.svg",
    logoAlt: "comdex logo",
    url: "https://comdex.one/",
    title: "Comdex",
    text: "35% APR",
    badge: false,
  },
  {
    logo: "/connext.svg",
    logoAlt: "connext bridge logo",
    url: "https://bridge.connext.network/",
    title: "Connext Bridge",
    text: "",
    badge: false,
  },
  {
    logo: "/evmos.svg",
    logoAlt: "evmos logo",
    url: "https://evmos.org/",
    title: "Evmos",
    text: "1216% APR",
    badge: false,
  },
  {
    logo: "/gnosis.svg",
    logoAlt: "gnosis beacon chain logo",
    url: "https://docs.gnosischain.com/",
    title: "Gnosis Beacon Chain",
    text: "",
    badge: true,
  },
  {
    logo: "/graph.svg",
    logoAlt: "the graph logo",
    url: "https://thegraph.com/",
    title: "The Graph",
    text: "",
    badge: true,
  },
  {
    logo: "/gravity.svg",
    logoAlt: "gravity bridge logo",
    url: "https://www.gravitybridge.net/",
    title: "Gravity Bridge",
    text: "31% APR",
    badge: false,
  },
  {
    logo: "/persistence.svg",
    logoAlt: "persistence logo",
    url: "https://persistence.one/",
    title: "Persistence",
    text: "35% APR",
    badge: false,
  },
  {
    logo: "/polygon.svg",
    logoAlt: "polygon logo",
    url: "https://polygon.technology/",
    title: "Polygon",
    text: "5.40% APR",
    badge: false,
  },
  {
    logo: "/point.svg",
    logoAlt: "point network logo",
    url: "https://pointnetwork.io/",
    title: "Point Network",
    text: "1546% APR",
    badge: false,
  },
  {
    logo: "/rocketpool.svg",
    logoAlt: "rocketpool logo",
    url: "https://rocketpool.net/",
    title: "Rocketpool",
    text: "3.60% APR",
    badge: false,
  },
  {
    logo: "/sif.svg",
    logoAlt: "sif chain logo",
    url: "https://www.sifchain.finance/",
    title: "Sif Chain",
    text: "170% APR",
    badge: false,
  },
  {
    logo: "/sx.svg",
    logoAlt: "sx network logo",
    url: "https://sx.technology/",
    title: "Sx Network",
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
