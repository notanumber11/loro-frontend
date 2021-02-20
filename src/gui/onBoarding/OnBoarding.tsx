import withRoot from "../../onepirate/modules/withRoot";
// --- Post bootstrap -----
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Markdown from "../../onepirate/modules/components/Markdown";
import Typography from "../../onepirate/modules/components/Typography";
import AppAppBar from "../../onepirate/modules/views/AppAppBar";
import AppFooter from "../../onepirate/modules/views/AppFooter";
import OnBoardingModal from "./OnBoardingModal";

function OnBoarding() {
  const [markdown, setMarkdown] = useState("");

  // https://github.com/webpack/webpack/issues/6680
  useEffect(() => {
    import("../../onepirate/modules/views/terms.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdown(responseText));
  });

  if (!markdown) {
    return <div />;
  }

  return (
    <React.Fragment>
        <OnBoardingModal/>
    </React.Fragment>
  );
}

export default withRoot(OnBoarding);
