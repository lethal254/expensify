import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();
store.dispatch(addExpense({ description: "WaterBill", amount: 1000 }));
store.dispatch(addExpense({ description: "GasBill", amount: 1000, createdAt:1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
