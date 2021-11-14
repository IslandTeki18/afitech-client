import React, { useState } from "react";
import PropTypes from "prop-types";
import LabelInput from "../labelInput/LabelInput";

const ContactForm = (props) => {
    const [test, setTest] = useState("");
    console.log(test);
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <LabelInput
                    placeholder="First name"
                    type="text"
                    callback={(val) => {
                        setTest(val);
                    }}
                />
            </div>
            <div className="col-md-6">
                <LabelInput placeholder="Last name" type="text" />
            </div>
            <div className="col-md-6">
                <LabelInput placeholder="Phone number" type="phone" />
            </div>
            <div className="col-md-6">
                <LabelInput placeholder="Subject" type="text" />
            </div>
            <div className="col-md-12">
                <LabelInput placeholder="Email Address" type="email" />
            </div>
            <div className="col-md-12">
                <textarea
                    className="form-control"
                    aria-label="textarea"
                    rows={3}
                    placeholder="Leave me a message"
                ></textarea>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                    Submit Now
                </button>
            </div>
        </form>
    );
};

ContactForm.propTypes = {};

export default ContactForm;
