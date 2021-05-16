import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import Pagination from './pagination';

const mockStore = configureStore({});
let history;
let store;

describe(`Test Pagination`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it(`Pagination should render correctly`, () => {
    const isLastPage = false;
    const pageNumber = 1;
    const goToNextPage = jest.fn();
    const goToPrevPage = jest.fn();

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <Pagination isLastPage={isLastPage} pageNumber={pageNumber} goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Prev/i)).toBeInTheDocument();
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(`Next`));
    expect(goToNextPage).toHaveBeenCalledTimes(1);
  });
});
