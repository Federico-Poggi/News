import {Button, Container, FormControl, InputGroup, Navbar, NavItem, Row} from "react-bootstrap";
import {useState} from "react";
import {isBooleanObject} from "util/types";


const NavbarMain=()=>{
    const [clicked, setClicked ] = useState<boolean>(false)
    return(
        <Container fluid>
            <Row>
                <Navbar className={'d-flex bg-dark '}>
                <h2 className={ 'h2 fw-bold  text-light py-3 px-4'}>NewsWord</h2>
                    <ul className={'d-flex'}>
                    <NavItem className={'px-3 text-light'}>Home</NavItem>
                    <NavItem className={'px-3 text-light'}>Home</NavItem>
                    <NavItem className={'px-3 text-light'}>Home</NavItem>
                    </ul>
                <InputGroup className={'w-25 ms-auto px-3'}>
                    <FormControl type={'search'} placeholder={'Search News '} className={'bg-transparent border-black text-light'} />
                    <Button className={'btn nav-pills bg-transparent border-black'} onClick={()=>setClicked(true)}>Search</Button>
                </InputGroup>
                </Navbar>
            </Row>
        </Container>
    )
}
export default NavbarMain