import React, { Component } from 'react';
import RecordItem from './RecordItem'
import PropTypes from 'prop-types'

class List extends Component {
    render() {
        return this.props.wantList.map(record => (
            <RecordItem key={record.id}
                record={record}
                markComplete={this.props.markComplete}
                deleteRecord={this.props.deleteRecord}
                addRecord={this.props.addRecord} />
        ))
    }
}

List.propTypes = {
    wantList: PropTypes.array.isRequired
}


export default List;
