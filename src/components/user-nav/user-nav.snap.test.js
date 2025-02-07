import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import UserNav from './user-nav';


test(`Should UserNav render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <UserNav />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
