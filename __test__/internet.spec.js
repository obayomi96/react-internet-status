import React from 'react';
import { render } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import InternetStatus from '../src/InternetStatus';

let isOnline = false;
describe('InternetStatus component test', () => {
  test('renders InternetStatus component', () => {
    render(<InternetStatus />);
  });
  test('window network activity', () => {
    act(() => {
      const onlineEvent = new Event('online')
      const offlineEvent = new Event('offline')
      if (window.dispatchEvent(onlineEvent)) {
        isOnline = true;
      }
      if (window.dispatchEvent(offlineEvent)) {
        isOnline = false;
      }
    })
  })
});
