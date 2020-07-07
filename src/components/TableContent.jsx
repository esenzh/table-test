import React, { Component } from 'react';
import { connect } from "react-redux";
import TableContentEach from './TableContentEach';

class TableContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            this.props.studentList.map((student, index) => <TableContentEach  student={student} key={index}/>)
        );
    }
}

function mapStateToProps(store) {
    return {
        studentList: store.list,
        isLoading: store.isLoading // TODO: implement the loading spinner
    };
}

export default connect(mapStateToProps, null)(TableContent);