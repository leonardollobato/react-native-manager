/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
