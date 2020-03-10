import React, { Component } from 'react';
import 'animate.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Routes from './components/partials/Routes'
import LoadingSystem from './components/partials/LoadingSystem'
import { Provider } from 'react-redux'
import reduxStore from './redux'
import NotificationSystem from './components/partials/NotificationSystem'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactNotification />
        <Provider store={reduxStore}>
          <Routes />
          <NotificationSystem />
          <LoadingSystem />
        </Provider>
      </div>
    );
  }
}

export default App;
