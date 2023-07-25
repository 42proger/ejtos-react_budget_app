import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency } = useContext(AppContext);

  useEffect(() => {}, [budget, currency]);

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency} {budget}
      </span>
    </div>
  );
};

export default Budget;
