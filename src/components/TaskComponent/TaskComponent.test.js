import {render, screen, cleanup} from "@testing-library/react";
import TaskComponent from "../TaskComponent";

test('there is an undefined error', () => {

    render(<TaskComponent />);
    const todoElement = screen.getByTestId(`todo-${undefined}`);
    expect(todoElement).toBeInTheDocument();
    //expect(todoElement).toHaveTextContent('Hello World');
})