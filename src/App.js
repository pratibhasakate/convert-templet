import React from 'react';
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import DiscoverSection from './Discover/DiscoverSection';
import CardSection  from './CardSection/CardSection';
import SocialMidiaSection from './SocialMidia/SocialMidiaSection';




const App = () =>{
    return(
    <div>
        <Navbar />
        <HeroSection />
        <DiscoverSection />
        <CardSection />
        <SocialMidiaSection />
        
    </div>
    );
}
export default App;