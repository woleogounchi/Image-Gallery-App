import React from 'react';
// The component rendering each photo as an unordered list element 
const Photo = props => (
  <li>
    <img src={props.url} alt=""/>
  </li>
);

export default Photo;