import React from 'react'
import { Link } from 'react-router-dom'

import pjson from '../../package.json'

function Landing () {
    return ([
        <h1 key='title'>Instagram Backup viewer <code> {pjson.version} </code></h1>,
        <Link key='direct' to="/direct" className='menu-option'>View direct history</Link>,
        <Link key='posts' to="/posts" className='menu-option'>View posts history <code>(soon)</code></Link>
    ])
}

export default Landing
