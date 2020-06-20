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
            <strong> WITH YOU.</strong> <br /> <br />
            By joining the <strong>GREEN YOGA TRIBE</strong> in the{" "}
            <strong>FREE</strong> Facebook Group we offer you:
            <ul>
              <li>
                Support from the Green Yoga Tribe <strong>community.</strong>
              </li>
              <li>
                <strong>Daily Inspirations</strong> on your yogic path.
              </li>
              <li>
                Knowledge about <strong>Ancient Wisdom</strong> and Practical{" "}
                <strong>Tools </strong>to navigate.
              </li>
              <li>
                To get involved in our <strong>Tree Plantation</strong> project
                and make a difference.
              </li>
            </ul>
          </span>
        </div>
        <ul className="benfits-list">
          <li>
            <div className="benefit-container">
              <Yoga className="benefit"></Yoga>
              <span>Discover</span>
              <span> The Essence Of Yogic Therapy</span>
            </div>
          </li>
          <li className="hideme">
            <div className="benefit-container ">
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
          <li className="hideme">
            <div className="benefit-container ">
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

          <li className="hideme">
            <div className="benefit-container ">
              <Infinite className="benefit"></Infinite>
              <span>And so much more</span>
            </div>
          </li>
        </ul>
        <h3 className="ready">
          Are you ready to yoga?
          <br /> Become member of Green Yoga Tribe <strong> ONLY IF:</strong>
        </h3>
        <span>
          {" "}
          <ul>
            <li>
              {" "}
              You want to <strong>connect</strong> with like minded people for
              the creation of a <strong>better future.</strong>
            </li>
            <li>
              {" "}
              You are ready to make an effort to <strong>
                be the change
              </strong>{" "}
              that you want to see in <strong>the world.</strong>
            </li>
            <li>
              You want to <strong>deepen</strong> and <strong>expand </strong>
              your <strong>Yoga practice.</strong>
            </li>
          </ul>{" "}
        </span>
        <span className="last-call">
          {" "}
          <strong> Join</strong> below if you are ready to{" "}
          <strong>go inwards</strong> and work within ~{" "}
          <strong>TOGETHER</strong>
        </span>{" "}
      </div>
    </div>

    <Button btn_text="Join our FREE FACEBOOK group now !" />
  </Layout>
)

export default IndexPage
