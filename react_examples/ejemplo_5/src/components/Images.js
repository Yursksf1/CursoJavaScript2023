import React, { useState, useEffect } from 'react';
import './Images.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function Images() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('https://api.pexels.com/v1/search?query=cat&per_page=40&page=1', {
        headers: {
          Authorization: 'abkAfxuRwGYFhQGyDHMm3jDEAxqIhKNAOSW9gX2nPzMXqndUUxAZ5PwY'
        }
      });
      const data = await response.json();
      setPhotos(data.photos);
    };
    fetchPhotos();
  }, []);

  return (
    <div className='images'>
      {photos.map((photo) => (
        <img className="image" key={photo.id} src={photo.src.medium} alt={photo.photographer} />
      ))}
    </div>
  );
}

export default Images;