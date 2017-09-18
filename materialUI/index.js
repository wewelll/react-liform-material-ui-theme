import { DefaultTheme } from 'liform-react'
import ArrayWidget from './ArrayWidget'
import HiddenWidget from './HiddenWidget'
import StringWidget from './StringWidget'
import TextareaWidget from './TextareaWidget'
import ChoiceWidget from './ChoiceWidget'

export default {
    ...DefaultTheme,
    array: ArrayWidget,
    hidden: HiddenWidget,
    textarea: TextareaWidget,
    string: StringWidget,
    choice: ChoiceWidget,
}
