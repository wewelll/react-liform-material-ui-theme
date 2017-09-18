import React from 'react'
import { Checkbox } from 'material-ui'
import { Field } from 'redux-form'
import { map, zipObject, includes } from 'lodash'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const onCheckboxCheck = (event, isChecked, checkboxValue, input) => {
    let newValue = [...input.value];
    if (isChecked) {
        newValue.push(checkboxValue);
    } else {
        newValue.splice(newValue.indexOf(checkboxValue), 1);
    }
    return input.onChange(newValue);
};

const renderSelect = ({ ... field, input }) => {
    const className = classNames([
        'form-group',
        { 'has-error' : field.meta.touched && field.meta.error }
    ])
    const options = field.schema.enum
    const optionNames = field.schema.enum_titles || field.schema.liform.enum_titles || options

    const selectOptions = zipObject(options, optionNames)

    return (
        <div className={className}>
            <label className="control-label" htmlFor={'field-'+field.name}>{field.label}</label>
            {map(selectOptions, (name, value) => (
                <Checkbox
                    key={name}
                    label={Translator.trans(name)}
                    checked={includes(input.value, name)}
                    onCheck={(event, isChecked) => onCheckboxCheck(event, isChecked, name, input)}
                />)
            )}
            {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
            {field.description && <span className="help-block">{field.description}</span>}
        </div>
    )
}

const CheckboxGroupWidget = (props) => (
    <Field
        component={renderSelect}
        label={props.label}
        name={props.fieldName}
        required={props.required}
        id={'field-'+props.fieldName}
        placeholder={props.schema.default}
        description={props.schema.description}
        schema={props.schema}
        multiple={true}
    />
);

CheckboxGroupWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
}

export default CheckboxGroupWidget
