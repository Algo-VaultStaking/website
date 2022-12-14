import React, { useState } from "react";
import { Link as NavLink } from "gatsby";

import Logo from "./../images/logo-vaultstaking.svg";

const HeaderPrivacy = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header--wrapper">
          <NavLink to="/" className="header-logo">
            <img src={Logo} alt="Logo vault staking" />
          </NavLink>
          <nav className={`primary-nav ${navbarOpen ? " showMenu" : ""}`}>
            <ul>
              <li>
                <NavLink
                  activeClass="active"
                  smooth
                  spy
                  to="/#about"
                  onClick={() => closeMenu()}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClass="active"
                  smooth
                  spy
                  to="/#chains"
                  onClick={() => closeMenu()}
                >
                  Chains
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClass="active"
                  smooth
                  spy
                  to="/#faqs"
                  onClick={() => closeMenu()}
                >
                  Faqs
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClass="active"
                  smooth
                  spy
                  to="/#contact"
                  onClick={() => closeMenu()}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="socials">
              <a
                href="https://twitter.com/vaultstaking"
                className="social"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4.55005C23.1 4.95005 22.15 5.20005 21.15 5.35005C22.15 4.75005 22.95 3.80005 23.3 2.65005C22.35 3.20005 21.3 3.60005 20.15 3.85005C19.25 2.90005 17.95 2.30005 16.55 2.30005C13.85 2.30005 11.65 4.50005 11.65 7.20005C11.65 7.60005 11.7 7.95005 11.8 8.30005C7.75 8.10005 4.1 6.15005 1.65 3.15005C1.25 3.90005 1 4.70005 1 5.60005C1 7.30005 1.85 8.80005 3.2 9.70005C2.4 9.65005 1.65 9.45005 0.95 9.10005V9.15005C0.95 11.55 2.65 13.55 4.9 14C4.5 14.1 4.05 14.15 3.6 14.15C3.3 14.15 2.95 14.1 2.65 14.05C3.3 16 5.1 17.45 7.25 17.45C5.55 18.75 3.45 19.55 1.15 19.55C0.75 19.55 0.35 19.55 0 19.5C2.2 20.9 4.75 21.7001 7.55 21.7001C16.6 21.7001 21.55 14.2 21.55 7.70005C21.55 7.50005 21.55 7.25005 21.55 7.05005C22.5 6.40005 23.35 5.55005 24 4.55005Z"
                    fill="#001D48"
                  />
                </svg>
                Twitter
              </a>
              <a
                href="https://t.me/vaultstaking"
                className="social"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4542 2.92149C23.4358 2.8365 23.3952 2.75794 23.3364 2.69387C23.2776 2.62981 23.2028 2.58256 23.1197 2.55699C22.8177 2.4969 22.5052 2.519 22.2147 2.62099C22.2147 2.62099 2.1457 9.99999 0.911197 10.6665C0.625197 10.821 0.580197 10.9395 0.539197 11.0575C0.339197 11.6285 0.960197 11.8805 0.960197 11.8805L6.1542 13.573L8.6337 20.3135C8.6337 20.3135 8.9057 20.967 9.2877 20.967C9.4507 20.967 9.8197 20.7955 10.3472 20.267C11.4667 19.1475 12.5412 18.2195 13.0777 17.767C14.8637 19.0005 16.7857 20.364 17.6152 21.0775C17.7541 21.2121 17.9186 21.3173 18.099 21.387C18.2794 21.4566 18.4719 21.4893 18.6652 21.483C19.4527 21.4535 19.6722 20.589 19.6722 20.589C19.6722 20.589 23.3447 5.80849 23.4672 3.82849C23.4792 3.63449 23.4957 3.51099 23.4977 3.37849C23.5042 3.22488 23.4896 3.07111 23.4542 2.92149ZM7.0357 13.1665C9.6307 11.529 18.3662 6.02749 18.9227 5.82299C19.0227 5.79399 19.0922 5.82699 19.0727 5.89399C18.8257 6.76149 9.5607 15 9.5267 15.0275C9.50523 15.0475 9.48821 15.0719 9.47675 15.0989C9.46529 15.126 9.45965 15.1551 9.4602 15.1845L9.0997 18.887L7.0357 13.1665Z"
                    fill="#001D48"
                  />
                </svg>
                Telegram
              </a>
              <a
                href="https://discord.gg/R89tMFNa54"
                className="social"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91884 10.1501C9.5988 10.177 9.30053 10.3231 9.08315 10.5595C8.86576 10.7959 8.74512 11.1054 8.74512 11.4266C8.74512 11.7477 8.86576 12.0572 9.08315 12.2936C9.30053 12.53 9.5988 12.6762 9.91884 12.7031C10.2389 12.6762 10.5371 12.53 10.7545 12.2936C10.9719 12.0572 11.0926 11.7477 11.0926 11.4266C11.0926 11.1054 10.9719 10.7959 10.7545 10.5595C10.5371 10.3231 10.2389 10.177 9.91884 10.1501ZM14.1188 10.1501C13.8618 10.1283 13.6042 10.1847 13.3797 10.3118C13.1552 10.4389 12.9743 10.6308 12.8607 10.8624C12.7471 11.094 12.7061 11.3545 12.743 11.6098C12.7799 11.8651 12.8931 12.1033 13.0676 12.2933C13.2421 12.4832 13.47 12.616 13.7213 12.6743C13.9725 12.7327 14.2356 12.7138 14.4759 12.6201C14.7163 12.5264 14.9228 12.3624 15.0684 12.1494C15.2139 11.9365 15.2918 11.6845 15.2918 11.4266C15.2987 11.2655 15.2738 11.1047 15.2184 10.9533C15.163 10.8019 15.0783 10.6629 14.9691 10.5443C14.8599 10.4257 14.7283 10.3298 14.582 10.2622C14.4357 10.1945 14.2774 10.1564 14.1163 10.1501H14.1188Z"
                    fill="#001D48"
                  />
                  <path
                    d="M19.7052 0.5H4.29523C3.66188 0.534182 3.06707 0.814947 2.63814 1.28219C2.20921 1.74944 1.98023 2.36604 2.00023 3V18.5C1.99406 18.8027 2.04928 19.1034 2.16254 19.3842C2.27581 19.6649 2.44478 19.9198 2.65926 20.1334C2.87373 20.347 3.12927 20.515 3.41044 20.6272C3.69162 20.7393 3.9926 20.7934 4.29523 20.786H17.3362L16.7267 18.6585L18.2002 20.027L19.5902 21.315L22.0002 23.5V3C22.0202 2.36604 21.7913 1.74944 21.3623 1.28219C20.9334 0.814947 20.3386 0.534182 19.7052 0.5ZM15.2662 15.519C15.2662 15.519 14.8522 15.0245 14.5072 14.5875C15.3408 14.3912 16.0781 13.9065 16.5887 13.219C16.175 13.4953 15.7314 13.7237 15.2662 13.9C14.7312 14.1284 14.1717 14.2943 13.5987 14.3945C12.6138 14.5758 11.6037 14.5719 10.6202 14.383C10.0428 14.27 9.47698 14.1045 8.92973 13.8885C8.46858 13.7124 8.02879 13.4848 7.61873 13.21C8.11087 13.8831 8.82272 14.3631 9.63123 14.567C9.28623 15.004 8.86073 15.5215 8.86073 15.5215C6.31923 15.441 5.35323 13.7715 5.35323 13.7715C5.39056 11.4401 5.95679 9.14765 7.00923 7.067C7.93539 6.33962 9.06452 5.91771 10.2407 5.8595L10.3557 5.9975C9.24913 6.27137 8.21648 6.78573 7.33123 7.504C7.33123 7.504 7.58423 7.366 8.00973 7.1705C8.83636 6.79317 9.71737 6.54866 10.6202 6.446C10.6846 6.43268 10.75 6.42498 10.8157 6.423C11.5864 6.32259 12.3663 6.31487 13.1387 6.4C14.3535 6.53859 15.5294 6.91346 16.6002 7.5035C15.7599 6.81945 14.7839 6.32164 13.7367 6.043L13.8977 5.859C15.0739 5.91721 16.2031 6.33912 17.1292 7.0665C18.1817 9.14715 18.7479 11.4396 18.7852 13.771C18.7852 13.771 17.8077 15.4385 15.2662 15.519Z"
                    fill="#001D48"
                  />
                </svg>
                Discord
              </a>
            </div>
          </nav>

          <button onClick={handleToggle} className="burger">
            {navbarOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7 4.3C19.3 3.9 18.7 3.9 18.3 4.3L12 10.6L5.7 4.3C5.3 3.9 4.7 3.9 4.3 4.3C3.9 4.7 3.9 5.3 4.3 5.7L10.6 12L4.3 18.3C3.9 18.7 3.9 19.3 4.3 19.7C4.5 19.9 4.7 20 5 20C5.3 20 5.5 19.9 5.7 19.7L12 13.4L18.3 19.7C18.5 19.9 18.8 20 19 20C19.2 20 19.5 19.9 19.7 19.7C20.1 19.3 20.1 18.7 19.7 18.3L13.4 12L19.7 5.7C20.1 5.3 20.1 4.7 19.7 4.3Z"
                  fill="#001D48"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12H23"
                  stroke="#001D48"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                />
                <path
                  d="M1 5H23"
                  stroke="#001D48"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                />
                <path
                  d="M12 19H23"
                  stroke="#001D48"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderPrivacy;
