import React, { Component } from 'react';
import { connect } from "react-redux";
import { RemoveStudentRequestAC, EditRequestAC } from '../redux/action';

class TableContentEach extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isWritable: false,
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

    render() { 
        return (
            <tr>
                <td>
                    {this.props.student[0].value}
                </td>
                <td>{this.props.student[1].value}</td>
                <td>{this.props.student[2].value}</td>
                <td>{this.props.student[3].value}</td>
                <td>{this.props.student[4].value}</td>
                <td>
                    <button onClick={() => this.props.removeStudent(this.props.student[0].value)}>Удалить</button>
                </td>
                <td>
                    {this.state.isWritable ?
                        <button onClick={() => this.handleSave(this.props.student)}>Сохранить</button>
                        : <button onClick={this.handleEdit}>Редактировать</button>}
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