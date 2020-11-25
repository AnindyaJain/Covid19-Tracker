import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import fetchMock from 'fetch-mock';

configure ({ adapter: new Adapter() });
// afterEach(fetchMock.restore);


