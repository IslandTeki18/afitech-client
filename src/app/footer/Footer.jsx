import React from "react";
import ListGroup from "../../components/listGroup/ListGroup";
import ListGroupItem from "../../components/listGroupItem/ListGroupItem";

const Footer = () => {
    const categories = ["Home", "Projects", "Services", "About", "Contact"];
    return (
        <footer className="fixed-bottom bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-center">
                        <h5 className="text-white">
                            AFI Tech provides quality small to medium web and
                            mobile applications
                        </h5>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Footer Button Group"
                        >
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                Contact Us
                            </button>
                            <button type="button" className="btn btn-primary">
                                See our Services
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <ListGroup isFlush>
                            <ListGroupItem
                                isBold
                                bgColor="transparent"
                                color="#fff"
                            >
                                Categories
                            </ListGroupItem>
                            {categories.map((item) => (
                                <ListGroupItem
                                    bgColor="transparent"
                                    color="#fff"
                                    isBorder={false}
                                >
                                    {item}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                    <div className="col-md-3">
                        <ListGroup isFlush>
                            <ListGroupItem
                                isBold
                                bgColor="transparent"
                                color="#fff"
                            >
                                Information
                            </ListGroupItem>
                            {categories.map((item) => (
                                <ListGroupItem
                                    bgColor="transparent"
                                    color="#fff"
                                    isBorder={false}
                                >
                                    {item}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                    <div className="col-md-3">
                        <ListGroup isFlush>
                            <ListGroupItem
                                isBold
                                bgColor="transparent"
                                color="#fff"
                            >
                                Contact Us
                            </ListGroupItem>
                            {categories.map((item) => (
                                <ListGroupItem
                                    bgColor="transparent"
                                    color="#fff"
                                    isBorder={false}
                                >
                                    {item}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
