import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Icon from "../../components/icon/Icon";

const Footer = () => {
    const serviceNavItems = {
        header: "service",
        items: [
            { name: "All Services", link: "/all-services" },
            { name: "One Page Websites", link: "/services/one-page" },
            { name: "Full Stack Websites", link: "/services/full-stack" },
            { name: "Mobile Apps", link: "/services/mobile-app" },
        ],
    };
    const projectNavItems = {
        header: "project",
        items: [
            { name: "All Projects", link: "/projects" },
            { name: "One Page Websites", link: "/projects" },
            { name: "Full Stack Websites", link: "/projects" },
            { name: "Mobile Apps", link: "/projects" },
        ],
    };
    const blogNavItems = {
        header: "blog",
        items: [
            { name: "All Posts", link: "/blogs" },
            { name: "ReactJS", link: "/blogs" },
            { name: "NodeJS", link: "/blogs" },
            { name: "Redux", link: "/blogs" },
            { name: "React Native", link: "/blogs" },
        ],
    };
    const socialItems = [
        { name: "instagram", link: "www.google.com" },
        { name: "facebook", link: "www.google.com" },
        { name: "twitter", link: "www.google.com" },
        { name: "github", link: "www.google.com" },
        { name: "youtube", link: "www.google.com" },
    ];

    function renderSocialItems() {
        return socialItems.map((social, idx) => (
            <li className="list-inline-item list-social-item me-3" key={idx}>
                <a
                    href={social.link}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="text-decoration-none"
                >
                    <Icon
                        icon={social.name}
                        iconStyle="fab"
                        size="14"
                        color="#ffffff"
                    />
                </a>
            </li>
        ));
    }

    function renderNavLists(navList) {
        return navList.items.map((item, idx) => (
            <li className="mb-3">
                <Link
                    to={item.link}
                    className="text-reset text-decoration-none"
                >
                    {item.name}
                </Link>
            </li>
        ));
    }

    // TODO: Make Mobile Responsive
    // TODO: Add links to footer
    return (
        <footer className="dkFooter mt-auto bg-dark py-5">
            <div className="container">
                <div className="row text-white">
                    <div className="col-12 col-md-3">
                        <h1>LOGO</h1>
                        <p className="text-muted">Ideas that come to life.</p>
                        <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                            {renderSocialItems()}
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h6 className="fw-bold text-uppercase text-gray-700">
                            {serviceNavItems.header}
                        </h6>
                        <ul className="list-unstyled text-muted mb-6 mb-md-8 md-lg-0">
                            {renderNavLists(serviceNavItems)}
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h6 className="fw-bold text-uppercase text-gray-700">
                            {blogNavItems.header}
                        </h6>
                        <ul className="list-unstyled text-muted mb-6 mb-md-8 md-lg-0">
                            {renderNavLists(blogNavItems)}
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h6 className="fw-bold text-uppercase text-gray-700">
                            {projectNavItems.header}
                        </h6>
                        <ul className="list-unstyled text-muted mb-6 mb-md-8 md-lg-0">
                            {renderNavLists(projectNavItems)}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
