import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './App';
import Link from './link';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu />, <Link />, div);
});
