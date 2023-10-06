import * as React from "react";

const chains = [
  {
    logo: "/comdex.svg",
    logoAlt: "comdex logo",
    url: "https://comdex.one/",
    title: "Comdex",
    text: "",
    badge: false,
  },
  {
    logo: "/dymension.svg",
    logoAlt: "dymension logo",
    url: "",
    title: "Dymension",
    text: "",
    badge: false,
  },
  {
    logo: "/elys.svg",
    logoAlt: "elys logo",
    url: "",
    title: "Elys",
    text: "",
    badge: false,
  },
  {
    logo: "/lava.svg",
    logoAlt: "lava logo",
    url: "",
    title: "Lava",
    text: "",
    badge: false,
  },
  {
    logo: "/obol.svg",
    logoAlt: "obol logo",
    url: "",
    title: "Obol",
    text: "",
    badge: false,
  },
  {
    logo: "/polygon.svg",
    logoAlt: "polygon logo",
    url: "",
    title: "Polygon Supernets",
    text: "",
    badge: true,
  },
  {
    logo: "/whitewhale.svg",
    logoAlt: "white whale logo",
    url: "",
    title: "White Whale",
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
