import React from "react";
import "./TeamMemberCard.scss";
import PropTypes from "prop-types";

const TeamMemberCard = (props) => {
    return (
        <div className="dkTeamMemberCard card">
            <img
                src={props.profileImg}
                className="card-img-top img-fit"
                alt={`profile-${props.name}`}
            />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle">{props.position}</h6>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
};

TeamMemberCard.propTypes = {
    profileImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default TeamMemberCard;
