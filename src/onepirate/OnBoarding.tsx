import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./modules/views/AppFooter";
import AppBar from "./modules/views/AppBar";
import ProductOnBoarding from "./modules/views/ProductOnBoarding";

function OnBoarding() {
    return (
        <React.Fragment>
            <AppBar/>
            <ProductOnBoarding/>
            <AppFooter/>
        </React.Fragment>
    );
}

export default withRoot(OnBoarding);
