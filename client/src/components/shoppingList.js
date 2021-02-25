import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidMy } from 'uuid'

class shoppingList extends Component {

    state = {
        items : [
            {id : uuidMy(), name : 'Milk'},
            {id : uuidMy(), name : 'Steak'},
            {id : uuidMy(), name : 'Eggs'},
            {id : uuidMy(), name : 'Dhal'}
        ]
    }

    addItem=()=>{
        const name=prompt('Hi!')
        this.setState({
            items : [...this.state.items, {id : uuidMy(), name : name}]
        })
    }

    render() {
        const {items} = this.state
        return (
            <div>
                <Container>
                    <Button
                        color='dark'
                        onClick={this.addItem}
                    >Add Items</Button>
                </Container>
            </div>
        )
    }
}

export default shoppingList
