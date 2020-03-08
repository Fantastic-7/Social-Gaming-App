import React from 'react';
import MainPage from './components/mainPage'
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './assets/scss/style.scss'
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/playgame' exact>
        <MainPage />
        </Route>
      </Switch>
    </Router>
    </Provider>

  );
}

export default App;
