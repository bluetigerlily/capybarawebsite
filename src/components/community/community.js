import React, { useEffect, useRef } from "react";
import './community.scss';
import capyvideo from '../../assets/Capybaras pull up.mp4';

const Community = () => {
    
    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []);
    return (

        <div className='communityoutercontainer'>

            <div className='communitycontainter'>
          
                <div className='communitycontainercolor'>
                    <div className="accentline">
                        
                    </div>
                    <div className='communitycontainercolorvideotitle'>
                        <video
                            className="capyvideoclass"
                            style={{ maxWidth: "100%" }}
                            playsInline
                            loop
                            muted
                            controls
                            alt="All the devices"
                            src={capyvideo}
                            ref={videoEl}
                        />
                        <div className="communitycontainercapybara">
                            Capybara Community
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Community;