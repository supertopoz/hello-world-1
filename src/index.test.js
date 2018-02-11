import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow }  from 'enzyme';

Enzyme.configure({adapter: new Adapter()})

const app = shallow(<App />);

it('renders correctly', () => {
	expect(app).toMatchSnapshot();
})

it('int the `state` with an empty list', ()=> {
	expect(app.state().gifts).toEqual([]);
})

it('adds a new gift to `state` when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{ id: 1 }])
})

it('renders a new gift to the dom',() => {
 
})

