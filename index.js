import React from 'react'
import { render } from 'react-dom'
import {AppContainer} from './lib/components/app'
import { INITIAL_STATE } from './lib/initialState'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './lib/reducer'

const store = createStore(reducer)
store.dispatch({state: INITIAL_STATE, type: 'setState'})


render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.querySelector('main')
    )