import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const StringWidget = props => (
    <Field
        component={TextField}
        label={props.label}
        name={props.fieldName}
        id={'field-'+props.fieldName}
        normalize={props.normalizer}

        floatingLabelText={props.label}
        hintText={props.schema.default}
        multiLine={false}
        fullWidth={true}
        autoComplete="off"

        {...props.styleProps}
    />
)

StringWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    normalizer: PropTypes.func,
}

export default StringWidget
