import {dataError} from './data-error';
import {ActionType} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(dataError(undefined, {}))
      .toEqual({hasDataError: false});
  });

  it(`Reducer should update catchError status`, () => {
    const state = {hasDataError: false};
    const setDataError = {
      type: ActionType.SET_DATA_ERROR,
      payload: true
    };

    expect(dataError(state, setDataError))
      .toEqual({hasDataError: true});
  });

});
