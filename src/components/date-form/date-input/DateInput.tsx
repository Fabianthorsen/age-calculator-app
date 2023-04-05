interface DateInputProps {
  label: string;
}

function DateInput(props: DateInputProps) {
  return (
    <li class="flex flex-col p-2">
      <label class="block font-bold text-xs" html-for={props.label}>
        {props.label.toLocaleUpperCase()}
      </label>
      <input
        class="p-2 mt-1 font-bold rounded-md border-2 border-slate-300 hover:outline-purple-500"
        type="number"
        id={props.label}
      />
    </li>
  );
}

export default DateInput;
