import React from "react";
import "./LandingPage.scss";
import Carousel from "../../components/carousel/Carousel";

const LandingPage = () => {
    return (
        <div className="dkLandingPage">
            <section id="heroSection">
                <div className="container-fluid g-0">
                    <div className="row">
                        <div className="col-12">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
