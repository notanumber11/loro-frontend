import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Markdown from "./modules/components/Markdown";
import Typography from "./modules/components/Typography";
import AppBar from "./modules/views/AppBar";
import AppFooter from "./modules/views/AppFooter";

function Terms() {
  const [markdown, setMarkdown] = useState("");

  // https://github.com/webpack/webpack/issues/6680
  useEffect(() => {
    import("./modules/views/terms.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdown(responseText));
  });

  if (!markdown) {
    return <div />;
  }

  return (
    <React.Fragment>
      <AppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <Markdown>{markdown}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Terms);
