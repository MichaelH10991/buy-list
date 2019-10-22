import axios from 'axios'
import headers from '../authorization'

const apiUrl = "https://api.discogs.com"

const getSearchResults = (query) => {
    return axios({
        method: "get",
        url: `${apiUrl}/database/search?q=${query}`,
        headers: headers
    })
}

const getMasterInfo = (id) => {
    return axios({
        method: "get",
        url: `${apiUrl}/masters/${id}`,
        headers: headers
    })
}

export default { getSearchResults, getMasterInfo }