import React from "react";
import ListGroup from "../../components/listGroup/ListGroup";
import ListGroupItem from "../../components/listGroupItem/ListGroupItem";
import Icon from "../../components/icon/Icon";

const Footer = () => {
    const menuItems = ["Home", "Projects", "Services", "About", "Contact"];
    const socialItems = [
        { name: "Instagram", link: "www.google.com" },
        { name: "Facebook", link: "www.google.com" },
        { name: "Twitter", link: "www.google.com" },
        { name: "Github", link: "www.google.com" },
        { name: "Google+", link: "www.google.com" },
    ];

    // TODO: Make Mobile Responsive
    // TODO: Add links to footer
    return (
        <footer className="mt-auto bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-white text-center border-end">
                        <ListGroup>
                            <ListGroupItem isBold>Menu</ListGroupItem>
                            {menuItems.map((item) => (
                                <ListGroupItem>{item}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                    <div className="col-md-6 text-white text-center">
                        <h3>AFI TECH</h3>
                        <p>
                            We specialize in developing fast and reliant web and
                            mobile applications for your business or for your
                            personal requests. We strive to be fast in all
                            aspects that go into development such as planning,
                            designing, developing, deploying, and maintaining.
                        </p>
                        <h6 className="pt-3">
                            Made with{" "}
                            <Icon isSolid icon="heart" size="15" color="red" />{" "}
                            by Landon McKell
                        </h6>
                    </div>
                    <div className="col-md-3 text-white text-center border-start">
                        <ListGroup>
                            <ListGroupItem isBold>Menu</ListGroupItem>
                            {socialItems.map((item) => (
                                <ListGroupItem>{item.name}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
