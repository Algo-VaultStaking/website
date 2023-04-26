import * as React from "react";

const chains = [
  {
    logo: "/akash.svg",
    logoAlt: "akash logo",
    url: "https://wallet.keplr.app/chains/akash?modal=validator&chain=akashnet-2&validator_address=akashvaloper1a0wt033eds6lk4y0tucwju2x3weglxzg7vesku",
    title: "Akash",
    text: "13% APR",
    badge: false,
  },
  {
    logo: "/arable.svg",
    logoAlt: "arable finance logo",
    url: "https://cosmosrun.info/acre-mainnet/staking/acrevaloper16v8tgcl2a72zpg74us65wv7626mcnu22l2p0ea",
    title: "Arable Finance",
    text: "73% APR",
    badge: false,
  },
  {
    logo: "/aura.svg",
    logoAlt: "aura logo",
    url: "",
    title: "Aura Network",
    text: "",
    badge: true,
  },
  {
    logo: "/canto.svg",
    logoAlt: "canto logo",
    url: "https://www.mintscan.io/canto/validators/cantovaloper1d9z4m5g65a5lc96pyd9t7394rsvdcf7ezc2l6j",
    title: "Canto",
    text: "",
    badge: false,
  },
  {
    logo: "/comdex.svg",
    logoAlt: "comdex logo",
    url: "https://ping.pub/comdex/staking/comdexvaloper1zy7uuu6cd5fde3uunlh5l40jjf24ypd6rnltv5",
    title: "Comdex",
    text: "37% APR",
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
    text: "128% APR",
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
    logo: "/graph.svg",
    logoAlt: "the graph logo",
    url: "https://thegraph.com/explorer/profile/0x6fb74b16645466a5f614fd80fb04fcb07cfb4e74?view=Overview",
    title: "The Graph",
    text: "",
    badge: false,
  },
  {
    logo: "/gravity.svg",
    logoAlt: "gravity bridge logo",
    url: "https://wallet.keplr.app/chains/gravity-bridge?modal=validator&chain=gravity-bridge-3&validator_address=gravityvaloper1c29qvkt7jkvsjj9h3fl9pgs8vqe3khgqluadfs",
    title: "Gravity Bridge",
    text: "32% APR",
    badge: false,
  },
  {
    logo: "/injective.svg",
    logoAlt: "injective logo",
    url: "",
    title: "Injective",
    text: "16% APR",
    badge: false,
  },
  {
    logo: "/persistence.svg",
    logoAlt: "persistence logo",
    url: "https://wallet.keplr.app/chains/persistence?modal=validator&chain=core-1&validator_address=persistencevaloper1w0vwc82emz0ufyuvmvwps8s0lcyxl39nsct0w0",
    title: "Persistence",
    text: "33% APR",
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
    logo: "/point.svg",
    logoAlt: "point network logo",
    url: "https://ping.pub/point/staking/pointvaloper12g28ynkz0cm075lfj7kgh3d2aad4z5q6vx7gnt",
    title: "Point Network",
    text: "17% APR",
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
    url: "https://wallet.keplr.app/chains/sifchain?modal=validator&chain=sifchain-1&validator_address=sifvaloper19p3ghh2epn7gsqkz4vl7hf7m3klearnef4ng7w",
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
  {
    logo: "/whitewhale.svg",
    logoAlt: "white whale logo",
    url: "",
    title: "White Whale",
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
