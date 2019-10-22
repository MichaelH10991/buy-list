import React, { Component } from 'react';
import RecordItem from './RecordItem'
import PropTypes from 'prop-types'
import discogsAPIHelper from '../axios/apiHelper'

class List extends Component {
    /**
     * loading in the wantList items and replacing the wantList with results from 
     * /masters api call, this gives us a greater wealth of data such as number 
     * for sale and prices. For some reason, I came across a record who has a master 
     * id of 0 which screws everything up.
     */
    componentDidMount() {
        this.props.wantList.map(item => {
            return item.master_id > 0 ? discogsAPIHelper
                .getMasterInfo(item.master_id)
                .then(res => {
                    const masterAlbum = {
                        title: res.data.title,
                        forSale: res.data.num_for_sale
                    }
                    console.log(masterAlbum)
                    this.setState({ mastersList: [...this.props.mastersList, masterAlbum] })
                })
                .catch(e => {
                    console.log(e)
                }) : console.log(`this is where we'll have to butcher in the id of this record because its master_id is 0 for some reason?? : ${item.id} master ${item.master_id}`)
        })
    }

    render() {
        return this.props.mastersList.map(record => (
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
