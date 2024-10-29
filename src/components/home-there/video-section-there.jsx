import React, { useState } from 'react';
import galleryImage from '@assets/img/gallery/16.png'
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import v1 from '@assets/img/brand/v1.jpg'
const VideoSectionThere = () => {
   const [isOpen, setIsOpen] = useState(false)
   const openVideoModal = () => setIsOpen(!isOpen)

   return (
      <>
         <div className="video-area fm-video-style">
            <div className="fm-video-wrapper fm-video-wrapper1 wow fadeInUp" data-wow-delay="0.3s" >
               <Image src={v1} style={{ width: '100%', height: '100%' }} alt="image-not-found" />
               <button className="play-btn video-area-btn p-center popup-video" style={{zIndex:"2"}} onClick={() => { openVideoModal() }}><i
                  className="fa-sharp fa-solid fa-play"></i></button>
                  <span className='video-text'> Where strategy <br/>and <span  style={{color:"#FFCD03"}}>storytelling</span> hang out. </span>
            </div>
         </div>
         <ModalVideo autoPlay isOpen={isOpen} videoId='8luaY8tEElc' onClose={() => setIsOpen(false)} />
      </>
   );
};

export default VideoSectionThere;