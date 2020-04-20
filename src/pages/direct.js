import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const { dialog } = window.require('electron').remote
const fs = window.require('fs')

function Direct () {
    const [filePath, setFilePath] = useState(null)
    const [jsonData, setJsonData] = useState(null)

    useEffect(() => {
        setFilePath(dialog.showOpenDialogSync({
            filters: [
                { name: 'JSON File', extensions: ['json'] }
            ]
        })[0])
    }, [])

    useEffect(() => {
        if (filePath) {
            const f = fs.readFileSync(filePath)
            setJsonData(JSON.parse(f))
        }
    }, [filePath])

    console.log(jsonData)

    return ([
        <h1 key='title'> Direct </h1>,
        <div key='back' className='back'>
            <Link to='/'> back </Link>
        </div>,
        <p key='data'></p>
    ])
}

export default Direct
