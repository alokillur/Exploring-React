import React from "react";
import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

const mapStateToProps = (state) => ({
  balance: state.account.balance,
});

export default connect(mapStateToProps)(BalanceDisplay);
