import { For } from "solid-js";
import DateInput from "./date-input/DateInput";

interface DateFormProps {
  // add props here
}

function DateForm(props: DateFormProps) {
  return (
    <ul class="grid grid-cols-3">
      <DateInput label="day" />
      <DateInput label="month" />
      <DateInput label="year" />
    </ul>
  );
}

export default DateForm;
