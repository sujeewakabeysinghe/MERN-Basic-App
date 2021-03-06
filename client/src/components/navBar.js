import React, { Children, Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap';

class navBar extends Component {

    state = {
        isOpen:false
    }

    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">{this.props.name}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/sujeewakabeysinghe" target="_blank">GitHub</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/sujeewakabeysinghe" target="_blank">GitHub</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/sujeewakabeysinghe" target="_blank">GitHub</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/sujeewakabeysinghe" target="_blank">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default navBar
