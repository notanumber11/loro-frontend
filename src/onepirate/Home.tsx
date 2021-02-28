import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import AppBar from "./modules/views/AppBar";
import ProductOpinions from "./modules/views/ProductOpinions";
import ProductContact from "./modules/views/ProductContact";
import ProductReadyToLearn from "./modules/views/ProductReadyToLearn";
import i18next from "i18next";
import LoroConf from "../LoroConf";

function Index() {
    i18next.changeLanguage(LoroConf.getLanguage());
    return (
    <React.Fragment>
        <AppBar/>
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
