import React from "react";
import "./HomePage.scss";
import { useHistory } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import Icon from "../../components/icon/Icon";
import ListGroup from "../../components/listGroup/ListGroup";
import { servicesItems } from "../../utils/serviceItems";

const HomePage = () => {
    const history = useHistory();
    return (
        <div className="dkHomePage">
            <section id="heroSection">
                <div className="container-fluid g-0">
                    <div className="row">
                        <div className="col-12">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </section>
            <section id="servicesSection">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="pb-3">our services</h5>
                            <h1 className="pb-2">
                                We create everything from scratch with the
                                latest technologoy that will be around for years{" "}
                                <Icon
                                    isSolid
                                    color="red"
                                    size="30"
                                    icon="fire"
                                />
                            </h1>
                            <h4 className="pb-4">
                                We build small and medium size mobile and web
                                applications. From planning, design,
                                development, deployment, and maintence, we keep
                                our code base scalable, secure, and readable.
                            </h4>
                            <button className="btn btn-primary">
                                all services
                            </button>
                        </div>
                        <div className="col-md-6">
                            <ListGroup isFlush>
                                {servicesItems.map((item) => (
                                    <div className="border-bottom py-3">
                                        <button
                                            type="button"
                                            className="list-group-item d-flex justify-content-between align-items-center w-100"
                                            style={{ border: "unset" }}
                                            aria-current="true"
                                            disabled={item.isDisabled}
                                            onClick={() => {
                                                history.push(item.link);
                                            }}
                                        >
                                            {item.name}
                                            <Icon
                                                icon="long-arrow-alt-right"
                                                isSolid
                                                color={
                                                    item.isDisabled
                                                        ? "lightgrey"
                                                        : "#000000"
                                                }
                                                size="20"
                                            />
                                        </button>
                                    </div>
                                ))}
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
