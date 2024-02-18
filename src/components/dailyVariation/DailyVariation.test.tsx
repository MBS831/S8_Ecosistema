import { render } from "@testing-library/react";
import { useProvider } from "../../context/Context"; 
import { useTranslation } from "react-i18next";
import DailyVariation from "./DailyVariation";

jest.mock("../../context/Context"); 
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: jest.fn() }),
}));

describe("DailyVariation component", () => {



  beforeEach(() => {
    (useProvider as jest.Mock).mockReturnValue({
      percentageVariation: 10,
      sign: "+",
    });
    (useTranslation as jest.Mock).mockReturnValue({
      t: jest.fn(),
    });
  });
  
  test("renders the correct percentage variation and sign", () => {
    const { getByText } = render(<DailyVariation />);
    
    const percentageVariation = getByText("+10%");
    expect(percentageVariation).toBeInTheDocument(); // Add the assertion type for toBeInTheDocument
  });

  test("renders the translated 'FromYesterday' text", () => {
    const { getByText } = render(<DailyVariation />);
    
    const fromYesterdayText = getByText("Translated FromYesterday Text");
    expect(fromYesterdayText).toBeInTheDocument(); // Add the assertion type for toBeInTheDocument
  });
});