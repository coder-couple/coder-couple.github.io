interface Props {
  name: string;
}

const TextInput = (props: Props) => (
  <input
    id={props.name}
    className="block rounded border shadow w-full p-0.5"
    type="text"
    name={props.name}
  />
);

export default TextInput;
