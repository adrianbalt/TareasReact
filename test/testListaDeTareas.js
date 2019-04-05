import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ListaDeTareas from '../src/ListaDeTareas';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<ListaDeTareas />', () => {
  it('Se muestra la lista', () => {
    let listado = [

         {
            id: "123456",
            tarea: "titulo de la tarea 1",
            completado: false
        },
        {
            id: "1234567",
            tarea: "titulo de la tarea 2",
            completado: false
        }
    ];
    const wrapper = shallow(<ListaDeTareas  tareas={listado}  />);
    expect(wrapper.find('.lista-tareas')).to.have.length(1);
  });

});