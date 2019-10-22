/**
 * Authorization to make queries to the Discogs api
 */
const headers = {
    Authorization: `Discogs key=${process.env.REACT_APP_DISCOGS_KEY}, secret=${process.env.REACT_APP_DISCOGS_SECRET}`
}
export default headers