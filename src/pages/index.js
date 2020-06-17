import React from "react"
import Layout from "../components/layout"
import Button from "../components/button/button.component"
import SEO from "../components/seo"

import Infinite from "../assets/infinite-symbol.svg"
import LoveYourself from "../assets/love-yourself.svg"
import Meditation from "../assets/meditation.svg"
import Yoga from "../assets/yoga.svg"
import Support from "../assets/wellness-group.svg"
import Sprout from "../assets/sprout.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Green Yoga" />

    <div className="benefits-container">
      <ul>
        <li>
          <div className="benefit-container">
            <Yoga className="benefit"></Yoga>
            <span>Discover</span>
            <span> The Essence Of Yogic Therapy</span>
          </div>
        </li>
        <li>
          <div className="benefit-container">
            <LoveYourself className="benefit"></LoveYourself>
            <span>Understand </span>
            <span> Your Mind and Body</span>
          </div>
        </li>
        <li>
          <div className="benefit-container">
            <Sprout className="benefit"></Sprout>
            <span>Grow Inside</span>
            <span>Plant Trees Outside</span>
          </div>
        </li>
        <li>
          <div className="benefit-container">
            <Meditation className="benefit"></Meditation>
            <span>Cure What Ails You</span>
          </div>
        </li>
        <li>
          <div className="benefit-container">
            <Support className="benefit"></Support>
            <span>Get Support</span>
            <span>From Our Tribe</span>
          </div>
        </li>

        <li>
          <div className="benefit-container">
            <Infinite className="benefit"></Infinite>
            <span>And so much more</span>
          </div>
        </li>
      </ul>
      <div className="about-gy">
        <h2 className="headline-2">
          FREE Facebook Group <br />
          For Green Yogis & Yoginis
        </h2>
        <div>
          <span>
            Join our <strong>FREE </strong>Facebook Group for yogis, yoginis and
            tree lovers.
            <br />
            <strong>GREEN YOGA</strong> want to spread yoga and plant trees
            together <strong>WITH YOU.</strong> <br /> <br />
            By joining the <strong>GREEN YOGA TRIBE</strong> in the{" "}
            <strong>FREE</strong> Facebook Group we offer you:
            <ul>
              <li>
                Lifetime support from the growing <strong>COMMUNITY</strong> of
                the Green Yoga Tribe in times of transition.
              </li>
              <li>
                <strong>DAILY</strong> new <strong>INSPIRATIONS</strong> on your
                yogic path toward a brighter future.
              </li>
              <li>
                Knowledge about <strong>ANCIENT WISDOM</strong> and Practical{" "}
                <strong>TOOLS</strong> that will navigate you through these
                insecure times
              </li>
              <li>
                Get involved in our <strong>TREE PLANTATION</strong> project and
                make a difference.
              </li>
            </ul>
          </span>
        </div>
        <h3 className="ready">Are you ready to yoga? </h3>
        <span>
          {" "}
          Become member of Green Yoga Tribe <strong> ONLY IF:</strong>
          <ul>
            <li>
              {" "}
              You want to <strong>CONNECT</strong> with like minded people to
              create a <strong>BETTER</strong>
              <strong> FUTURE FOR ALL</strong> of us.{" "}
            </li>
            <li>
              {" "}
              You are ready to make an real effort to{" "}
              <strong> BE THE CHANGE</strong> that you want to see in{" "}
              <strong>THE WORLD.</strong>
            </li>
            <li>
              {" "}
              You want to get <strong>SERIOUS</strong> about your{" "}
              <strong>YOGA PRACTICE</strong> and dive deep into the ancient
              wisdom.
            </li>
          </ul>{" "}
        </span>
        <span className="last-call">
          {" "}
          <strong> JOIN</strong> below if you are ready to{" "}
          <strong>GO INWARDS</strong> and work within ~ but{" "}
          <strong>TOGETHER</strong>
        </span>{" "}
      </div>
    </div>
    <Button btn_text="Join now our FREE FACEBOOK group" />
  </Layout>
)

export default IndexPage
