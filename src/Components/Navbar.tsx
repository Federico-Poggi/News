import {Container, FormControl, InputGroup, Navbar, NavItem, Row} from "react-bootstrap";


const NavbarMain=()=>{

    return(
        <Container fluid>
            <Row>
                <Navbar className={'d-flex bg-dark'}>
                <h2 className={ 'h2 fw-bold  text-light py-3'}>NewsWord</h2>
                    <ul className={'d-flex align-items-center'}>
                    <NavItem className={'px-3 text-light'}>Home</NavItem>
                    <NavItem className={'px-3 text-light'}>Home</NavItem>
                    <NavItem className={'px-3 text-light'}>Home</NavItem>
                    </ul>
                <InputGroup className={'w-25 ms-auto px-3'}>
                    <FormControl type={'search'} placeholder={'Search News '} />
                </InputGroup>
                </Navbar>
            </Row>
        </Container>
    )
}
export default NavbarMain