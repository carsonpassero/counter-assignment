// import necessary react testing library helpers here
// import the Counter component here
import {render, screen, fireEvent} from '@testing-library/react'
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcome = screen.getByText(/Counter/i);
  expect(welcome).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  const plus = screen.getByText('+');
  fireEvent.click(plus);
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  const minus = screen.getByText('-');
  fireEvent.click(minus);
  expect(count).toHaveTextContent("-1");
});
