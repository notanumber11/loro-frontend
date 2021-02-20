import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import AppAppBar from "./modules/views/AppAppBar";
import ProductOpinions from "./modules/views/ProductOpinions";
import ProductContact from "./modules/views/ProductContact";
import ProductReadyToLearn from "./modules/views/ProductReadyToLearn";

function Index() {
  return (
    <React.Fragment>
        <AppAppBar/>
        <ProductHero />
        <ProductHowItWorks />
        <ProductOpinions />
        <ProductContact/>
        <ProductReadyToLearn />
        <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
