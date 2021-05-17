import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import Card from './card';


describe(`Test Card`, () => {
  const useSelectorMock = jest.spyOn(reactRedux, `useSelector`);
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it(`Render 'Card' correctly`, () => {
    useSelectorMock.mockReturnValue({
      hasCacthPokemonError: false
    });
    const history = createMemoryHistory();
    const data = {
      "name": `bulbasaur`,
      "id": 1
    };

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <Card pokemonName={data[`name`]} id={data[`id`]} isCaught={false} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });
});
