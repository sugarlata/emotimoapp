// React Native Modules
import React, {Component} from 'react';
import {AppRegistry, View } from 'react-native';

// My Modules
import { ScreenBase } from './app/screen-base';

// Redux Modules
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import reducers from './app/reducers';

// Other Modules
import './polyfills';


const store = createStore(reducers);


export default class EmotimoApp extends Component{

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <Provider store={store}>
        <View style={{width: '100%', height: '100%'}}>
            <ScreenBase store={store} />
        </View>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('TreasureApp', () => TreasureApp) 