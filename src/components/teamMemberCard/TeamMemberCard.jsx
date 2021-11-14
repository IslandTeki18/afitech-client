import React from "react";
import "./TeamMemberCard.scss";
import PropTypes from "prop-types";
import Icon from "../icon/Icon";

const TeamMemberCard = (props) => {
    // TODO: Find way to store this information and bring into component
    // TODO: Make more robust and dynamic
    let socialMediaLinks = [
        {
            link: props.github,
            icon: "github",
            name: "Github",
            iconType: "fab",
        },
        {
            link: props.linkedIn,
            icon: "linkedin",
            name: "LinkedIn",
            iconType: "fab",
        },
        {
            link: props.other,
            icon: "link",
            name: "Other",
            iconType: "fas",
        },
    ];

    function renderSocialMediaLinks() {
        return (
            <>
                {socialMediaLinks.map((item) => (
                    <div
                        className="col-md-4 d-flex justify-content-center flex-column text-center"
                        key={item.name}
                    >
                        <a
                            href={item.link}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <Icon
                                iconStyle={item.iconType}
                                icon={item.icon}
                                size="40"
                                color="#3d3d3d"
                            />
                        </a>
                        <p>{item.name}</p>
                    </div>
                ))}
            </>
        );
    }

    return (
        <div className="dkTeamMemberCard card">
            <img
                src={props.profileImg}
                className="card-img-top img-fit"
                alt={`profile-${props.name}`}
            />
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <h4 className="card-subtitle">{props.position}</h4>
                <div className="row pt-4">{renderSocialMediaLinks()}</div>
            </div>
        </div>
    );
};

TeamMemberCard.propTypes = {
    profileImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

export default TeamMemberCard;
