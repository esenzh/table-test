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
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Email</th>
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