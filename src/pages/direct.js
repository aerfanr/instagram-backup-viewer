import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ChatEntry from './direct/chat-entry'

const { dialog } = window.require('electron').remote
const fs = window.require('fs')

function Direct () {
    const [filePath, setFilePath] = useState(null)
    const [jsonData, setJsonData] = useState([])

    useEffect(() => {
        setFilePath(dialog.showOpenDialogSync({
            filters: [
                { name: 'JSON File', extensions: ['json'] }
            ]
        }))
    }, [])

    useEffect(() => {
        if (filePath) {
            const f = fs.readFileSync(filePath[0])
            setJsonData(JSON.parse(f))
        }
    }, [filePath])

    console.log(jsonData)

    return ([
        <h1 key='title'> Direct </h1>,
        <div key='back' className='back'>
            <Link to='/'> back </Link>
        </div>,
        <div key='chats-list' className='chats-list'>
            {jsonData.map((value, index) => {
                return (
                    <ChatEntry key={index} data={value} />
                )
            })}
        </div>
    ])
}

export default Direct
