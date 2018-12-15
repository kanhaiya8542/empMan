import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import firebase from '@firebase/app';
import firebase from 'firebase'
require('firebase/auth')

import LoginFrom from './components/LoginFrom';
import ReduxThunk from 'redux-thunk'
import Router from './Router'




export default class App extends Component {


    componentWillMount = () => {
        const config = {
            apiKey: "AIzaSyAeCMp-_EVxccf-6bL7U8JxN9ExFvG8cNY",
            authDomain: "empman-44683.firebaseapp.com",
            databaseURL: "https://empman-44683.firebaseio.com",
            projectId: "empman-44683",
            storageBucket: "empman-44683.appspot.com",
            messagingSenderId: "547466773266",
    };
    firebase.initializeApp(config);
}


render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <Router />
            {/* <LoginFrom />  */}
        </Provider>
    )
}
}
//{} - any instaila state if you want to pass 