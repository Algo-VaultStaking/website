import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/header";
import Footer from "../components/footer";

const MainLayout = ({ children, hasFooter = true }) => (
  <div>
    <Helmet htmlAttributes>
      <meta name="description" content="App Description" />
      <meta name="theme-color" content="#001D48" />
      <meta
        name="description"
        content="Trust the Vault. Stake. Earn Rewards."
      />
      <meta name="theme-color" content="#001D48" />
      <meta name="og:type" content="website" />
      <meta
        name="og:url"
        content="https://vaultstaking.com"
        data-react-helmet="true"
      />
      <meta name="og:title" content="Trust the Vault. Stake. Earn Rewards." />
      <meta
        name="og:description"
        content="Trust the Vault. Stake. Earn Rewards."
      />
      <meta
        name="og:image"
        content="/social-meta.png"
        data-react-helmet="true"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
        data-react-helmet="true"
      />
      <meta
        name="twitter:url"
        content="Trust the Vault. Stake. Earn Rewards."
        data-react-helmet="true"
      />
      <meta
        name="twitter:title"
        content="Trust the Vault. Stake. Earn Rewards."
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content="Trust the Vault. Stake. Earn Rewards."
        data-react-helmet="true"
      />
      <meta
        name="twitter:image"
        content="/social-meta.png"
        data-react-helmet="true"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/fav-vault.png" />
      <link rel="canonical" href />
    </Helmet>
    <Navigation />
    {children}
    {hasFooter && <Footer />}
  </div>
);

export default MainLayout;
