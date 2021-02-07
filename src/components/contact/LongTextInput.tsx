interface Props {
  name: string;
}

const LongTextInput = (props: Props) => (
  <textarea
    className="block rounded border shadow w-full p-0.5"
    name={props.name}
  />
);

export default LongTextInput;
