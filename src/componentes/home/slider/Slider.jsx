import React from 'react';

import Carousel from 'react-bootstrap/Carousel'

class Slider extends React.Component {
    render() {

        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    style={{height: '32rem'}}
                    className="w-100"
                    src = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                    alt = "First slide"
                    />
                    <Carousel.Caption className="text-left">
                        <h1>Example headline.</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a class="btn btn-lg btn-primary" href="/#" role="button">Sign up today</a></p>                   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height: '32rem'}}
                    className="w-100"
                    src = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                    alt = "Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Another example headline.</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a class="btn btn-lg btn-primary" href="/#" role="button">Learn more</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="w-100"
                    style={{height: '32rem'}}
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                    alt = "Third slide"
                    />

                    <Carousel.Caption className="text-right">
                        <h1>Another example headline.</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a class="btn btn-lg btn-primary" href="/#" role="button">Learn more</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>    
        )
    }
}

export default Slider;