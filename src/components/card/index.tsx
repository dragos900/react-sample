import React from "react";
interface Iprops {
  note: string;
}
// functional component because this component only needs to render
// the data passed to it.
// it doesn't manage any local state.
const Card: React.FC<Iprops> = ({ note }) => {
  return (
    <div>
      <p>{note}</p>
    </div>
  );
};

export default Card;
