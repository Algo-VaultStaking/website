import * as React from "react";
import "./index.scss";
import MainLayout from "../layout/layout";

import homepageData from "../content/homepage.json";
import AboutSection from "../sections/about";
import ChainsSection from "../sections/chains";
import FaqSection from "../sections/faq";
import FormSection from "../sections/form";

import { StaticImage } from "gatsby-plugin-image";

import vssVideo from "./../../static/vs-no.mp4";

const IndexPage = () => {
  return (
    <MainLayout>
      <div className="misc misc--hero-left">
        <StaticImage
          src="../images/misc-hero.png"
          alt="A kitten"
          placeholder="none"
        />
      </div>
      <div className="misc misc--about">
        <StaticImage
          src="../images/misc-about.png"
          alt="A kitten"
          placeholder="none"
        />
      </div>
      <div className="misc misc--dedicated">
        <StaticImage
          src="../images/misc-dedicated.png"
          alt="A kitten"
          placeholder="none"
        />
      </div>
      <div className="misc misc--reliable">
        <StaticImage
          src="../images/misc-reliable.png"
          alt="A kitten"
          placeholder="none"
        />
      </div>
      <div className="misc misc--footer">
        <StaticImage
          src="../images/misc-footer.png"
          alt="A kitten"
          placeholder="none"
        />
      </div>
      <section className="hero">
        <div className="container">
          <h1>{homepageData.heroHeading}</h1>
        </div>
        <div className="video-wrapper">
          <video autoPlay muted loop playsInline>
            <source src={vssVideo} />
          </video>
        </div>
      </section>
      <section className="card-numbers" id="about">
        <div className="container">
          <div className="card-numbers--wrapper">
            {homepageData.cardsNumber.map((data, index) => {
              return (
                <div className="card-number" key={`content_item_${index}`}>
                  <div className="title">{data.title}</div>
                  <div className="number">{data.number}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AboutSection />
      <ChainsSection />
      <FaqSection content={homepageData} />
      <FormSection />
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Vault Staking</title>;
