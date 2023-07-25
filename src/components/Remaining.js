import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const remaining = budget - totalExpenses;
  const alertType = remaining <= 100 ? "alert-danger" : "alert-success";

  useEffect(() => {}, [expenses, budget, currency]);

  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency} {remaining}
      </span>
    </div>
  );
};

export default Remaining;
