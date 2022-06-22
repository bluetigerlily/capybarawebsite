import React, { useState } from 'react';
import './home.scss';
import MyBackgroundImage from '../../assets/capybarabathtubsunglasses.png';
import PartyTimeImage from '../../assets/partyreadycapybara.png';
const Home = () => {

    const [partyTime, setPartyTime] = useState(true);
    const handleClick = (e) => {
        e.preventDefault();
        setPartyTime(!partyTime);
    }
    return (
    <>
       <div className='homeoutercontainer'> 
     {partyTime ?   (<div className='capybaracontainer' 
            style= {{
             backgroundImage: `url(${MyBackgroundImage})`  
        }}>
        </div>) :  (<div className='capybaracontainer' 
            style= {{
             backgroundImage: `url(${PartyTimeImage})`  
        }}>
        </div>)}
        <div className='okayIpullup'></div>
       
            <div className='hometitle'>
                <h1>Capybara</h1>
                <h2>After Party</h2>
                <button
                    className='partybutton' 
                    onClick={handleClick}
                    >
                        
                {partyTime ? 'Party Time?' : `Party's Over`}
                </button> 
            </div>
           
       </div> 
       </>
    );
}

export default Home;