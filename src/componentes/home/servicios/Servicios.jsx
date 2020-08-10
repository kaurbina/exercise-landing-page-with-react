import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

class Servicios extends React.Component {
    render() {
        return (
            <Container className="mt-3">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
                        <Card.Body>
                        <Card.Title><p className="text-center">Card title</p></Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="primary">Find Out More</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
                        <Card.Body>
                        <Card.Title><p className="text-center">Card title</p></Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button Out More variant="primary">Find Out More</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
                        <Card.Body>
                        <Card.Title><p className="text-center">Card title</p></Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="primary">Find Out More</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
                        <Card.Body>
                        <Card.Title><p className="text-center">Card title</p></Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="primary">Find Out More</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        )
    }
}

export default Servicios;