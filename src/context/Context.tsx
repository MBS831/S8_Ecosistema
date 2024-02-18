import React, { ReactNode, createContext, useContext, useState } from "react";

export const Context = createContext<ContextProps | null>(null);

export const useProvider: () => ContextProps = (): ContextProps => {
  const context = useContext(Context);
  if (context == null) {
    throw new Error("useProvider must be used within a ContextProvider");
  }
  return context;
};

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextProps {
  weeksList: weekExpenses[];
  totalWeekBalance: number;
  daysData: string[];
  expensesDayData: number[];
  currentWeek: number;
  todayExpenses: number;
  yesterdayExpenses: number;
  percentageVariation: number;
  sign: string;
  changeWeek: (direction: "next" | "prev") => void;
}

interface weekExpenses {
  [key: string]: number;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const weeksList: weekExpenses[] = [
    {
      monday: 380,
      tuesday: 420,
      wednesday: 180,
      thursday: 200,
      friday: 421,
      saturday: 300,
      sunday: 600,
    },
    {
      monday: 150,
      tuesday: 70,
      wednesday: 205,
      thursday: 720,
      friday: 20,
      saturday: 420,
      sunday: 800,
    },
    {
      monday: 400,
      tuesday: 350,
      wednesday: 156,
      thursday: 60,
      friday: 200,
      saturday: 150,
      sunday: 550,
    },
    {
      monday: 300,
      tuesday: 70,
      wednesday: 50,
      thursday: 150,
      friday: 230,
      saturday: 130,
      sunday: 420,
    },
  ];

  // Data for TotalBalance
  const calculateWeekBalance = (week: weekExpenses): number => {
    return Object.values(week).reduce((total, current) => total + current, 0);
  };
  const totalWeekBalance = calculateWeekBalance(weeksList[currentWeek]);

  //Data for GraphicData
  const daysData = Object.keys(weeksList[currentWeek]).map((day) => `${day}`);
  const expensesDayData = Object.values(weeksList[currentWeek]);

  //Data for DailyExpenses
  const getExpensesByDay = (dayIndex: number): number => {
    const adjustedIndex = dayIndex === -1 || dayIndex === 0 ? 6 : dayIndex - 1;
    const daysOfWeek = Object.keys(weeksList[currentWeek]);
    const day = daysOfWeek[adjustedIndex];

    return weeksList[currentWeek][day];
  };

  const todayExpenses = getExpensesByDay(new Date().getDay());
  const yesterdayExpenses = getExpensesByDay(new Date().getDay() - 1);

  //Get the percentage variation
  const calculatePercentageVariation = (
    currentValue: number,
    previousValue: number
  ): number => {
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  const percentageVariation = Number(
    calculatePercentageVariation(todayExpenses, yesterdayExpenses).toFixed(2)
  );
  const sign = percentageVariation > 0 ? "+" : "";

  // change week
  const changeWeek = (direction: "next" | "prev"): void => {
    const newWeek = direction === "next" ? currentWeek + 1 : currentWeek - 1;

    if (newWeek >= 0 && newWeek < weeksList.length) {
      setCurrentWeek(newWeek);
    }
  };

  return (
    <div className="bg-yellow-50">
      <Context.Provider
        value={{
          weeksList,
          totalWeekBalance,
          daysData,
          expensesDayData,
          currentWeek,
          todayExpenses,
          yesterdayExpenses,
          percentageVariation,
          sign,
          changeWeek,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};