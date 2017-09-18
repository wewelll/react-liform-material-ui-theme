import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

const renderHidden = field => (
    <input {...field.input} type="hidden" required={field.required} />
);

const HiddenWidget = props => (
    <Field
        component={renderHidden}
        label={props.label}
        name={props.fieldName}
        required={props.required}
        id={'field-'+props.fieldName}
        schema={props.schema}
        multiple={true}
    />
)

HiddenWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    context: PropTypes.object,
}

export default HiddenWidget
