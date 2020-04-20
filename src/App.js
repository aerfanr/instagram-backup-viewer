import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './pages/landing'
import Direct from './pages/direct'

function App (props) {
    return (
        <Router>
            <Switch>
                <Route path='/direct'>
                    <Direct />
                </Route>
                <Route path='/'>
                    <Landing />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
