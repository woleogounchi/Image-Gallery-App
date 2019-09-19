import React from 'react';
// Renders a message when the request does not return any results 
const NoPhoto = () => (
  <li className="not-found">
    <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
    <h3>You search did not return any results. Please try again.</h3>
  </li>
);

export default NoPhoto;