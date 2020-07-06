import React, { Component } from 'react';
import { connect } from "react-redux";
import { RemoveStudentRequestAC } from '../redux/action';

class TableContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            this.props.studentList.map(student => {
                return (
                    <tr key={student[0].value}>
                        <td>{student[0].value}</td>
                        <td>{student[1].value}</td>
                        <td>{student[2].value}</td>
                        <td>{student[3].value}</td>
                        <td>{student[4].value}</td>
                        <td>
                            <button onClick={() => this.props.removeStudent(student[0].value)}>Удалить</button>
                        </td>
                        <td>
                            <button>Редактировать</button>
                        </td>
                    </tr>
                )
            })
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeStudent: id => {
            dispatch(RemoveStudentRequestAC(id));
        }
    };
}

function mapStateToProps(store) {
    return {
        studentList: store.list,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContent);