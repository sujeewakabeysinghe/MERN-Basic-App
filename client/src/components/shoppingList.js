import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'


class shoppingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }


    /*addItem=()=>{
        const name=prompt('Enter Item :')
        if(name){
            this.setState({
                items : [...this.state.items, {id : uuid(), name : name}]
            })
        }
    }*/


    deleteItem = (id) =>{
        this.props.deleteItem(id)
    }

    render() {

        const {items} = this.props.item

        return (
            <div>
                <Container>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map(({_id,name}) => (
                                <CSSTransition key={_id} timeout={500} classNames='fade'>
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={()=> this.deleteItem(_id)}>
                                            &times;
                                        </Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
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

const mapDispatchToProps = {
    getItems,
    deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(shoppingList);
