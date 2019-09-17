import {withRouter} from 'react-router-dom';

import React from 'react';
import Photo from './Photo';
import NoPhoto from './NoPhoto';

const PhotoContainer = props => { 
  
  const results = props.photos;
  let photos;
  if (results.length) {
    photos = results.map(photo => 
                          <Photo 
                            url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                            key={photo.id} 
                            />);    
  } else {
    photos = <NoPhoto />
  }

  const pageTitle = props.location.pathname.slice(8);
  
  return(
    <div className="photo-container">
      <h2>{pageTitle}</h2>
      <ul>
        {photos}
      </ul> 
    </div>
  );
}

export default withRouter(PhotoContainer);