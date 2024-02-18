//React Hooks
import React, { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/Slices/variationExpensesSlice";
import { AppDispatch, RootState } from '../store/store';

const Expenses: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const expenses = useSelector((state: RootState) => state.variationExpenses.variationExpenses);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>{expenses}%</div>
  );
};

export default Expenses;