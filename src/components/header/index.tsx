import React from 'react';
import './style.css';

// utilize typescript interfaces for props validation.
interface Iprops {
  title: string;
}
// functional component because this component only needs to render
// the data passed to it.
// it doesn't manage any local state.
const Header: React.FC<Iprops> = ({title}) => {
  return (
    <div className="text">
      <p>{title}</p>
    </div>
  );
}

export default Header;
