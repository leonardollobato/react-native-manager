/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import createStore from './Store';
import Router from './Router';

const store = createStore();

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAQIrsbRh7DHjn-mA63dd0tfRJSu1hArCI',
            authDomain: 'manager-3392a.firebaseapp.com',
            databaseURL: 'https://manager-3392a.firebaseio.com',
            storageBucket: 'manager-3392a.appspot.com',
            messagingSenderId: '208679463012'
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
