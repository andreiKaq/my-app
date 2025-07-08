import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge';


const productPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    Image
                </Col>
                <Col>
                    <h2>Title</h2>
                    <p>Description</p>
                    <div>
                        <Badge bg="success">100.00</Badge>
                    </div>
                    <div>
                        <Badge bg="secondary">4.9/120</Badge>
                    </div>

                </Col>
            </Row>
        </Container>
    )
    
}

export default productPage