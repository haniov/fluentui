import { defaultCalendarStrings } from '../Calendar/defaults';
import type { DatePickerStrings } from './DatePicker.types';

// TODO: Once we have error handling hook, this needs to be either renamed or removed.
export const defaultDatePickerStrings: DatePickerStrings = {
  ...defaultCalendarStrings,
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
  isRequiredErrorMessage: 'Field is required',
  invalidInputErrorMessage: 'Invalid date format',
  isResetStatusMessage: 'Invalid entry "{0}", date reset to "{1}"',
};
