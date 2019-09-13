import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => { 
  
  const results = props.data;
  let photos;
  if (results.length) {
    photos = results.map(photo => <Photo url={photo.images.fixed_height.url} key={photo.id} />);    
  } else {
    gifs = <NotFound />
  }

  return(
    <ul className="photo-container">
      {photos}
    </ul> 
  );
}

export default PhotoContainer;