import React, { useRef, useEffect } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { useParams } from 'react-router-dom';
import { useGetEstateByIdQuery } from '../store/slices/estatesApiSlice';
import Loader from '../components/Loader';


const VirtualTourScreen = () => {
  const viewerRef = useRef(null);
  const { id: imgId } = useParams();

  const { data: estate, isLoading, error } = useGetEstateByIdQuery(imgId);
  
  useEffect(() => {    
    console.log(estate);
    if(estate !== undefined){
    const viewer = new Viewer({
      container: viewerRef.current,
      panorama: estate.image, // Replace with your image path
    });

    return () => {
      viewer.destroy();
    };
  }
  }, [isLoading, estate]);

  return (
    <>
    { isLoading ?( <Loader />) : ( 
    <div ref={viewerRef} className='mt-5' style={{ width: '100%', height: '400px' }} />
    )}
    
    </>
  );
}

export default VirtualTourScreen