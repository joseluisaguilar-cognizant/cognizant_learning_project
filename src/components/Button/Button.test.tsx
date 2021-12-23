import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button component', () => {
  let button: HTMLElement;
  const onChange = jest.fn();
  beforeEach(() => {
    render(<Button type="primary" clickHandler={onChange} />);

    button = screen.getByText(/button/i);
  });
  test('should have a red background', () => {
    // Arrange
    //...nothing

    // Act
    //...nothing

    // Assert

    // Assert
    expect(button).toHaveStyle({ background: 'red' });
  });

  test('should have been created', () => {
    // Arrange
    //...nothing

    // Act
    //...nothing

    // Assert
    expect(button).toBeInTheDocument();
  });

  test('should have been clicked once', () => {
    // Arrange

    // Act
    userEvent.click(button);

    // Assert
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
