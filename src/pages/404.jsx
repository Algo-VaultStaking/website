import * as React from "react";
import { Link } from "gatsby";
import MainLayout from "../layout/layout";

import vssVideoNo from "./../../static/vs-no.mp4";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <section className="hero hero-404">
        <div className="container">
          <h1>Sorry, the page you were looking for does not exist!</h1>
          <Link to="/" className="btn">
            Go home
          </Link>
        </div>
        <div className="video-wrapper">
          <video autoPlay muted loop>
            <source src={vssVideoNo} />
          </video>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found | Vault Staking</title>;
