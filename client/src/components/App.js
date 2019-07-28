import React from 'react'
import { Router, Route } from 'react-router-dom'
import Layout from './Layout';
import StreamList from '../views/StreamList';
import CreateStream from '../views/CreateStream';
import ViewStream from '../views/ViewStream';
import history from '../history'
import DeleteStream from '../views/DeleteStream';
import EditStream from '../views/EditStream';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Layout>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/create" exact component={CreateStream} />
                    <Route path="/stream/:id" exact component={ViewStream} />
                    <Route path="/stream/delete/:id" exact component={DeleteStream} />
                    <Route path="/stream/edit/:id" exact component={EditStream} />
                </Layout>
            </Router>
        )
    }
}

export default App