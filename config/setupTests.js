import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import API from '../client/mock/API';

const middlewares = [thunk.withExtraArgument(API)];
const mockStore = configureMockStore(middlewares);

global.mockStore = mockStore;
global.shallow = shallow;

configure({ adapter: new Adapter() });
