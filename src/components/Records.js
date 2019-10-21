import React, { Component } from 'react';
import RecordItem from './RecordItem'
import PropTypes from 'prop-types'

class Records extends Component {
  render() {
    return this.props.records.map(record => (
      <RecordItem key={record.id}
        record={record}
        markComplete={this.props.markComplete}
        deleteRecord={this.props.deleteRecord}
        addRecord={this.props.addRecord} />
    ))
  }
}

Records.propTypes = {
  records: PropTypes.array.isRequired
}


export default Records;
