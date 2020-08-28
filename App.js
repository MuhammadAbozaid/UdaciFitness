import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import History from './components/History'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/'
import applyMiddleware from './middlewares/'
import { ADD_ENTRY } from './actions'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware)}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }} />
          <History />
        </View>
      </Provider>
    )
  }
}
export default App
