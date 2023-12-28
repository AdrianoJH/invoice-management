// Dashboard.test.js
import { test } from 'vitest';
import { render } from 'vitest-dom';
import Dashboard from '../src/components/Dashboard';

test('renders without crashing', () => {
  render(<Dashboard />);
});

test('fetches and renders data', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce([
      {
        fileName: 'example-file-1',
        data: {
          energiaSCEE: [
            'JUN/23 100',
            'MAI/23 120',
          ],
          compensadaGDI: [
            'JUN/23 50',
            'MAI/23 60',
          ],
        },
      },
    ]),
  });

  const { container } = render(<Dashboard />);

  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(container.textContent).toContain('Consumo de Energia e Energia Compensada');
  expect(container.textContent).toContain('Valores Monetários e Economia GD');

  global.fetch.mockRestore();
});

