import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const TextareaWidget = props => (
    <Field
        component={TextField}
        label={props.label}
        name={props.fieldName}
        id={'field-'+props.fieldName}
        normalize={props.normalizer}

        floatingLabelFixed={true}
        floatingLabelText={props.label}
        hintText={props.schema.default}
        multiLine={true}
        fullWidth={true}
        rows={1}
        rowsMax={3}
        autoComplete="off"

        {...props.styleProps}
    />
)

TextareaWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    required: PropTypes.bool,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    normalizer: PropTypes.func,
}

export default TextareaWidget
