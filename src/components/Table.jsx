import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';
import { connect } from "react-redux";
import { fetchListAC } from '../redux/action';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.fetchStudents()
    }

    render() {
        return (
            <div>
                <h2 id='title'>Table of Students</h2>
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