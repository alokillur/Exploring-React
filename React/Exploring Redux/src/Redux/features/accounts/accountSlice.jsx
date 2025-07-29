const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit": 
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case "account/requestLoan":
      if (state.loan > 0) return state; 

      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };

    default:
      return state;
  }
}


export function deposit(amount, currency) {
  if (currency === "INR") {
    return { type: "account/deposit", payload: amount };
  }

  return async function (dispatch) {
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`;
    const res = await fetch(url);
    const data = await res.json();
    const convertedAmount = data.rates.INR;

    dispatch({ type: "account/deposit", payload: convertedAmount });
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, loanPurpose }, 
  };
}

export function payLoan() {
  return {
    type: "account/payLoan",
  };
}
