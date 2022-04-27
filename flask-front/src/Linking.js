import {Container, Nav, Navbar} from 'react-bootstrap'
export const Links=()=>{
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        Flask & React
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="corporate-crud" />
                    <Navbar.Collapse id="corporate-crud">
                    <Nav className="ms-auto">
                        <Nav.Link active href="/">
                            <span className='text-danger'>Home</span>
                        </Nav.Link>
                        <Nav.Link href="/new">
                            <span className='text-danger'>Recruite</span>
                        </Nav.Link>
                        <Nav.Link href="/short">
                            <span className='text-danger'>Shortlist</span>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}