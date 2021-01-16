import OpinionatedRedux from 'opinionated-redux';
import epics from '~/epics';
import reducers from '~/reducers';

const initialState: State = {};

export interface State {}

export interface Dependencies {}

export function createStore(dependencies: Dependencies = {}) {
  return new OpinionatedRedux<State>(reducers, initialState, epics, {
    devTools: true,
    reduxObservable: {
      dependencies
    }
  }).store;
}

export default initialState;
