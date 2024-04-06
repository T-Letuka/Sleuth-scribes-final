import React from "react";
import "./About.css";
import cartoon from "../../assets/cartoon.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={cartoon}
          alt="about-left image"
          className="about-left-image"
        />
      </div>
      <div className="about-right">
        <h3>About Sleuth Society</h3>
        <h2>From Clue to Conclusion, We're On the Case.</h2>
        <p>
          It is with great pleasure that I present to you our new online
          sanctuary, designed exclusively for those with an insatiable thirst
          for solving mysteries. In the midst of our daily lives, it's
          imperative to engage our intellect and seek out challenges that truly
          stimulate the mind. Hence, I have crafted this platform where we can
          unite our deductive prowess and embark on thrilling adventures
          together.
        </p>
        <p>
          Because let's face it, there's nothing quite like the thrill of
          pretending you're Sherlock Holmes while munching on microwave popcorn.
          And who needs a social life when you have a backlog of unsolved cases
          to ponder, am I right?
        </p>
        <p>
          Now, if you're tired of staring blankly at your screen or pretending
          to work, hop on board! We've got packages ranging from "I think I can
          solve this" to "What on earth were they thinking?" Because, let's be
          real, who doesn't want to test their sanity with some mind-bending
          puzzles? So grab your magnifying glass (or reading glasses, we don't
          judge), and let's dive headfirst into the abyss of mysteries together.
          Because life's too short to not pretend you're a super sleuth at least
          once a day.
        </p>
        <p>
          Join us in unraveling the secrets that lie hidden in the shadows, for
          in this realm, every clue leads us closer to the truth.
        </p>
      </div>
    </div>
  );
};

export default About;
