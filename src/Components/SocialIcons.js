import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/sinhashlok"
        rel="noreferrer"
        target={"_blank"}
      >
        <GitHubIcon fontSize="large" className="icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/shlok-sinha-8297ba204/"
        rel="noreferrer"
        target={"_blank"}
      >
        <LinkedInIcon fontSize="large" className="icons" />
      </a>
      <a
        href="https://twitter.com/SinhaShlok12"
        rel="noreferrer"
        target={"_blank"}
      >
        <TwitterIcon fontSize="large" className="icons" />
      </a>
      <a
        href="https://drive.google.com/file/d/1WD777GpIlfNiMcL_Tdj3nDK8g63UpLVR/view?usp=sharing2"
        rel="noreferrer"
        target={"_blank"}
      >
        <ArticleIcon fontSize="large" className="icons" />
      </a>
    </div>
  );
}
