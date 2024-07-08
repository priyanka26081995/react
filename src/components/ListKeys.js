// Rendering Lists in React
import React from 'react';

function ListExample() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
        <div>List Keys</div>
        <ul>
        {numbers.map((number) => (
            <li key={number.toString()}>{number}</li>
        ))}
        </ul>
    </>
  );
}

export default ListExample;
