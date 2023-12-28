import InvoiceLibrary from '../src/components/InvoiceLibrary';
import { mount } from 'vitest';
import axios from 'axios';
import { act } from 'vitest-utils';

test('renders without error', () => {
  act(() => {
    const wrapper = mount(<InvoiceLibrary />);
    expect(wrapper).toBeDefined();
  });
});

test('fetches clientes on component mount', async () => {
  const clientes = ['123', '456'];
  axios.get.mockResolvedValueOnce({ data: clientes });

  let wrapper;

  await act(async () => {
    wrapper = mount(<InvoiceLibrary />);
  });

  expect(wrapper.find('option').length).toBe(clientes.length + 1); 
});

test('fetches faturas when cliente is selected', async () => {
  const faturas = [
    { fileName: 'fatura1.pdf', mes: 'Jan' },
    { fileName: 'fatura2.pdf', mes: 'Feb' },
  ];

  axios.get.mockResolvedValueOnce({ data: ['123'] }); 
  axios.get.mockResolvedValueOnce({ data: faturas }); 

  let wrapper;

  await act(async () => {
    wrapper = mount(<InvoiceLibrary />);
  });

  act(() => {
    wrapper.find('select').simulate('change', { target: { value: '123' } });
  });

  expect(wrapper.find('li').length).toBe(faturas.length);
});
