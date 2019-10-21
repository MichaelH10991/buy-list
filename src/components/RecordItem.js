import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class RecordItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '2px #ccc outset',
      textDecoration: this.props.record.completed ? 'line-through' : 'none'
    }
  }

  render() {

    const { id, title, thumb, master_id } = this.props.record

    // Use arrow functions or bind this to method invokation
    return (
      <div style={this.getStyle()} >
        <p>
          {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '} */}
          <img src={thumb} alt={title} /> {' '}
          {/* {id} */}{' '}{title}{' '}{master_id}
          <button onClick={this.props.addRecord.bind(this, this.props.record)} style={addBtnStyle}>√</button> {' '}
          <button onClick={this.props.deleteRecord.bind(this, id)} style={btnStyle}>X</button> {' '}
        </p>
      </div >
    )
  }
}

RecordItem.propTypes = {
  record: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
const addBtnStyle = {
  background: '#32a852',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default RecordItem
