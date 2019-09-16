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

  return(
    <ul className="photo-container">
      {photos}
    </ul> 
  );
}

export default PhotoContainer;