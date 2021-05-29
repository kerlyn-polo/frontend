import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Hinata } from './components/hinata';
import { Home } from './components/Home';
import Layout from './components/layout';

function App() {
    return (<BrowserRouter>
        <Switch>
            <Route>
                <Layout>
                    <Route exact path='/hinata' component={Hinata} />
                    <Route exact path='/' component={Home} />
                </Layout>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default App;
