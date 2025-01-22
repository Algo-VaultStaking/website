import * as React from "react";

const chains = [
  {
    logo: "/elys.svg",
    logoAlt: "elys logo",
    url: "",
    title: "Elys",
    text: "",
    badge: true,
  },
  {
    logo: "/mantra.svg",
    logoAlt: "mantra logo",
    url: "",
    title: "Mantra Chain",
    text: "",
    badge: true,
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
