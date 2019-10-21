import React, { Component } from 'react'
import axios from 'axios'
import headers from '../authorization'

export class AddRecord extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault()
        axios({
            method: "get",
            url: `https://api.discogs.com/database/search?q=${this.state.title}`,
            headers: headers
        }).then(res => this.props.showSearchResults(res.data.results)
        ).catch(err => console.log(e))
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder="Search albums e.g. Black Midi Schlagenheim..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: "1" }}
                />
            </form>
        )
    }
}

export default AddRecord
