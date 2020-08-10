import React from 'react';
import Container from 'react-bootstrap/Container';

class Footer extends React.Component {
    
    render() {
        return (

            <Container>
                <p className="float-right"><a className="btn btn-primary" style={btnCircle} href="/#">Subir</a></p>
                <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href="/#">Política de Privacidad</a> &middot; <a href="/#">Términos</a></p>
            </Container>
        )
    }
}

const btnCircle = {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    padding: '6px 0px',
    borderRadius: '15px',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '1.42857'
}

export default Footer;