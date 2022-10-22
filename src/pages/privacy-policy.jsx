import * as React from "react";
import PrivacyLayout from "../layout/layout-privacy";

const PrivacyPolicy = () => {
  return (
    <PrivacyLayout>
      <section className="hero hero-privacy">
        <div className="container">
          <h1>Privacy Policy</h1>
          <div className="privacy-content">
            <h2>1. Introduction</h2>
            <p>
              These Website Standard Terms And Conditions (these “Terms” or
              these “Website Standard Terms And Conditions”) contained herein on
              this webpage, shall govern your use of this website, including all
              pages within this website (collectively referred to herein below
              as this “Website”). These Terms apply in full force and effect to
              your use of this Website and by using this Website, you expressly
              accept all terms and conditions contained herein in full. You must
              not use this Website, if you have any objection to any of these
              Website Standard Terms And Conditions.
            </p>
            <p>
              This Website is not for use by any minors (defined as those who
              are not at least 18 years of age), and you must not use this
              Website if you a minor.
            </p>
            <h2>2. Intellectual Property Rights</h2>
            <p>
              Other than content you own, which you may have opted to include on
              this Website, under these Terms,{" "}
              <span class="token">[ Sender.Company]</span> and/or its licensors
              own all rights to the intellectual property and material contained
              in this Website, and all such rights are reserved. You are granted
              a limited license only, subject to the restrictions provided in
              these Terms, for purposes of viewing the material contained on
              this Website.
            </p>
            <h2>3. Restrictions</h2>
            <p>
              You are expressly and emphatically restricted from all of the
              following:{" "}
            </p>
            <ol>
              <li>publishing any Website material in any media;</li>
              <li>
                selling, sublicensing and/or otherwise commercializing any
                Website material;
              </li>
              <li>publicly performing and/or showing any Website material;</li>
              <li>
                using this Website in any way that is, or may be, damaging to
                this Website;
              </li>
              <li>
                using this Website in any way that impacts user access to this
                Website;
              </li>
              <li>
                using this Website contrary to applicable laws and regulations,
                or in a way that causes, or may cause, harm to the Website, or
                to any person or business entity;{" "}
              </li>
              <li>
                engaging in any data mining, data harvesting, data extracting or
                any other similar activity in relation to this Website, or while
                using this Website;{" "}
              </li>
              <li>
                using this Website to engage in any advertising or marketing;
              </li>
            </ol>
            <p>
              Certain areas of this Website are restricted from access by you
              and <span class="token">[ Sender.Company]</span> may further
              restrict access by you to any areas of this Website, at any time,
              in its sole and absolute discretion. Any user ID and password you
              may have for this Website are confidential and you must maintain
              confidentiality of such information.{" "}
            </p>
            <h2>4. Your Content</h2>
            <p>
              In these Website Standard Terms And Conditions, “Your Content”
              shall mean any audio, video, text, images or other material you
              choose to display on this Website. With respect to Your Content,
              by displaying it, you grant{" "}
              <span class="token">[ Sender.Company]</span> a non-exclusive,
              worldwide, irrevocable, royalty-free, sublicensable license to
              use, reproduce, adapt, publish, translate and distribute it in any
              and all media.
            </p>
            <p>
              Your Content must be your own and must not be infringing on any
              third party’s rights. <span class="token">[ Sender.Company]</span>{" "}
              reserves the right to remove any of Your Content from this Website
              at any time, and for any reason, without notice.{" "}
            </p>
            <h2>5. No warranties</h2>
            <p>
              This Website is provided “as is,” with all faults, and{" "}
              <span class="token">[ Sender.Company]</span> makes no express or
              implied representations or warranties, of any kind related to this
              Website or the materials contained on this Website. Additionally,
              nothing contained on this Website shall be construed as providing
              consult or advice to you.{" "}
            </p>
            <h2>6. Limitation of liability</h2>
            <p>
              In no event shall <span class="token">[ Sender.Company]</span> ,
              nor any of its officers, directors and employees, be liable to you
              for anything arising out of or in any way connected with your use
              of this Website, whether such liability is under contract, tort or
              otherwise, and <span class="token">[ Sender.Company]</span> ,
              including its officers, directors and employees shall not be
              liable for any indirect, consequential or special liability
              arising out of or in any way related to your use of this Website.{" "}
            </p>
            <h2>7. Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent{" "}
              <span class="token">[ Sender.Company]</span> from and against any
              and all liabilities, costs, demands, causes of action, damages and
              expenses (including reasonable attorney’s fees) arising out of or
              in any way related to your breach of any of the provisions of
              these Terms.
            </p>
            <h2>8. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid under any applicable law, such unenforceability or
              invalidity shall not render these Terms unenforceable or invalid
              as a whole, and such provisions shall be deleted without affecting
              the remaining provisions herein.
            </p>
            <h2>9. Variation of Terms</h2>
            <p>
              <span class="token">[ Sender.Company]</span> is permitted to
              revise these Terms at any time as it sees fit, and by using this
              Website you are expected to review such Terms on a regular basis
              to ensure you understand all terms and conditions governing use of
              this Website.{" "}
            </p>
            <h2>10. Assignment</h2>
            <p>
              <span class="token">[ Sender.Company]</span> shall be permitted to
              assign, transfer, and subcontract its rights and/or obligations
              under these Terms without any notification or consent required.
              However, .you shall not be permitted to assign, transfer, or
              subcontract any of your rights and/or obligations under these
              Terms.{" "}
            </p>
            <h2>11. Entire Agreement</h2>
            <p>
              These Terms, including any legal notices and disclaimers contained
              on this Website, constitute the entire agreement between{" "}
              <span class="token">[ Sender.Company]</span> and you in relation
              to your use of this Website, and supersede all prior agreements
              and understandings with respect to the same.{" "}
            </p>
            <h2>12. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and construed in accordance with
              the laws of the State of <span class="token">[ State]</span>, and
              you submit to the non-exclusive jurisdiction of the state and
              federal courts located in <span class="token">[State]</span> for
              the resolution of any disputes.{" "}
            </p>
          </div>
        </div>
      </section>
    </PrivacyLayout>
  );
};

export default PrivacyPolicy;

export const Head = () => <title>Privacy Policy | Vault Staking</title>;
