import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/row';
import Button from 'react-bootstrap/Button';
import img1 from "../images/home.jpg";


function Features(){
    return(
        <Container>
            <Row>
                <Col>
                    <h className="f-Content">Search millions <br></br>of apartment <br></br>for rent</h>
                    <p className="text-muted">loooking for homes or moving to another <br></br>apartment easily</p>
                    <div className="mt-5"></div>
                    <Button variant="primary" className='signup'>Search now</Button>{' '}

                </Col>

                <Col>
                    <img src={img1} alt="" className="myimage"></img>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Features;