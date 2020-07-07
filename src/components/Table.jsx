import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';
import AddNewStudent from './AddNewStudent';
import { connect } from "react-redux";
import { fetchListAC } from '../redux/action';
import { Button } from 'reactstrap';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentDidMount = () => {
        this.props.fetchStudents()
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <div>
                <br />
                <h1 id='title'>Таблица студентов</h1>
                <br />
                <div id='addStudet'>
                    <p>Нажмите на кнопку чтобы добавить нового студента</p>
                    <Button color='primary' onClick={this.toggleModal}>Добавить</Button>
                    {this.state.showModal && <AddNewStudent showModal={this.state.showModal} toggle={this.toggleModal} />}
                </div>
                <br />
                <br />
                <table id='students'>
                    <thead>
                        <TableHeader />
                    </thead>
                    <tbody>
                        <TableContent />
                    </tbody>
                </table>
            </div>);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchStudents: () => {
            dispatch(fetchListAC())
        }
    };
}

export default connect(null, mapDispatchToProps)(Table);