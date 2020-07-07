import React, { Component } from 'react';
import { connect } from "react-redux";

class TableHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <tr>
                {this.props.studentList[0] && this.props.studentList[0].map((field, index) => {
                    return <th key={index}>{field.field} </th>
                })}
            </tr>
        )
    }
}

function mapStateToProps(store) {
    return {
        studentList: store.list
    };
}

export default connect(mapStateToProps, null)(TableHeader);