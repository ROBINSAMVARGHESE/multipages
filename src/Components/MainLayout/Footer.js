import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

function Footerdesign() {
  return (
   <>
<footer className="bg-dark text-light text-center py-3">
    <Container>
      <Row>
        <Col>
          <p> Copyright &copy; 2024;MyApp</p>
        </Col>
      </Row>
    </Container>
  </footer>
   </>
  )
}

export default Footerdesign