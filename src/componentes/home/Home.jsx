import React from 'react';

import Menu from '../menu/Menu';
import Slider from '../home/slider/Slider';
import Servicios from '../home/servicios/Servicios';
import Footer from '../footer/Footer';

class Home extends React.Component {
    render() {
        return(
            <>
                <Menu />
                <main role="main" className="flex-shrink-0 mt-5">
 
                    <div>            
                        <Slider />
                        <Servicios />
                        <hr className="featurette-divider" />        
                    </div>            
                </main>            
                <Footer />
            </>
        )
    }
}

export default Home;

