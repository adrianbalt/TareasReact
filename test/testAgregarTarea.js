import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import AgregarTarea from '../src/AgregaTarea';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<AgregarTarea />', () => {
  it('dibuja el formulario', () => {
    const wrapper = shallow(<AgregarTarea />);
    expect(wrapper.find('form')).to.have.lengthOf(1);
  });

});