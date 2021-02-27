import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import {v4 as uuid} from 'uuid'

class itemModel extends Component {

    state = {
        modal : false,
        name : ''
    }

    toggle=()=>{
        this.setState({
            modal:!this.state.modal
        })
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = () =>{
        const newItem={
            id: uuid(),
            name: this.state.name}
        this.props.addItem(newItem)
        this.toggle()
    }

    render() {
        return (
            <div>
                <Container>
                    <Button color='dark' style={{marginBottom:'1rem'}} onClick={this.toggle}>Add Items</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="item">Item</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="item"
                                        placeholder="Add shopping item"
                                        onChange={this.onChange}/>
                                    <Button color="dark" style={{ marginTop: '2rem' }} block onClick={this.onSubmit}>Add Item</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item : state.item
})

const mapDispatchToProps = {
    addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(itemModel)
