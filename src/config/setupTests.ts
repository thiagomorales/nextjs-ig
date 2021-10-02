import 'jest-canvas-mock';

import '@testing-library/jest-dom';
import dotenv from 'dotenv';
import { cache } from 'swr';

import { server } from '@mocks/server';

dotenv.config();

const originalWindowLocation = window.location;

beforeAll(() => {
  server.listen();

  delete (window as Partial<Window>).location;
  window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(originalWindowLocation),
      assign: {
        configurable: true,
        value: jest.fn(),
      },
    }
  ) as Location;
});

afterEach(async () => {
  server.resetHandlers();
  cache.clear();
  await new Promise(requestAnimationFrame);
});

afterAll(() => {
  server.close();

  window.location = originalWindowLocation;
});
