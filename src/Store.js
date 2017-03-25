import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const logger = createLogger();

export default (initialState = {}) => (
    createStore(
        reducers,
        initialState,
        applyMiddleware(logger, ReduxThunk)
    )
);
