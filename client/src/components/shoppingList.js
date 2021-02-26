import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidMy } from 'uuid'
import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'
import PropTypes from 'prop-types'

class shoppingList extends Component {

    componentDidMount(){
        this.props.getItems()
    }

    addItem=()=>{
        const name=prompt('Enter Item :')
        if(name){
            this.setState({
                items : [...this.state.items, {id : uuidMy(), name : name}]
            })
        }
    }

    render() {
        const {items} = this.props.item
        return (
            <div>
                <Container>
                    <Button
                        color='dark'
                        onClick={this.addItem}
                    >Add Items</Button>
                </Container>
            </div>
        );
    }
}

shoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item : state.item
})

export default connect(mapStateToProps, {getItems})(shoppingList);
