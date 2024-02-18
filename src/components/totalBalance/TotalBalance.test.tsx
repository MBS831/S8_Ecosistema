import { render, screen, fireEvent } from "@testing-library/react";
import { useProvider } from "../../context/Context"; 
import TotalBalance from "./TotalBalance";
import { toBeInTheDocument } from "@testing-library/jest-dom"; 

jest.mock("../your-provider-path", () => ({
  useProvider: jest.fn(),
}));

describe("TotalBalance component", () => {
  beforeEach(() => {
    (useProvider as jest.Mock).mockReturnValue({
      totalWeekBalance: 100,
      currentWeek: 0,
      weeksList: [0, 1, 2],
      changeWeek: jest.fn(),
    });
  });

  expect.extend({ toBeInTheDocument }); 

  test("renders TotalBalance component with correct balance", () => {
    render(<TotalBalance />);
    
    const balanceElement = screen.getByText("100€");
    expect(balanceElement).toBeInTheDocument(); 
  });

  test("renders TotalBalance component with previous week button", () => {
    render(<TotalBalance />);
    
    const previousWeekButton = screen.getByLabelText("PreviousWeek");
    expect(previousWeekButton).toBeInTheDocument(); 
  });

  test("renders TotalBalance component with next week button", () => {
    render(<TotalBalance />);
    
    const nextWeekButton = screen.getByLabelText("NextWeek");
    expect(nextWeekButton).toBeInTheDocument();
  });

  test("clicking previous week button calls changeWeek with 'prev'", () => {
    const changeWeek = jest.fn();
    (useProvider as jest.Mock).mockReturnValue({
      totalWeekBalance: 100,
      currentWeek: 1,
      weeksList: [0, 1, 2],
      changeWeek,
    });
    render(<TotalBalance />);
    
    const previousWeekButton = screen.getByLabelText("PreviousWeek");
    fireEvent.click(previousWeekButton);
    
    expect(changeWeek).toHaveBeenCalledWith("prev");
  });

  test("clicking next week button calls changeWeek with 'next'", () => {
    const changeWeek = jest.fn();
    (useProvider as jest.Mock).mockReturnValue({
      totalWeekBalance: 100,
      currentWeek: 0,
      weeksList: [0, 1, 2],
      changeWeek,
    });
    render(<TotalBalance />);
    
    const nextWeekButton = screen.getByLabelText("NextWeek");
    fireEvent.click(nextWeekButton);
    
    expect(changeWeek).toHaveBeenCalledWith("next");
  });
});