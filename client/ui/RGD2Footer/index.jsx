import React from "react";
import { useClassy } from "use-classy";

import "./style.scss";

const RGD2Footer = () => {
  const bem = useClassy("RGD2Footer");
  return (
    <footer className={bem()}>
      <a
        className={bem("_link _link=resume")}
        href="/resume.pdf"
        target="_blank"
      >
        Resume
      </a>
      <a
        className={bem("_link _link=twitter")}
        href="https://twitter.com/rafegoldberg"
        target="_blank"
      >
        Twitter
      </a>
      <a
        className={bem("_link _link=dribbble")}
        href="https://dribbble.com/rgd2"
        target="_blank"
      >
        Dribbble
      </a>
      <a
        className={bem("_link _link=github")}
        href="https://github.com/rafegoldberg"
        target="_blank"
      >
        GitHub
      </a>
    </footer>
  );
};

export default RGD2Footer;
