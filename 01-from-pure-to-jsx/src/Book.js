import React from 'react';

const Book = (props) => {
  // if (!props.name) {
  //   return null;
  // }
  return (
    <div>
      <h2>{props.name ? props.name : 'No Name'}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      <p>{props.children}</p>
    </div>
  )
};

export default Book;