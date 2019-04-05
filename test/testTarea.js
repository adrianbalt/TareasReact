import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Tarea from '../src/Tarea';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tarea />', () => {
  it('Tiene una tarea', () => {
    let tarea = {
        id: "123456",
        tarea: "titulo de la tarea",
        completado: false
    }
    const wrapper = shallow(<Tarea tarea={tarea}  />);
    expect(wrapper.find('.label-tarea').text()).to.equal(tarea.tarea);
  });

  it('Aparece el text input al dar doble click', () => {
    let tarea = {
        id: "123456",
        tarea: "titulo de la tarea",
        completado: false
    }
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<Tarea tarea={tarea}  />);
        wrapper.find('.label-tarea').simulate('doubleclick');
        expect(wrapper.find('.input-tarea')).to.have.length(1);
      });

});