import * as React from "react";

const chains = [
  {
    logo: "/aethir.svg",
    logoAlt: "aethir logo",
    url: "https://app.aethir.com/dashboard",
    title: "Aethir",
    text: "",
    badge: false,
  },
  {
    logo: "/avail.svg",
    logoAlt: "avail logo",
    url: "https://explorer.avail.so/#/staking/",
    title: "Avail",
    text: "",
    badge: false,
  },
  {
    logo: "/elys.svg",
    logoAlt: "elys logo",
    url: "https://ping.pub/elys/staking/elysvaloper12e2zn8qk6dyg0vmduk3kq22c29f9w497fmguv9",
    title: "Elys",
    text: "",
    badge: false,
  },
  {
    logo: "/gnosis.svg",
    logoAlt: "gnosis beacon chain logo",
    url: "https://docs.gnosischain.com/",
    title: "Gnosis Beacon Chain",
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
  {
    logo: "/obol.svg",
    logoAlt: "obol logo",
    url: "https://obol.org/",
    title: "Obol",
    text: "Contact Us!",
    badge: false,
  },
  {
    logo: "/persistence.svg",
    logoAlt: "persistence logo",
    url: "https://wallet.keplr.app/chains/persistence?modal=validator&chain=core-1&validator_address=persistencevaloper1w0vwc82emz0ufyuvmvwps8s0lcyxl39nsct0w0",
    title: "Persistence",
    text: "17% APR",
    badge: false,
  },
  {
    logo: "/polygon.svg",
    logoAlt: "polygon logo",
    url: "https://staking.polygon.technology/validators/37",
    title: "Polygon",
    text: "5% APR",
    badge: false,
  },
  {
    logo: "/router.svg",
    logoAlt: "router logo",
    url: "https://staking.polygon.technology/validators/37",
    title: "Router",
    text: "https://router.explorers.guru/validator/routervaloper1l4ms9p5yafclwdnydw2nvp2q846s4llusya8lt",
    badge: false,
  },
  {
    logo: "/seda.svg",
    logoAlt: "seda logo",
    url: "https://seda.explorers.guru/validator/sedavaloper1kpuvn57r87lnjgq9u4tx97d3gt9w8h50udrtl8",
    title: "Seda",
    text: "",
    badge: false,
  },
  {
    logo: "/sx.svg",
    logoAlt: "sx network logo",
    url: "https://sx.bet/stakingV2/validators",
    title: "Sx Network",
    text: "7% APR",
    badge: false,
  },
  {
    logo: "/whitewhale.svg",
    logoAlt: "white whale logo",
    url: "https://explorer.silknodes.io/migaloo/staking/migaloovaloper13qayma5qn93xyhn2urjzc8j3j4f5j5yvgpckvr",
    title: "White Whale",
    text: "8% APR",
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
