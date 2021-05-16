import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MainEmpty from './main-empty';


test(`Should MainEmpty render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <MainEmpty />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
