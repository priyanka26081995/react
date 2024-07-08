import React, { useState } from 'react';

function ButtonClick() {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Button clicked {count} times</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  }
export default ButtonClick;