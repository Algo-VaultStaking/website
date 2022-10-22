import * as React from "react";
import Collapsible from "react-collapsible";

// import rewardingImg from "../images/rewarding.svg";

const FaqSection = ({ content }) => {
  console.log(content);
  return (
    <section className="faq" id="faqs">
      <div className="container">
        <h2>FAQs</h2>
      </div>
      <div className="container">
        <div className="faq--wrapper">
          {content.faq.map((data, index) => {
            return (
              <Collapsible trigger={data.title} key={`content_item_${index}`}>
                <p>{data.text}</p>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
