import React, { Component } from 'react';
import { connect } from "react-redux";
import { SortTableAC } from '../redux/action';

class TableHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <tr>
                <th>ID</th>
                <th className='tableTitles' onClick={() => this.props.handleSort('name')}>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th className='tableTitles' onClick={() => this.props.handleSort('email')}>Email</th>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSort: title => {
            dispatch(SortTableAC(title))
        }
    };
}

export default connect(null, mapDispatchToProps)(TableHeader);