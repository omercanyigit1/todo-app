import {render, screen, cleanup} from "@testing-library/react";
import HomePage from "../index";

test('there is an undefined error', () => {

    render(<HomePage />);
    const todoElement = screen.getByTestId("homepage");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Tasks');
})