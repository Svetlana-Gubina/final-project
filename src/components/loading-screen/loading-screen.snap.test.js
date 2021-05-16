import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import LoadingScreen from './loading-screen';


test(`Should LoadingScreen render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <LoadingScreen />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
