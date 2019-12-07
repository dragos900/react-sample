import React, { Fragment } from "react";
interface Iprops {
  keyPress(event: React.KeyboardEvent<HTMLInputElement>): void;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
}
// functional component because this component only needs to render
// the data passed to it.
// it doesn't manage any local state.
const TextArea: React.FC<Iprops> = ({ onChange, keyPress, value }) => {
  return (
    <Fragment>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={keyPress}
      />
    </Fragment>
  );
};

export default TextArea;
