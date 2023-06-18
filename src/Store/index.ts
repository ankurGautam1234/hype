import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

import { watchSagas } from './sagas';

const saga = createSagaMiddleware();

//redux dev tool
const composeEnhancers =
    (typeof window !== 'undefined' &&
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));
// @ts-ignore
store.runSaga = saga.run;
saga.run(watchSagas);

export type RootState = ReturnType<typeof store.getState>;

export default store;

// function UnloadHandler() {
// 	window.removeEventListener('unload', UnloadHandler, false);
// }

// window.addEventListener('unload', UnloadHandler, false);

// window.addEventListener(
// 	'pageshow',
// 	function (event) {
// 		if (event.persisted) {
// 			window.location.reload();
// 		}
// 	},
// 	false
// );
