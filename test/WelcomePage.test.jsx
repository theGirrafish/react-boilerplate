import React from 'react';
import renderer from 'react-test-renderer';
import WelcomePage from '../src/components/WelcomePage';

describe('WelcomePage', () => {
  test('snapshot test', () => {
    const snapshot = renderer.create(<WelcomePage/>).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
