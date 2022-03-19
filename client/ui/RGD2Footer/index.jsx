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
        resume
      </a>
      <a
        className={bem("_link _link=email")}
        href="mailto:rafegoldberg@gmail.com?subject=Inquiry from RGD2"
        target="_blank"
      >
        email
      </a>
      <a
        className={bem("_link _link=dribbble")}
        href="https://dribbble.com/rgd2"
        target="_blank"
      >
        dribbble
      </a>
      <a
        className={bem("_link _link=github")}
        href="https://github.com/rafegoldberg/rgd2#readme"
        target="_blank"
      >
        github
      </a>
    </footer>
  );
};

export default RGD2Footer;
