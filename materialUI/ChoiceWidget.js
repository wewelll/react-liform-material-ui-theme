import React from 'react'
import PropTypes from 'prop-types'
import { SelectField } from 'redux-form-material-ui';
import { MenuItem } from 'material-ui';
import { Field } from 'redux-form'
import { zipObject, map, isEmpty } from 'lodash'

const ChoiceWidget = props => {
    const options = props.enumValues || props.schema.enum;
    const optionNames = props.enumTitles || props.schema.enum_titles || props.schema.liform.enum_titles || options;

    return (
        <Field
            component={SelectField}
            name={props.fieldName}
            id={'field-'+props.fieldName}

            floatingLabelText={props.label}
            hintText={props.schema.default}
            fullWidth={true}
            disabled={isEmpty(options)}

            {...props.styleProps}
        >
            {map(options, (value, key) => (
                <MenuItem key={value} value={value} primaryText={Translator.trans(optionNames[key])} />
            ))}
        </Field>
    )
}

ChoiceWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
}

export default ChoiceWidget
