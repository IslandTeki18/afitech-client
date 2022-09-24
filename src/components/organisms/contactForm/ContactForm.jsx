import React from "react";
import PropTypes from "prop-types";
import { LabelInput } from "../../molecules";

export const ContactForm = (props) => {
    function callBackData() {
        if (!props.collectData()) return;
        if (!props.formData) return;
        props.collectData(
            props.formData.firstName,
            props.formData.lastName,
            props.formData.phone,
            props.formData.email,
            props.formData.subject,
            props.formData.message
        );
    }

    return (
        <form className="row g-3" onSubmit={callBackData}>
            <div className="col-md-6">
                <LabelInput
                    placeholder="First name"
                    type="text"
                    callback={(val) => {
                        console.log(val);
                        props.formData.firstName(val);
                    }}
                />
            </div>
            <div className="col-md-6">
                <LabelInput
                    placeholder="Last name"
                    type="text"
                    callback={(val) => {
                        console.log(val);
                        props.formData.lastName(val);
                    }}
                />
            </div>
            <div className="col-md-6">
                <LabelInput
                    placeholder="Phone number"
                    type="phone"
                    callback={(val) => {
                        console.log(val);
                        props.formData.phone(val);
                    }}
                />
            </div>
            <div className="col-md-6">
                <LabelInput
                    placeholder="Subject"
                    type="text"
                    callback={(val) => {
                        console.log(val);
                        props.formData.subject(val);
                    }}
                />
            </div>
            <div className="col-md-12">
                <LabelInput
                    placeholder="Email Address"
                    type="email"
                    callback={(val) => {
                        console.log(val);
                        props.formData.email(val);
                    }}
                />
            </div>
            <div className="col-md-12">
                <textarea
                    className="form-control"
                    aria-label="textarea"
                    rows={3}
                    placeholder="Leave me a message"
                    onChange={(e) => {
                        console.log(e.target.value);
                        props.formData.message(e.target.value);
                    }}
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

ContactForm.propTypes = {
    collectData: PropTypes.func,
    formData: PropTypes.object,
};