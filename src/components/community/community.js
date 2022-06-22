import React, { useEffect, useRef, useState } from "react";
import './community.scss';
import capyvideo from '../../assets/Capybaras pull up.mp4';
import Clicker from "./Clicker";


const Community = () => {
    
    const [isStarted, setIsStarted] = useState(true);
    const videoEl = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        setIsStarted(!isStarted);
    }
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
                        <div className="accentline">
                        </div>
                        <div className="communitycontainercapybara">
                            Capybara Community
                        </div>
                        
                        <button 
                            className="startgamebutton"
                            type="button"
                            onClick={handleClick}
                            >
                            {isStarted ? 'Start' : 'Stop'}
                        </button>
                    </div>


                </div>
                {isStarted ? '' :  <Clicker /> }

            </div>
        </div>
    );
}
export default Community;