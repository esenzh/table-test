import React, { Component } from 'react';
import { connect } from "react-redux";
import { RemoveStudentRequestAC, EditRequestAC } from '../redux/action';

class TableContentEach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWritable: false,
            studentID: this.props.student[0].value,
            studentName: this.props.student[1].value,
            studentAge: this.props.student[2].value,
            studentPhone: this.props.student[3].value,
            studentEmail: this.props.student[4].value
        }
    }

    handleEdit = () => {
        this.setState({
            isWritable: !this.state.isWritable
        })
    }

    handleSave = student => {
        this.props.editStudent(student);
        this.setState({
            isWritable: !this.state.isWritable
        })
    }

    handleOnChange = event => {
        const value = event.target.value;
        this.setState({ [event.target.name]: value })
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.student[0].value}
                </td>
                <td>
                    {this.state.isWritable ? <input type="text" name='studentName' value={this.state.studentName} onChange={(e) => this.handleOnChange(e)} /> : this.props.student[1].value}
                </td>
                <td>
                    {this.state.isWritable ? <input type="text" name='studentAge' value={this.state.studentAge} onChange={(e) => this.handleOnChange(e)} /> : this.props.student[2].value}
                </td>
                <td>
                    {this.state.isWritable ? <input type="text" name='studentPhone' value={this.state.studentPhone} onChange={(e) => this.handleOnChange(e)} /> : this.props.student[3].value}
                </td>
                <td>
                    {this.state.isWritable ? <input type="text" name='studentEmail' value={this.state.studentEmail} onChange={(e) => this.handleOnChange(e)} /> : this.props.student[4].value}
                </td>
                <td>
                    <button className='btn btn-danger' onClick={() => this.props.removeStudent(this.props.student[0].value)}>Удалить</button>
                </td>
                <td>
                    {this.state.isWritable ?
                        <button className='btn btn-success' onClick={() => this.handleSave(
                            {
                                id: this.state.studentID,
                                name: this.state.studentName,
                                age: this.state.studentAge,
                                phone: this.state.studentPhone,
                                email: this.state.studentEmail
                            }
                        )}>Сохранить</button>
                        : <button className='btn btn-success' onClick={this.handleEdit}>Редактировать</button>}
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeStudent: id => {
            dispatch(RemoveStudentRequestAC(id));
        },
        editStudent: student => {
            dispatch(EditRequestAC(student))
        }
    };
}


export default connect(null, mapDispatchToProps)(TableContentEach);