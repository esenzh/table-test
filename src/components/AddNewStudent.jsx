import React, { Component } from 'react';
import {
    Modal,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
    Form
} from 'reactstrap';
import { connect } from "react-redux";
import { AddNewStudentAC } from '../redux/action';


class AddNewStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            phone: '',
            email: '',
        }
    }

    handleOnChange = event => {
        const value = event.target.value;
        this.setState({ [event.target.name]: value })
    }

    handleSubmit = () => {
        this.props.addNewStudent({
            name: this.state.name,
            age: this.state.age,
            phone: this.state.phone,
            email: this.state.email
        });
        this.props.toggle();
    }

    render() {
        return (
            <Modal isOpen={this.props.showModal} toggle={this.props.toggle}>
                <Form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.props.toggle}>Добавить нового студента</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name">Имя</Label>
                            <Input type="text" name="name" id="name" onChange={this.handleOnChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="age">Возраст</Label>
                            <Input type="number" name="age" id="age" onChange={this.handleOnChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Тел. номер</Label>
                            <Input type="text" name="phone" id="phone" onChange={this.handleOnChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" onChange={this.handleOnChange} required />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type='submit' color="primary">Добавить</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Отменить</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewStudent: student => {
            dispatch(AddNewStudentAC(student))
        }
    };
}

export default connect(null, mapDispatchToProps)(AddNewStudent);