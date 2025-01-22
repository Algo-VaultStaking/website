import * as React from "react";

const chains = [
  {
    logo: "/autonity.svg",
    logoAlt: "autonity logo",
    url: "https://autonity.org/",
    title: "Autonity",
    text: "",
    badge: false,
  },
  {
    logo: "/polygon.svg",
    logoAlt: "polygon logo",
    url: "https://staking.polygon.technology",
    title: "Polygon Amoy",
    text: "",
    badge: false,
  },
  {
    logo: "/seda.svg",
    logoAlt: "seda logo",
    url: "https://testnet.seda.explorers.guru/validator/sedavaloper1g6lmz2n0v87qxv8ktpenprapw2j8akw59lsjxe",
    title: "Seda",
    text: "",
    badge: false,
  },
  {
    logo: "/story-white.svg",
    logoAlt: "story logo",
    url: "https://testnet.storyscan.app/validators/storyvaloper14j90lm6qu2uaux4fkhvg9ftxnl6vff5cegz95r",
    title: "Story",
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
