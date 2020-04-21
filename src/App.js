import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './pages/landing'
import Direct from './pages/direct'
import ChatDisplay from './pages/chat-display'

function App (props) {
    return (
        <Router>
            <Switch>
                <Route path='/direct'>
                    <Direct />
                </Route>
                <Route path='/chat-display'>
                    <ChatDisplay />
                </Route>
                <Route path='/'>
                    <Landing />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
