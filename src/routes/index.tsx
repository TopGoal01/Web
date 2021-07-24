import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login'
import Main from '../pages/main'
import Room from '../pages/room'

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/room" component={Room} />
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root