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
    <h2 className="headline-2">
      Yoga is much more than poses It’s a way of life
    </h2>

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
            <span>Plant Tress Outside</span>
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
      <h2 className="headline-3">
        Green Yoga wants to support you on your way to find your true self.
      </h2>
      <div className="about-gy">
        <span>
          {" "}
          As there are many ways to yoga Green Yoga offers a variety of tools
          and classes to help you in this process. There is something for
          everybody: <br />
          Calming <strong> Yin classes</strong> to relax your nervous system,
          energizing <strong> Vinyasa Flows</strong>, challenging{" "}
          <strong>Ashtanga classes</strong>, traditional{" "}
          <strong> Hatha classes</strong>,<strong> Kundalini Yoga</strong> to
          awaken your soul, <strong> Meditation </strong>to calm your monkey
          mind !
        </span>

        <span>
          Moreover Green Yoga offers <strong>Singing Meditations </strong>to
          open your heart,
          <strong>Sound Healing and Gong Baths </strong>to go to an internal
          state of silence, peace and truth and<strong> Dance classes</strong>{" "}
          to get in touch with your body and move freely.
          <br /> All of our classes and offerings support you to reduce stress
          and tension, to create a harmonic union of body and mind and
          ultimately to reconnect to yourself.
        </span>
      </div>

      <Button btn_text="join the green yoga tribe" />
    </div>
  </Layout>
)

export default IndexPage
