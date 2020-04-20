import React from 'react'
import { Link } from 'react-router-dom'

function Landing () {
    return ([
        <h1 key='title'>Instagram Backup viewer</h1>,
        <Link key='direct' to="/direct">View direct history</Link>
    ])
}

export default Landing
