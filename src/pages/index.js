import React from "react"
import Layout from "../components/layout"
import Button from "../components/button/button.component"
import SEO from "../components/seo"
import img from "../images/norasri.jpeg"
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
        <div>
          <span>
            <strong>GREEN YOGA</strong> want to spread Yoga & Meditation and
            plant trees
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
                Knowledge about <strong>Ancient Wisdom</strong> and{" "}
                <strong>PracticalTools </strong>to navigate.
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
          ARE YOU READY TO LEARN A NEW FUN WAY TO DO YOGA AND MEDITATION?
          <br /> <br />
          BECOME A MEMBER OF OUR GREEN YOGA TRIBE ONLY IF:
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

    <Button
      btn_text="Click Here To Join 
Our Green Yoga Tribe"
    />
    <h3 className="thanks"> What Others Have To Say About Green Yoga</h3>
    <div className="testimonials">
      <div className="testimonial">
        <h4>Maria Antonella Campostrini</h4>
        I’ve been practising here for three months and I love it, teachers are
        very nice and the studio is super cosy. Classes are suitable for both
        beginners and experienced practitioners.
        <div className="stars">★★★★★</div>
      </div>
      <div className="testimonial">
        <h4>ae incorperated</h4>I came along today 31st December 2019 for a Gong
        session combined with yoga. It was great a packed studio full of lovely
        people who wanted to ring through the new year together. Great feel
        amongst all who came and I liked the teachers vibe. It was chill and
        will go again. Good atmosphere, donation based.
        <div className="stars">★★★★★</div>
      </div>
      <div className="testimonial">
        <h4>Marcel Fladrich</h4>
        Since six weeks I visit "Flow with Sonja" every Thursday and I can only
        recommend it to everybody. I didn't think that yoga would bring me
        anything, but I was taught a better one and I wouldn't want to miss it
        anymore. Sonja always manages to bring about a state of relaxation
        within five minutes, so that I forget all everyday stress and feel like
        a new person after the class. Thanks for this great experience :)
        #thumbsup
        <div className="stars">★★★★★</div>
      </div>
    </div>
    <h3 className="thanks">Thank you, from Sri & Nora, Green Yoga</h3>
    <img className="img" src={img} alt="Green Yoga Founders"></img>
  </Layout>
)

export default IndexPage
