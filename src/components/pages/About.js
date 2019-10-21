import React from 'react'
import config from '../../../package.json'
const versionNumber = config.version

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p> v{versionNumber} </p>
        </React.Fragment>
    )
}

export default About