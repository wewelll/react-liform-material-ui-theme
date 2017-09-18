import React from 'react'
import PropTypes from 'prop-types'
import CheckboxGroupWidget from './CheckboxGroupWidget'
import { DefaultTheme } from 'liform-react'

const ArrayWidget = props =>  {
    // Arrays are tricky because they can be multiselects or collections
    if (props.schema.items.hasOwnProperty('enum') && props.schema.hasOwnProperty('uniqueItems') && props.schema.uniqueItems) {
        return CheckboxGroupWidget({ ...props, schema: props.schema.items })
    } else {
        return DefaultTheme.array(props)
    }
}

ArrayWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    context: PropTypes.object,
}

export default ArrayWidget
