'use strict';

jest.unmock('object-assign');
jest.unmock('promise');
jest.unmock('raf');
jest.unmock('whatwg-fetch');

require('../polyfills');

const enzyme = require.requireActual('enzyme');
const Adapter = require.requireActual('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
