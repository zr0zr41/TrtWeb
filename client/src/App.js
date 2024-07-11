import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/users" component={UserList} />
                    <Route path="/" render={() => <h1>Welcome to Our Site</h1>} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
