import React from 'react'
import PropTypes from 'prop-types'

const Label = props => {
    return (
        <label htmlFor={props.htmlfor} className={props.className} id={props.id}>
            {props.children}
        </label>
    )
}

Label.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    htmlFor: PropTypes.string
}

export default Label
