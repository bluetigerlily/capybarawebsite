import React, { useState } from 'react';
import './home.scss';
import MyBackgroundImage from '../../assets/capybarabathtubsunglasses.png';
import PartyTimeImage from '../../assets/partyreadycapybara.png';
import DiscoBall from '../../assets/disco-ball.png';

const Home = () => {

    const [isPartyTime, setIsPartyTime] = useState(true);
    const handleClickParty = (e) => {
        e.preventDefault();
        console.log(`I'm pressed`);
        setIsPartyTime(!isPartyTime);
    }
    return (
    <>
       <div className='homeoutercontainer'> 
     {isPartyTime ?   (<div className='capybaracontainer' 
            style= {{
             backgroundImage: `url(${MyBackgroundImage})`  
        }}>
        </div>) :  (<div className='capybaracontainer' 
            style= {{
             backgroundImage: `url(${PartyTimeImage})`  
        }}>
        </div>)}
        <div className='okayIpullup'></div>
       
        {isPartyTime ? (<div className='hometitle'>
                <h1>Capy<span>bar</span>a</h1>
                <h2>After Party</h2>

                <button 
                        className="partybutton"
                        type="button"
                        onClick={handleClickParty}
                        >
                    {isPartyTime ? `Party Time` : `After Party`}
                </button>
            </div>) : (<div className='hometitle' style= {{
             backgroundImage: `url(${DiscoBall})`,
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover',
             animation: 'hue infinite alternate linear 1s',
        }}>
                <h1>Capybara</h1>
                <h2>After Party</h2>

                <button 
                        className="partybutton"
                        type="button"
                        onClick={handleClickParty}
                        >
                    {isPartyTime ? `Party Time` : `After Party`}
                </button>
            </div>) }
           
       </div> 
       </>
    );
}

export default Home;