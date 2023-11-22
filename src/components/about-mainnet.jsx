import * as React from "react";

const chains = [
  {
    logo: "/akash.svg",
    logoAlt: "akash logo",
    url: "https://wallet.keplr.app/chains/akash?modal=validator&chain=akashnet-2&validator_address=akashvaloper1a0wt033eds6lk4y0tucwju2x3weglxzg7vesku",
    title: "Akash",
    text: "10% APR",
    badge: false,
  },
  {
    logo: "/blast.svg",
    logoAlt: "blast logo",
    url: "https://blastapi.io/explorer/0xb000f8fa5fc06249c718e9db793d9618400618c3",
    title: "Blast",
    text: "11% APR",
    badge: false,
  },
  {
    logo: "/canto.svg",
    logoAlt: "canto logo",
    url: "https://www.mintscan.io/canto/validators/cantovaloper1d9z4m5g65a5lc96pyd9t7394rsvdcf7ezc2l6j",
    title: "Canto",
    text: "6% APR",
    badge: false,
  },
  {
    logo: "/comdex.svg",
    logoAlt: "comdex logo",
    url: "https://ping.pub/comdex/staking/comdexvaloper1zy7uuu6cd5fde3uunlh5l40jjf24ypd6rnltv5",
    title: "Comdex",
    text: "39% APR",
    badge: false,
  },
  {
    logo: "/connext.svg",
    logoAlt: "connext bridge logo",
    url: "https://connextscan.io/router/0x7ce49752ffa7055622f444df3c69598748cb2e5f",
    title: "Connext Bridge",
    text: "",
    badge: false,
  },
  {
    logo: "/evmos.svg",
    logoAlt: "evmos logo",
    url: "https://wallet.keplr.app/chains/evmos?modal=validator&chain=evmos_9001-2&validator_address=evmosvaloper1k5hcl0cjprzewwvzhz3um589kx8skzlrneuepu",
    title: "Evmos",
    text: "36% APR",
    badge: false,
  },
  {
    logo: "/gnosis.svg",
    logoAlt: "gnosis beacon chain logo",
    url: "https://docs.gnosischain.com/",
    title: "Gnosis Beacon Chain",
    text: "Contact Us!",
    badge: false,
  },
  {
    logo: "/obol.svg",
    logoAlt: "obol logo",
    url: "",
    title: "Obol",
    text: "Contact Us!",
    badge: false,
  },
  {
    logo: "/persistence.svg",
    logoAlt: "persistence logo",
    url: "https://wallet.keplr.app/chains/persistence?modal=validator&chain=core-1&validator_address=persistencevaloper1w0vwc82emz0ufyuvmvwps8s0lcyxl39nsct0w0",
    title: "Persistence",
    text: "16% APR",
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
    logo: "/rocketpool.svg",
    logoAlt: "rocketpool logo",
    url: "https://rocketpool.net/",
    title: "Rocketpool",
    text: "3.60% APR",
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
